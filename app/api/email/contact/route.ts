import { NextRequest, NextResponse } from 'next/server';
import { ContactFormValues } from '@/lib/types';
import { sendEmail } from '@/lib/services/email';
import { getEnv } from '@/lib/utils';
import { render } from '@react-email/render';
import ContactFormEmail from '@/emails/ContactFormEmail';

export async function POST(request: NextRequest) {
    const contactForm: ContactFormValues = await request.json();

    const { firstName, lastName, email, message, consentGiven } = contactForm;

    const html = render(
        ContactFormEmail({ firstName, lastName, email, message, consentGiven })
    );

    try {
        await sendEmail(
            getEnv('EMAIL_ADDRESS'),
            getEnv('EMAIL_ADDRESS'),
            email,
            'You received a new message',
            html
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
