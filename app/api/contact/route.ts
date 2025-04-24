import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message, subject } = await req.json();

    console.log("Received data:", { name, email, message, subject });

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_PORT === "465",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email to the person who submitted the form
    await transporter.sendMail({
      from: `"Spikereach Team" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thanks for reaching out to Spikereach!",
      html: `
        <p>Hi <strong>${name}</strong>,</p>
        <p>Thank you for contacting Spikereach. We’ve received your message and will get back to you shortly.</p>
        <p><em>Your Message:</em></p>
        <blockquote>${message}</blockquote>
        <br />
        <p>Warm regards,<br/>Spikereach Team</p>
      `,
    });

    // Email to Admin
    const mailsended= await transporter.sendMail({
      from: `"Spikereach Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.ADMIN_MAIL,
      subject: `📬 New Contact Submission from ${name}`,
      html: `
        <h2>New Contact Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${subject ? `<p><strong>Subject:</strong> ${subject}</p>` : ""}
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    console.log("Mail sent successfully:", mailsended);
    

    return NextResponse.json({ message: "Message sent successfully." });
  } catch (error) {
    console.error("Error sending emails:", error);
    return NextResponse.json(
      { message: "Internal server error", error },
      { status: 500 }
    );
  }
}
