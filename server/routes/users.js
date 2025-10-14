import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { v4 as uuidv4 } from 'uuid';
import { Resend } from "resend";
import { config } from "../config.js";

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to the users data file
const usersFilePath = path.join(__dirname, "../data/users.json");

// Initialize Resend client
const resend = new Resend(config.email.resendApiKey);

// Ensure data directory exists
const dataDir = path.join(__dirname, "../data");
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// Initialize users file if it doesn't exist
if (!fs.existsSync(usersFilePath)) {
  fs.writeFileSync(usersFilePath, JSON.stringify([], null, 2));
}

// Helper function to read users from file
const readUsers = () => {
  try {
    const data = fs.readFileSync(usersFilePath, "utf8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading users file:", error);
    return [];
  }
};

// Helper function to write users to file atomically with retries
const writeUsers = (users) => {
  const tempFilePath = `${usersFilePath}.tmp`;
  const maxAttempts = 5;
  const baseDelayMs = 75;

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      // Write to temp file first
      fs.writeFileSync(tempFilePath, JSON.stringify(users, null, 2));
      // Atomically replace target file
      fs.renameSync(tempFilePath, usersFilePath);
      return true;
    } catch (error) {
      // Clean up temp file if it exists
      try { if (fs.existsSync(tempFilePath)) fs.unlinkSync(tempFilePath); } catch {}

      const isLockError =
        error && (error.code === "EBUSY" || error.code === "EPERM" || error.code === "ENOENT");
      console.error(
        `Error writing users file (attempt ${attempt}/${maxAttempts}):`,
        error
      );
      if (attempt === maxAttempts || !isLockError) {
        return false;
      }
      // Exponential backoff delay before retrying
      const delay = baseDelayMs * Math.pow(2, attempt - 1);
      const end = Date.now() + delay;
      while (Date.now() < end) {
        // busy-wait minimal delay; avoids bringing in timers in this sync util
      }
    }
  }
  return false;
};

