// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const sgMail = require('@sendgrid/mail')
module.exports = () => {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    /* sgMail.setApiKey(credentials.sendgrid.password) */
    const from = 'pprotassow@posteo.de'
    return {
        send: (name, to, subject, html) => {
            const msg = {
                to: to, // Change to your recipient
                from: 'pprotassow@posteo.de', // Change to your verified sender
                subject: subject,
                text: html,
                html: html,
            }
            sgMail
                .send(msg)
                .then(() => {
                    console.log('Email sent')
                })
                .catch((error) => {
                    console.error(error)
                })
        },
    }
}
