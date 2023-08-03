import Sendgrid from '@sendgrid/mail';
import { getEnv } from '@/lib/utils';

export const sendEmail = async (
    to: string,
    from: string,
    replyTo: string,
    subject: string,
    html: string,
    attachment?: string
) => {
    Sendgrid.setApiKey(getEnv('EMAIL_PROVIDER_API_KEY'));

    const config = {
        to,
        from,
        subject,
        replyTo,
        html,
        ...(attachment && {
            attachments: [
                {
                    content: attachment,
                    filename: 'invoice.pdf',
                    type: 'application/pdf',
                    disposition: 'attachment',
                },
            ],
        }),
    };

    try {
        await Sendgrid.send(config);
    } catch (error) {
        throw new Error(error as string);
    }
};
