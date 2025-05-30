import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST as string,
  port: Number(process.env.SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.SMTP_USER as string,
    pass: process.env.SMTP_PASS as string,
  },
});

export async function sendEmail(From: string, to: string | undefined, subject: string, text: string) {
  try {
    await transporter.sendMail({
      from: `${From} <${process.env.SMTP_USER}>`,
      to,
      subject,
      text,
    });
    return { success: true };
  } catch (error) {
    console.error('Email sending failed:', error);
    return { success: false, error };
  }
}
