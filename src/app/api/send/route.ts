import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import {EmailTemplate} from "@/components/email-template/email-template";

// const resend = new Resend(process.env.RESEND_API_KEY);
const resend = new Resend('re_FSctFVNE_NKEX19YsBR9F9CcAGhHxasRS');

export async function POST() {
    try {
        const data = await resend.emails.send({
            from: 'connect@uqidev.com ',
            to: ['delivered@resend.dev'],
            subject: 'Hello world',
            // @ts-ignore
            react: EmailTemplate,
        });

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error });
    }
}
