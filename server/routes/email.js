import express from 'express';
import nodemailer from 'nodemailer';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../uploads'));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

// Email configuration using Hostinger settings from .env
const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,       // smtp.hostinger.com
  port: process.env.MAIL_PORT,       // 465
  secure: process.env.MAIL_SECURE === 'true', // true
  auth: {
    user: process.env.MAIL_USER,    // admin@kingtechs.in
    pass: process.env.MAIL_PASS      // KinG@2025
  }
});

// POST endpoint for sending payment data
router.post('/send-payment', upload.single('Payment Receipt'), async (req, res) => {
  try {
    const formData = req.body;
    const file = req.file;
    
    // Prepare email content
    const mailOptions = {
      from: process.env.MAIL_USER, // admin@kingtechs.in
      to: process.env.MAIL_USER,   // admin@kingtechs.in (sending to yourself)
      subject: `New Registration: ${formData['Full Name']}`,
      html: `
        <h2>New Registration Details</h2>
        <p><strong>Full Name:</strong> ${formData['Full Name']}</p>
        <p><strong>Phone Number:</strong> ${formData['Phone Number']}</p>
        <p><strong>Email ID:</strong> ${formData['Email ID']}</p>
        <p><strong>Registration Type:</strong> ${formData['Registration Type']}</p>
        <p><strong>Course:</strong> ${formData['Course']}</p>
        <p><strong>Course Pricing:</strong> ${formData['Course Pricing']}</p>
        <p><strong>Year of Passout:</strong> ${formData['Year of Passout']}</p>
        <p><strong>Stream:</strong> ${formData['Stream']}</p>
        <p><strong>College:</strong> ${formData['College']}</p>
      `,
      attachments: file ? [
        {
          filename: file.originalname,
          path: file.path
        }
      ] : []
    };

    // Send email
    await transporter.sendMail(mailOptions);
    
    res.status(200).json({ success: true, message: 'Registration data sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Failed to send registration data' });
  }
});

export default router;