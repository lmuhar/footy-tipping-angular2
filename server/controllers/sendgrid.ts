import * as sgMail from '@sendgrid/mail';
import SavedTipEmail from './email-templates/saved-tip-email';
import TipReminderEmail from './email-templates/tip-reminder-email';

export default class SendGridCtrl {

    sendEmail = (req, res) => {
        sgMail.setApiKey(process.env.SENDGRID_API_KEY);
        const msg = {
            to: process.env.ADMIN_EMAIL_ADDRESS,
            from: process.env.ADMIN_EMAIL_ADDRESS,
            subject: 'Sending with SendGrid is Fun',
            text: 'and easy to do anywhere, even with Node.js',
            html: '<strong>HELLLLLLLLLLLLOOOOO</strong>',
        };
        sgMail.send(msg).then((tes) => {
            res.json({ success: true, message: 'Email send' });
        }, error => console.log(error));
    }

    enteredTipsEmail = (req, res) => {
        const body = new SavedTipEmail();
        sgMail.setApiKey(process.env.SENDGRID_API_KEY);
        const tips = req.body.tips.tips;
        const user = req.body.user;
        const round = req.body.round;
        const msg = {
            to: [`${user.email}`, process.env.ADMIN_EMAIL_ADDRESS],
            from: process.env.ADMIN_EMAIL_ADDRESS,
            subject: `Your AFL tips for Round ${round.number}`,
            html: body.getHtml(user, round, tips),
        };
        sgMail.sendMultiple(msg).then((tes) => {
            console.log(`Entered tips email send to: ${user.email}`);
            res.json({ success: true, message: 'Email sent' });
        }, error => console.log(error));
    }

    sendReminderEmail = (emails) => {
        const body = new TipReminderEmail();
        sgMail.setApiKey(process.env.SENDGRID_API_KEY);
        emails.push(process.env.ADMIN_EMAIL_ADDRESS);
        const msg = {
            to: emails,
            from: process.env.ADMIN_EMAIL_ADDRESS,
            subject: `Reminder: Don't forget to do your tips for this week`,
            html: body.getHtml()
        };

        sgMail.sendMultiple(msg).then((tes) => {
            console.log('Reminder email to tip send to: ');
            emails.forEach((address) => {
                console.log(address);
            });
        }, error => console.log(error));
    }

}
