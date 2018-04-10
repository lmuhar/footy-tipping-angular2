import * as sgMail from '@sendgrid/mail';

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
        sgMail.setApiKey(process.env.SENDGRID_API_KEY);
        const tips = req.body.tips.tips;
        const user = req.body.user;
        const round = req.body.round;
        const msg = {
            to: `${user.email}`,
            from: 'lauren.k.muhar@gmail.com',
            subject: `Your AFL tips for Round ${round.number}`,
            html: `<table>
                <tr>
                    <td align="center">
                        <h4>Hello ${user.username}, here are your tips for Round ${round.number}</h3>
                    </td>
                </tr>
                <tr>
                    <td align="center">
                        ${round.games[0] && round.games[0].homeTeam ? tips[0] === 0 ?
                            round.games[0].homeTeam : round.games[0].awayTeam : '' }
                    </td>
                    <td align="center">
                        ${round.games[1] && round.games[1].homeTeam ? tips[1] === 0 ?
                            round.games[1].homeTeam : round.games[1].awayTeam : ''}
                    </td>
                    <td align="center">
                        ${round.games[2] && round.games[2].homeTeam ? tips[2] === 0 ?
                            round.games[2].homeTeam : round.games[2].awayTeam : '' }
                    </td>
                    <td align="center">
                        ${round.games[3] && round.games[3].homeTeam ? tips[3] === 0 ?
                            round.games[3].homeTeam : round.games[3].awayTeam : '' }
                    </td>
                    <td align="center">
                        ${round.games[4] && round.games[4].homeTeam ? tips[4] === 0 ?
                            round.games[4].homeTeam : round.games[4].awayTeam : '' }
                    </td>
                    <td align="center">
                        ${round.games[5] && round.games[5].homeTeam ? tips[5] === 0 ?
                            round.games[5].homeTeam : round.games[5].awayTeam : '' }
                    </td>
                    <td align="center">
                        ${round.games[6] && round.games[6].homeTeam ? tips[6] === 0 ?
                            round.games[6].homeTeam : round.games[6].awayTeam : '' }
                    </td>
                    <td align="center">
                        ${round.games[7] && round.games[7].homeTeam ? tips[7] === 0 ?
                            round.games[7].homeTeam : round.games[7].awayTeam : '' }
                    </td>
                    <td align="center">
                        ${round.games[8] && round.games[8].homeTeam ? tips[8] === 0 ?
                            round.games[8].homeTeam : round.games[8].awayTeam : '' }
                    </td>
                </tr>
                <tr>
                    <td align="center">
                        Footer
                    </td>
                </tr>
            </table>`,
        };
        sgMail.send(msg).then((tes) => {
            res.json({ success: true, message: 'Email send' });
        }, error => console.log(error));
    }

}
