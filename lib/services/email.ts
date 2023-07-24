import Sendgrid from '@sendgrid/mail';
import { getEnv } from '@/lib/utils';

export const sendEmail = async (
    to: string,
    from: string,
    replyTo: string,
    subject: string,
    text: string
) => {
    Sendgrid.setApiKey(getEnv('EMAIL_PROVIDER_API_KEY'));

    const config = {
        to,
        from,
        subject,
        text,
        replyTo,
    };

    try {
        await Sendgrid.send(config);
    } catch (error) {
        throw new Error(error as string);
    }
};
