import * as client from '@sendgrid/mail';
import type { MailDataRequired } from '@sendgrid/helpers/classes/mail';

export const sendEmail = async (fromAddress: string, subject: string, message: string): Promise<void> => {
    client.setApiKey('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');
    const emailData: MailDataRequired = {
        from: fromAddress,
        to: 'jasa.plohl@gmail.com',
        subject: subject,
        text: message,
        html: `<p>${message}</p>` // TODO: HTML template
    };
    try {
        const res = await client.send(emailData);
        console.log(res);
    } catch(err) {
        console.error(err);
    }
};