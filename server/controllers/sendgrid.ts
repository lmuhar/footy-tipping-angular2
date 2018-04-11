import * as sgMail from '@sendgrid/mail';
import * as helpers from '@sendgrid/helpers';
import SavedTipEmail from './email-templates/saved-tip-email';

export default class SendGridCtrl {

    sendEmail = (req, res) => {
        sgMail.setApiKey(process.env.SENDGRID_API_KEY);
        const msg = {
            to: 'lauren.k.muhar@gmail.com',
            from: 'lauren.k.muhar@gmail.com',
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
            to: `lauren.k.muhar@gmail.com`,
            from: 'lauren.k.muhar@gmail.com',
            subject: `Your AFL tips for Round ${round.number}`,
            html: body.getHtml(user, round, tips),
        };
        sgMail.send(msg).then((tes) => {
            res.json({ success: true, message: 'Email send' });
        }, error => console.log(error));
    }

}
