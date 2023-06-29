import type { MailDataRequired } from '@sendgrid/helpers/classes/mail';

export const sendEmail = async (fromAddress: string, subject: string, message: string): Promise<void> => {
    throw new Error('Not implemented yet');
    // const emailData: MailDataRequired = {
    //     to: 'jasa.plohl@gmail.com',
    //     from: {
    //         email: 'jasa.plohl@gmail.com',
    //         name: 'Portfolio Website'
    //     },
    //     subject: `${fromAddress} - ${subject}`,
    //     text: message,
    //     html: `<p>${message}</p>` // TODO: HTML template
    // };
    // try {
    //     const res: Response = await fetch('https://api.sendgrid.com/v3/mail/send', {
    //         method: 'POST',
    //         headers: {
    //             'Authorization': `Bearer ${import.meta.env.VITE_SENDGRID_API_KEY}`,
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(emailData),
    //     });
    //     console.log(res);
    // } catch (err: any) {
    //     console.error(err);
    // }
};