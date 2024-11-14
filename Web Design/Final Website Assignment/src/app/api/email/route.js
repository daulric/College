import { NextResponse } from 'next/server';
import { createTransport } from "nodemailer";



async function sendEmail(email, info) {

    const transporter = createTransport({
        host: process.env.SMTP_URL,
        port: parseInt(process.env.SMTP_PORT),
        secure: true, // Use SSL for Yahoo's SMTP on port 465
        auth: {
            user: process.env.ACC_EMAIL,
            pass: process.env.ACC_PASS,
        },
    });

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
    } finally {
        await transporter.close();
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

        return NextResponse.json({ success: true, result });
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