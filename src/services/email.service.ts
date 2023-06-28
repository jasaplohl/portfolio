import * as client from '@sendgrid/mail';
import type { MailDataRequired } from '@sendgrid/helpers/classes/mail';
import {loadEnv} from "vite";

export const sendEmail = async (fromAddress: string, subject: string, message: string): Promise<void> => {
    // console.log(process.env.SEND_GRID_API_KEY);
    // console.log(process.env.VUE_APP_TEST);
    // client.setApiKey(process.env.);
    // const emailData: MailDataRequired = {
    //     from: fromAddress,
    //     to: 'jasa.plohl@gmail.com',
    //     subject: subject,
    //     text: message,
    //     html: `<p>${message}</p>` // TODO: HTML template
    // };
    // try {
    //     const res = await client.send(emailData);
    //     console.log(res);
    // } catch(err) {
    //     console.error(err);
    // }
};