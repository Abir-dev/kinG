import nodemailer from 'nodemailer';
import formidable from 'formidable';
import fs from 'fs';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const form = new formidable.IncomingForm();
  form.parse(req, async (err, fields, files) => {
    if (err) {
      return res.status(500).json({ error: 'Form parsing error' });
    }

    const {
      'Full Name': name,
      'Phone Number': phone,
      'Email ID': email,
      'Registration Type': registrationType,
      'Course': course,
      'Course Pricing': coursePricing,
      'Year of Passout': passoutYear,
      'Stream': stream,
      'College': college,
      'Recipient': recipient,
    } = fields;

    // Setup nodemailer transporter for Hostinger
    const transporter = nodemailer.createTransporter({
      host: process.env.MAIL_HOST,
      port: parseInt(process.env.MAIL_PORT),
      secure: process.env.MAIL_SECURE === 'true',
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    // Prepare mail options
    let mailOptions = {
      from: process.env.MAIL_USER,
      to: 'admin@kingtechs.in',
      subject: `New Registration - ${registrationType || 'Kin-G Technology'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: #ffffff; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h1 style="color: #2563eb; text-align: center; margin-bottom: 30px;">New Registration - Kin-G Technology</h1>
            
            <div style="background-color: #f1f5f9; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h2 style="color: #1e40af; margin-top: 0;">Registration Details</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr><td style="padding: 8px 0; font-weight: bold; color: #374151;">Full Name:</td><td style="padding: 8px 0; color: #6b7280;">${name}</td></tr>
                <tr><td style="padding: 8px 0; font-weight: bold; color: #374151;">Phone Number:</td><td style="padding: 8px 0; color: #6b7280;">${phone}</td></tr>
                <tr><td style="padding: 8px 0; font-weight: bold; color: #374151;">Email ID:</td><td style="padding: 8px 0; color: #6b7280;">${email}</td></tr>
                <tr><td style="padding: 8px 0; font-weight: bold; color: #374151;">Registration Type:</td><td style="padding: 8px 0; color: #6b7280;">${registrationType}</td></tr>
                ${course && course !== 'N/A' ? `<tr><td style="padding: 8px 0; font-weight: bold; color: #374151;">Course:</td><td style="padding: 8px 0; color: #6b7280;">${course}</td></tr>` : ''}
                ${coursePricing && coursePricing !== 'N/A' ? `<tr><td style="padding: 8px 0; font-weight: bold; color: #374151;">Course Pricing:</td><td style="padding: 8px 0; color: #6b7280;">${coursePricing}</td></tr>` : ''}
                <tr><td style="padding: 8px 0; font-weight: bold; color: #374151;">Year of Passout:</td><td style="padding: 8px 0; color: #6b7280;">${passoutYear}</td></tr>
                <tr><td style="padding: 8px 0; font-weight: bold; color: #374151;">Stream:</td><td style="padding: 8px 0; color: #6b7280;">${stream}</td></tr>
                <tr><td style="padding: 8px 0; font-weight: bold; color: #374151;">College:</td><td style="padding: 8px 0; color: #6b7280;">${college}</td></tr>
              </table>
            </div>
            
            <p style="color: #6b7280; font-size: 14px; text-align: center; margin-top: 30px;">
              This email was sent automatically from the Kin-G Technology registration system.
            </p>
          </div>
        </div>
      `,
      attachments: [],
    };

    // Attach payment receipt if present
    if (files['Payment Receipt']) {
      const file = files['Payment Receipt'];
      mailOptions.attachments.push({
        filename: file.originalFilename,
        path: file.filepath,
      });
    }

    try {
      await transporter.sendMail(mailOptions);
      return res.status(200).json({ success: true });
    } catch (error) {
      return res.status(500).json({ error: 'Failed to send email', details: error.message });
    }
  });
}
