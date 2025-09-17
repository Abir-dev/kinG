import express from "express";
import nodemailer from "nodemailer";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
import { config } from "../config.js";

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../uploads"));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
  },
});

// Create transporter lazily to avoid auth attempts on server boot
function createTransporter() {
  return nodemailer.createTransport({
    host: config.email.host,
    port: config.email.port,
    secure: config.email.secure,
    auth: {
      user: config.email.user,
      pass: config.email.pass,
    },
  });
}

// POST endpoint for sending payment data
router.post(
  "/send-payment",
  upload.single("Payment Receipt"),
  async (req, res) => {
    try {
      const formData = req.body;
      const file = req.file;

      // Validate required fields
      const requiredFields = [
        "Full Name",
        "Phone Number",
        "Email ID",
        "Registration Type",
        "Course",
      ];
      const missingFields = requiredFields.filter((field) => !formData[field]);

      if (missingFields.length > 0) {
        return res.status(400).json({
          success: false,
          message: `Missing required fields: ${missingFields.join(", ")}`,
        });
      }

      // Prepare email content
      const mailOptions = {
        from: config.email.user,
        to: config.email.user, // sending to yourself
        subject: `New Registration: ${formData["Full Name"]}`,
        html: `
        <h2>New Registration Details</h2>
        <p><strong>Full Name:</strong> ${formData["Full Name"]}</p>
        <p><strong>Phone Number:</strong> ${formData["Phone Number"]}</p>
        <p><strong>Email ID:</strong> ${formData["Email ID"]}</p>
        <p><strong>Registration Type:</strong> ${formData["Registration Type"]}</p>
        <p><strong>Course:</strong> ${formData["Course"]}</p>
        <p><strong>Course Pricing:</strong> ${formData["Course Pricing"] || "N/A"}</p>
        <p><strong>Year of Passout:</strong> ${formData["Year of Passout"] || "N/A"}</p>
        <p><strong>Stream:</strong> ${formData["Stream"] || "N/A"}</p>
        <p><strong>College:</strong> ${formData["College"] || "N/A"}</p>
        <p><strong>Submission Time:</strong> ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}</p>
      `,
        attachments: file
          ? [
              {
                filename: file.originalname,
                path: file.path,
              },
            ]
          : [],
      };

      // Send email
      const transporter = createTransporter();
      const info = await transporter.sendMail(mailOptions);
      console.log("✅ Email sent successfully:", info.messageId);

      res.status(200).json({
        success: true,
        message: "Registration data sent successfully",
        messageId: info.messageId,
      });
    } catch (error) {
      console.error("❌ Error sending email:", error);
      res.status(500).json({
        success: false,
        message: "Failed to send registration data",
        error:
          config.nodeEnv === "development"
            ? error.message
            : "Internal server error",
      });
    }
  },
);

// GET endpoint to test email configuration
router.get("/test-email", async (req, res) => {
  try {
    const transporter = createTransporter();
    const testMailOptions = {
      from: config.email.user,
      to: config.email.user,
      subject: "Test Email - KinG LMS Server",
      html: `
        <h2>Test Email</h2>
        <p>This is a test email to verify the server configuration.</p>
        <p><strong>Server:</strong> ${config.email.host}:${config.email.port}</p>
        <p><strong>User:</strong> ${config.email.user}</p>
        <p><strong>Time:</strong> ${new Date().toISOString()}</p>
      `,
    };

    const info = await transporter.sendMail(testMailOptions);
    res.status(200).json({
      success: true,
      message: "Test email sent successfully",
      messageId: info.messageId,
    });
  } catch (error) {
    console.error("❌ Test email failed:", error);
    res.status(500).json({
      success: false,
      message: "Test email failed",
      error:
        config.nodeEnv === "development"
          ? error.message
          : "Internal server error",
    });
  }
});

export default router;