// POST /api/users/register - Register a new student
router.post("/register", async (req, res) => {
  try {
    console.log("📥 Incoming registration:", {
      name: req.body?.name,
      email: req.body?.email,
      phone: req.body?.phone,
      course: req.body?.course,
      customCourse: req.body?.customCourse,
      experience: req.body?.experience,
    });
    const { name, email, phone, course, customCourse, experience } = req.body;

    // Validate required fields
    if (!name || !email || !phone || !course) {
      return res.status(400).json({
        success: false,
        error: "Missing required fields",
        message: "Name, email, phone, and course are required"
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: "Invalid email format",
        message: "Please provide a valid email address"
      });
    }

    // Validate phone format (basic validation)
    const phoneRegex = /^[0-9+\-\s()]{10,}$/;
    if (!phoneRegex.test(phone)) {
      return res.status(400).json({
        success: false,
        error: "Invalid phone format",
        message: "Please provide a valid phone number"
      });
    }

    // Read existing users
    const users = readUsers();

    // Check if user already exists
    const existingUser = users.find(user => 
      user.email.toLowerCase() === email.toLowerCase()
    );

    if (existingUser) {
      return res.status(409).json({
        success: false,
        error: "User already exists",
        message: "A user with this email already exists"
      });
    }

    // Create new user
    const newUser = {
      id: uuidv4(),
      name: name.trim(),
      email: email.toLowerCase().trim(),
      phone: phone.trim(),
      course: course.trim(),
      customCourse: course === 'Other' ? (customCourse?.trim() || '') : '',
      experience: experience?.trim() || "",
      status: "pending", // pending, approved, rejected
      registrationDate: new Date().toISOString(),
      lastUpdated: new Date().toISOString()
    };

    // Add user to the list
    users.push(newUser);

    // Write back to file
    const success = writeUsers(users);

    if (!success) {
      return res.status(500).json({
        success: false,
        error: "Database error",
        message: "Failed to save user data"
      });
    }

    // Log successful registration
    console.log(`New user registered: ${newUser.name} (${newUser.email})`);

    // Send detailed email to leads@kingtechs.in via Resend
    try {
      console.log('📧 Attempting to send registration email via Resend...');
      if (!config.email.resendApiKey) {
        console.warn('⚠️ RESEND_API_KEY missing. Skipping email send and proceeding with 201 response.');
        // Soft-exit: do not throw, allow registration to succeed without email
        throw new Error('SKIP_EMAIL_SEND');
      }

      const emailHtml = `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
            <div style="background: linear-gradient(135deg, #0254f4, #1c949a, #20b7bf); padding: 20px; border-radius: 10px; margin-bottom: 20px;">
              <h1 style="color: white; margin: 0; text-align: center; font-size: 24px;">🎓 New Student Registration</h1>
            </div>
            
            <div style="background: white; padding: 25px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
              <h2 style="color: #0254f4; margin-top: 0; border-bottom: 2px solid #0254f4; padding-bottom: 10px;">Student Information</h2>
              
              <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                <tr style="background-color: #f8f9fa;">
                  <td style="padding: 12px; border: 1px solid #dee2e6; font-weight: bold; width: 30%;">Full Name:</td>
                  <td style="padding: 12px; border: 1px solid #dee2e6;">${newUser.name}</td>
                </tr>
                <tr>
                  <td style="padding: 12px; border: 1px solid #dee2e6; font-weight: bold;">Email Address:</td>
                  <td style="padding: 12px; border: 1px solid #dee2e6;"><a href="mailto:${newUser.email}" style="color: #0254f4;">${newUser.email}</a></td>
                </tr>
                <tr style="background-color: #f8f9fa;">
                  <td style="padding: 12px; border: 1px solid #dee2e6; font-weight: bold;">Phone Number:</td>
                  <td style="padding: 12px; border: 1px solid #dee2e6;"><a href="tel:${newUser.phone}" style="color: #0254f4;">${newUser.phone}</a></td>
                </tr>
                <tr>
                  <td style="padding: 12px; border: 1px solid #dee2e6; font-weight: bold;">Course Interest:</td>
                  <td style="padding: 12px; border: 1px solid #dee2e6;">${newUser.course === 'Other' ? newUser.customCourse : newUser.course}</td>
                </tr>
                <tr style="background-color: #f8f9fa;">
                  <td style="padding: 12px; border: 1px solid #dee2e6; font-weight: bold;">Experience Level:</td>
                  <td style="padding: 12px; border: 1px solid #dee2e6;">${newUser.experience || 'Not specified'}</td>
                </tr>
                <tr>
                  <td style="padding: 12px; border: 1px solid #dee2e6; font-weight: bold;">Registration Date:</td>
                  <td style="padding: 12px; border: 1px solid #dee2e6;">${new Date(newUser.registrationDate).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</td>
                </tr>
                <tr style="background-color: #f8f9fa;">
                  <td style="padding: 12px; border: 1px solid #dee2e6; font-weight: bold;">Student ID:</td>
                  <td style="padding: 12px; border: 1px solid #dee2e6; font-family: monospace; color: #666;">${newUser.id}</td>
                </tr>
              </table>

              <div style="background: linear-gradient(135deg, #0254f4, #1c949a); padding: 15px; border-radius: 8px; margin: 20px 0;">
                <h3 style="color: white; margin: 0 0 10px 0;">📋 Next Steps</h3>
                <ul style="color: white; margin: 0; padding-left: 20px;">
                  <li>Contact the student within 24 hours</li>
                  <li>Schedule a consultation call</li>
                  <li>Provide course details and pricing</li>
                  <li>Guide through the enrollment process</li>
                </ul>
              </div>

              <div style="background-color: #e8f4fd; padding: 15px; border-radius: 8px; border-left: 4px solid #0254f4; margin: 20px 0;">
                <h4 style="color: #0254f4; margin: 0 0 10px 0;">💡 Quick Actions</h4>
                <p style="margin: 5px 0;"><strong>Reply to student:</strong> <a href="mailto:${newUser.email}" style="color: #0254f4;">${newUser.email}</a></p>
                <p style="margin: 5px 0;"><strong>Call student:</strong> <a href="tel:${newUser.phone}" style="color: #0254f4;">${newUser.phone}</a></p>
              </div>

              <div style="text-align: center; margin-top: 25px; padding-top: 20px; border-top: 1px solid #dee2e6;">
                <p style="color: #666; font-size: 14px; margin: 0;">
                  This email was automatically generated by the KinG Technologies LMS system.<br>
                  Registration time: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
                </p>
              </div>
            </div>
          </div>
        `;

      const { data, error } = await resend.emails.send({
        from: config.email.resendFrom,
        to: "leads@kingtechs.in",
        subject: `New Student Registration: ${newUser.name} - ${newUser.course === 'Other' ? newUser.customCourse : newUser.course}`,
        html: emailHtml,
      });

      if (error) {
        throw error;
      }
      console.log(`✅ Registration email sent to leads@kingtechs.in for ${newUser.name}`);
      console.log('📧 Resend message ID:', data?.id);
    } catch (emailError) {
      if (emailError?.message === 'SKIP_EMAIL_SEND') {
        console.warn('📭 Email send skipped due to missing configuration.');
      } else {
        console.error("❌ Failed to send registration email:", emailError);
        console.error("❌ Email error details:", {
          message: emailError.message,
          name: emailError.name,
          stack: emailError.stack
        });
      }
      // Don't fail the registration if email fails
    }

    // Return success response
    res.status(201).json({
      success: true,
      message: "Registration successful! We'll contact you within 24 hours.",
      user: {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        course: newUser.course === 'Other' ? newUser.customCourse : newUser.course,
        registrationDate: newUser.registrationDate
      }
    });

  } catch (error) {
    console.error("❌ Registration error:", error);
    res.status(500).json({
      success: false,
      error: "Internal server error",
      message: process.env.NODE_ENV === 'development' ? (error?.message || "Registration failed") : "Something went wrong during registration",
      details: process.env.NODE_ENV === 'development' ? { stack: error?.stack } : undefined,
    });
  }
});

