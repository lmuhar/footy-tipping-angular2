import * as sgMail from '@sendgrid/mail';
import { SendgridModel } from './../models/sendgrid';

export default class SendGridCtrl {
    sendEmail = (req, res) => {
        sgMail.setApiKey(process.env.SENDGRID_API_KEY);
        console.log(req.body);
        const msg = {
            to: 'lauren.k.muhar@gmail.com',
            from: 'lauren.k.muhar@gmail.com',
            subject: 'Sending with SendGrid is Fun',
            text: 'and easy to do anywhere, even with Node.js',
            html: '<strong>HELLLLLLLLLLLLOOOOO</strong>',
        };
        sgMail.send(msg, (err, info) => {
            if (!err) {
                res.json({success: true, message: 'Email send'});
            } else {
                console.log(err);
            }
        });
    }

    enteredTipsEmail = (req, res) => {
        sgMail.setApiKey(process.env.SENDGRID_API_KEY);
        console.log(req.body);
        console.log(req.body.round);
        const msg = {
            to: 'lauren.k.muhar@gmail.com',
            from: 'lauren.k.muhar@gmail.com',
            subject: 'Your tips',
            html: `<div>
                <h4>Hello ${req.body.user.username}, here are your tips for Round ${req.body.round.number}</h3>
                <div>
                    ${req.body.tips[0] ? req.body.tips[0] === 0 ? req.body.round.games[0].homeTeam : req.body.round.games[0].awayTeam : '' }
                </div>
                <div>
                    ${req.body.tips[1] ? req.body.tips[1] === 0 ? req.body.round.games[1].homeTeam : req.body.round.games[1].awayTeam : ''}
                </div>
                <div>
                    ${req.body.tips[2] ? req.body.tips[2] === 0 ? req.body.round.games[2].homeTeam : req.body.round.games[2].awayTeam : '' }
                </div>
                <div>
                    ${req.body.tips[3] ? req.body.tips[3] === 0 ? req.body.round.games[3].homeTeam : req.body.round.games[3].awayTeam : '' }
                </div>
                <div>
                    ${req.body.tips[4] ? req.body.tips[4] === 0 ? req.body.round.games[4].homeTeam : req.body.round.games[4].awayTeam : '' }
                </div>
                <div>
                    ${req.body.tips[5] ? req.body.tips[5] === 0 ? req.body.round.games[5].homeTeam : req.body.round.games[5].awayTeam : '' }
                </div>
                <div>
                    ${req.body.tips[6] ? req.body.tips[6] === 0 ? req.body.round.games[6].homeTeam : req.body.round.games[6].awayTeam : '' }
                </div>
                <div>
                    ${req.body.tips[7] ? req.body.tips[7] === 0 ? req.body.round.games[7].homeTeam : req.body.round.games[7].awayTeam : '' }
                </div>
                <div>
                    ${req.body.tips[8] ? req.body.tips[8] === 0 ? req.body.round.games[8].homeTeam : req.body.round.games[8].awayTeam : '' }
                </div>
            </div>`,
        };
        sgMail.send(msg, (err, info) => {
            if (!err) {
                res.json({ success: true, message: 'Email send' });
            } else {
                console.log(err);
            }
        });
    }

}
