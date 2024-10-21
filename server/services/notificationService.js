import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.example.com',
  port: 587,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendEmail = async (employeeId, message) => {
  // In a real application, you would fetch the employee's email based on their ID
  const employee = { email: 'employee@example.com' };

  const mailOptions = {
    from: 'clockwatch@example.com',
    to: employee.email,
    subject: 'Missed Clock-in/out Notification',
    text: message,
  };

  await transporter.sendMail(mailOptions);
};