// GET /api/users - Get all users (admin endpoint)
router.get("/", async (req, res) => {
  try {
    const users = readUsers();
    
    // Return users without sensitive data
    const publicUsers = users.map(user => ({
      id: user.id,
      name: user.name,
      email: user.email,
      course: user.course,
      experience: user.experience,
      status: user.status,
      registrationDate: user.registrationDate
    }));

    res.json({
      success: true,
      count: publicUsers.length,
      users: publicUsers
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({
      success: false,
      error: "Internal server error",
      message: "Failed to fetch users"
    });
  }
});

// GET /api/users/:id - Get specific user
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const users = readUsers();
    const user = users.find(u => u.id === id);

    if (!user) {
      return res.status(404).json({
        success: false,
        error: "User not found",
        message: "No user found with the provided ID"
      });
    }

    res.json({
      success: true,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        course: user.course,
        experience: user.experience,
        message: user.message,
        status: user.status,
        registrationDate: user.registrationDate,
        lastUpdated: user.lastUpdated
      }
    });
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({
      success: false,
      error: "Internal server error",
      message: "Failed to fetch user"
    });
  }
});

// PUT /api/users/:id/status - Update user status (admin endpoint)
router.put("/:id/status", async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!status || !["pending", "approved", "rejected"].includes(status)) {
      return res.status(400).json({
        success: false,
        error: "Invalid status",
        message: "Status must be one of: pending, approved, rejected"
      });
    }

    const users = readUsers();
    const userIndex = users.findIndex(u => u.id === id);

    if (userIndex === -1) {
      return res.status(404).json({
        success: false,
        error: "User not found",
        message: "No user found with the provided ID"
      });
    }

    // Update user status
    users[userIndex].status = status;
    users[userIndex].lastUpdated = new Date().toISOString();

    const success = writeUsers(users);

    if (!success) {
      return res.status(500).json({
        success: false,
        error: "Database error",
        message: "Failed to update user status"
      });
    }

    res.json({
      success: true,
      message: "User status updated successfully",
      user: {
        id: users[userIndex].id,
        name: users[userIndex].name,
        email: users[userIndex].email,
        status: users[userIndex].status,
        lastUpdated: users[userIndex].lastUpdated
      }
    });

  } catch (error) {
    console.error("Error updating user status:", error);
    res.status(500).json({
      success: false,
      error: "Internal server error",
      message: "Failed to update user status"
    });
  }
});

// GET /api/users/test-email - Test email functionality via Resend
router.get("/test-email", async (req, res) => {
  try {
    console.log('🧪 Testing Resend email functionality...');
    if (!config.email.resendApiKey) {
      throw new Error('RESEND_API_KEY is missing');
    }
    
    const testMailOptions = {
      from: config.email.resendFrom,
      to: "leads@kingtechs.in",
      subject: "Test Email (Resend) - KinG LMS Registration System",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background: linear-gradient(135deg, #0254f4, #1c949a, #20b7bf); padding: 20px; border-radius: 10px; margin-bottom: 20px;">
            <h1 style="color: white; margin: 0; text-align: center; font-size: 24px;">🧪 Test Email (Resend)</h1>
          </div>
          
          <div style="background: white; padding: 25px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #0254f4; margin-top: 0;">Email System Test</h2>
            <p>This is a test email to verify that the registration email system is working correctly.</p>
            
            <div style="background-color: #e8f4fd; padding: 15px; border-radius: 8px; border-left: 4px solid #0254f4; margin: 20px 0;">
              <h4 style="color: #0254f4; margin: 0 0 10px 0;">System Information</h4>
              <p style="margin: 5px 0;"><strong>Provider:</strong> Resend</p>
              <p style="margin: 5px 0;"><strong>From:</strong> ${config.email.resendFrom}</p>
              <p style="margin: 5px 0;"><strong>Test Time:</strong> ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
            </div>
            
            <p style="color: #666; font-size: 14px; text-align: center; margin-top: 25px;">
              If you receive this email, the registration notification system is working correctly.
            </p>
          </div>
        </div>
      `,
    };

    console.log('📤 Sending test email via Resend...');
    const { data, error } = await resend.emails.send(testMailOptions);
    if (error) {
      throw error;
    }
    console.log('✅ Test email sent successfully (Resend):', data?.id);
    
    res.status(200).json({
      success: true,
      message: "Test email sent successfully to leads@kingtechs.in via Resend",
      messageId: data?.id
    });
  } catch (error) {
    console.error("❌ Test email failed:", error);
    console.error("❌ Email error details:", {
      message: error.message,
      name: error.name,
      stack: error.stack
    });
    
    res.status(500).json({
      success: false,
      message: "Test email failed",
      error: config.nodeEnv === "development" ? error.message : "Internal server error"
    });
  }
});

export default router;
