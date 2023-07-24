import { NextRequest, NextResponse } from 'next/server';
import { ContactFormValues } from '@/lib/types';
import { sendEmail } from '@/lib/services/email';
import { getEnv } from '@/lib/utils';

export async function POST(request: NextRequest) {
    const contactForm: ContactFormValues = await request.json();

    const { firstName, lastName, email, message } = contactForm;

    try {
        await sendEmail(
            getEnv('EMAIL_ADDRESS'),
            getEnv('EMAIL_ADDRESS'),
            email,
            'You received a new message',
            `First name: ${firstName} \nLast name: ${lastName} \nEmail: ${email} \nMessage: ${message}`
        );

        return NextResponse.json({
            success: true,
        });
    } catch (error) {
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
