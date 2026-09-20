import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const escape = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export async function POST(request: NextRequest) {
  try {
    const { name, email, message, company, startingPoint } =
      await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 },
      );
    }

    const { data, error } = await resend.emails.send({
      // Swap to noreply@zenscend.co once the domain is verified in Resend.
      from: "Zenscend Contact Form <onboarding@resend.dev>",
      to: ["info@zenscend.co"],
      replyTo: email,
      subject: `New enquiry from ${name}`,
      html: `
        <div style="font-family: Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #0C0C0C;">
          <div style="background: #0C0C0C; color: #FFFFFF; padding: 24px;">
            <div style="font-size: 12px; letter-spacing: 0.08em; text-transform: uppercase; color: #8C8C8C;">Zenscend · website enquiry</div>
            <div style="font-size: 24px; font-weight: 500; margin-top: 8px;">${escape(name)}${
              company ? ` · ${escape(company)}` : ""
            }</div>
            <a href="mailto:${escape(email)}" style="font-size: 15px; color: #BDBDBD;">${escape(email)}</a>
          </div>
          ${
            startingPoint
              ? `<div style="background: #FFFFFF; border-bottom: 1px solid #D9D7D1; padding: 14px 24px; font-size: 13px; letter-spacing: 0.08em; text-transform: uppercase; color: #5E5E5E;">Starting from: ${escape(startingPoint)}</div>`
              : ""
          }
          <div style="background: #F5F4F1; padding: 24px; border-left: 3px solid #FF4632;">
            <p style="margin: 0; font-size: 16px; line-height: 1.6; color: #4A4A4A; white-space: pre-wrap;">${escape(message)}</p>
          </div>
          <p style="font-size: 12px; color: #8C8C8C; padding: 16px 24px;">Reply to this email to answer them directly.</p>
        </div>
      `,
    });

    if (error) {
      console.error("Failed to send email:", error);
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }

    return NextResponse.json({ message: "Email sent", id: data?.id });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
