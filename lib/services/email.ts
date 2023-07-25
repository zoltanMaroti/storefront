import Sendgrid from '@sendgrid/mail';
import { getEnv } from '@/lib/utils';

export const sendEmail = async (
    to: string,
    from: string,
    replyTo: string,
    subject: string,
    html: string
) => {
    Sendgrid.setApiKey(getEnv('EMAIL_PROVIDER_API_KEY'));

    const config = {
        to,
        from,
        subject,
        replyTo,
        html,
    };

    try {
        await Sendgrid.send(config);
    } catch (error) {
        throw new Error(error as string);
    }
};
