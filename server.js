require('dotenv').config();
const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const clientDist = path.join(__dirname, 'client', 'dist');
const useReact = require('fs').existsSync(clientDist);

if (useReact) {
  app.use(express.static(clientDist));
}

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587', 10),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const YOUR_EMAIL = process.env.YOUR_EMAIL;

app.post('/api/waitlist', async (req, res) => {
  try {
    const { name, email, company, message } = req.body;

    if (!email) {
      return res.status(400).json({ success: false, message: 'Email is required.' });
    }

    const ownerMail = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: YOUR_EMAIL,
      subject: `[Inbound Select] New Lead: ${name || email}`,
      html: `
        <h2>New Inbound Select Lead</h2>
        <p><strong>Name:</strong> ${name || 'Not provided'}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        <p><strong>Message:</strong> ${message || 'Not provided'}</p>
        <hr>
        <p><em>Submitted from Inbound Select</em></p>
      `,
    };

    const confirmMail = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: email,
      subject: "Thanks for your interest in Inbound Select",
      html: `
        <p>Hi ${name || 'there'},</p>
        <p>Thanks for reaching out. We've received your details and will be in touch shortly.</p>
        <p>Best,<br>The Inbound Select Team</p>
      `,
    };

    await transporter.sendMail(ownerMail);
    await transporter.sendMail(confirmMail);

    res.json({ success: true, message: "Thanks! We'll be in touch soon." });
  } catch (err) {
    console.error('Waitlist error:', err);
    res.status(500).json({ success: false, message: 'Something went wrong. Please try again.' });
  }
});

if (useReact) {
  app.get('*', (req, res) => {
    res.sendFile(path.join(clientDist, 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  if (!process.env.SMTP_USER) {
    console.warn('Add SMTP_USER, SMTP_PASS, YOUR_EMAIL to .env to enable email.');
  }
});
