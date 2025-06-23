import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: 'omsaikripafoundation@gmail.com',
    pass: 'Apple@1234',
  },
});

export async function POST(req, res) {
  const { name, email, message, subject } = req.body;

  const mailOptions = {
    from: email,
    to: 'techzasha@gmail.com',
    subject: `Contact Form Submission from ${name}`,
    text: subject - message, 
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error sending email' });
  }
}