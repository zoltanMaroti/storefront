import { IEmailApiClient } from '@/lib/interfaces';
import { ContactFormValues } from '@/lib/types';

export const EmailApiClient: IEmailApiClient = {
    sendContactForm: async (contactForm: ContactFormValues) => {
        const response = await fetch('/api/email/contact', {
            method: 'POST',
            body: JSON.stringify(contactForm),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Failed to submit contact form');
        }

        return await response.json();
    },
};
