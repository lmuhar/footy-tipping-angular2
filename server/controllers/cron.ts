import { CronJob } from 'cron';
import * as _ from 'lodash';
import User from '../models/user';
import SendGridCtrl from './sendgrid';

export default class CronJobCtrl {

    reminderEmail() {

        new CronJob(process.env.REMINDER_EMAIL_CRON_TIME, () => {
            const sendGridCtrl = new SendGridCtrl();
            const emails = [];
            User.find({}, ['email'], (err, docs) => {
                if (err) { return console.error(err); }
                docs.forEach((user) => {
                    emails.push(user.email);
                });
                sendGridCtrl.sendReminderEmail(emails);
            });
        }, true, 'Australia/Sydney');
    }

}
