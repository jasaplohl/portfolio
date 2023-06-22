import Mailjet from "node-mailjet";

export const sendEmail = async (fromAddress: string, subject: string, message: string): Promise<void> => {
    const mailjet = new Mailjet({
        apiKey: '',
        apiSecret: '',
    });

    const res = await mailjet
        .post('send', { version: 'v3.1' })
        .request({
            Messages: [
                {
                    From: {
                        Email: fromAddress
                    },
                    To: [
                        {
                            Email: 'jasa.plohl@gmail.com'
                        }
                    ],
                    Subject: subject,
                    HTMLPart: `<p>${message}<p>`
                }
            ]
        });

    console.log(res);
};