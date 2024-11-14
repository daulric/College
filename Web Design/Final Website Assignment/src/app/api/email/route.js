import { NextResponse } from 'next/server';
import { createTransport } from "nodemailer";

const transporter = createTransport({
    service: "yahoo",
    auth: {
        user: process.env.ACC_EMAIL,
        pass: process.env.ACC_PASS,
    },
    tls: {
        rejectUnauthorized: true
    }
});

async function sendEmail(email, info) {
    console.log("incoming email");
    try {
        const result = await transporter.sendMail({
            from: `"UA Store" <${process.env.ACC_EMAIL}>`,
            to: email || process.env.ACC_EMAIL,
            subject: info.title,
            text: info.text,
            html: info.html,
        });
        return result.accepted ? result : null;
    } catch (error) {
        console.error("Send Email Error:", error);
        throw new Error("Failed to send email");
    }
}

export async function POST(req) {
    try {
        const { email, info } = await req.json();
        let result = await sendEmail(email, info);

        if (!result) {
            return NextResponse.json(
                { error: 'Failed to send email' },
                { status: 400 }
            );
        }

        console.log("Email Sent Successfully");
        return NextResponse.json({ success: true, message: "Email Sent" });
    } catch (error) {
        console.error('Email error:', error);
        return NextResponse.json(
            { error: 'Failed to send email' },
            { status: 500 }
        );
    }
}

export async function GET() {
    try {
        return NextResponse.json({ status: 'Email service is ready' });
    } catch (error) {
        return NextResponse.json(
            { error: `Email service not available: ${error}` },
            { status: 500 }
        );
    }
};