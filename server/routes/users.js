import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { v4 as uuidv4 } from 'uuid';
import { config } from "../config.js";

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to the users data file
const usersFilePath = path.join(__dirname, "../data/users.json");

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

export default router;
