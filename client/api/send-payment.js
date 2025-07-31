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
      'Course': course,
      'Year of Passout': passoutYear,
      'Stream': stream,
      'College': college,
      'Recipient': recipient,
    } = fields;

    // Setup nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail', // or your SMTP provider
      auth: {
        user: process.env.MAIL_USER, // e.g. admin@kingtechs.in
        pass: process.env.MAIL_PASS,
      },
    });

    // Prepare mail options
    let mailOptions = {
      from: process.env.MAIL_USER,
      to: recipient || 'admin@kingtechs.in',
      subject: 'New Registration - Kin-G Technology',
      text: `New registration details:\n\nFull Name: ${name}\nPhone Number: ${phone}\nEmail ID: ${email}\nCourse: ${course}\nYear of Passout: ${passoutYear}\nStream: ${stream}\nCollege: ${college}`,
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
