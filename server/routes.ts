import * as express from 'express';
import * as sgMail from '@sendgrid/mail';

import CatCtrl from './controllers/cat';
import UserCtrl from './controllers/user';
import RoundCtrl from './controllers/round';
import TeamCtrl from './controllers/team';
import LocationCtrl from './controllers/location';
import TipCtrl from './controllers/tip';
import SendGridCtrl from './controllers/sendgrid';

import Cat from './models/cat';
import User from './models/user';
import Round from './models/rounds';
import Team from './models/team';
import Tip from './models/tips';
import Location from './models/location';

export default function setRoutes(app) {
  const router = express.Router();

  const catCtrl = new CatCtrl();
  const userCtrl = new UserCtrl();
  const roundCtrl = new RoundCtrl();
  const teamCtrl = new TeamCtrl();
  const locationCtrl = new LocationCtrl();
  const tipCtrl = new TipCtrl();
  const sendGridCtrl = new SendGridCtrl();

  // Cats
  router.route('/cats').get(catCtrl.getAll);
  router.route('/cats/count').get(catCtrl.count);
  router.route('/cat').post(catCtrl.insert);
  router.route('/cat/:id').get(catCtrl.get);
  router.route('/cat/:id').put(catCtrl.update);
  router.route('/cat/:id').delete(catCtrl.delete);

  // Users
  router.route('/login').post(userCtrl.login);
  router.route('/user/:id/tips/:roundId').post(userCtrl.newTipsUser);
  router.route('/users').get(userCtrl.getAll);
  router.route('/users/count').get(userCtrl.count);
  router.route('/user').post(userCtrl.insert);
  router.route('/user/:id').get(userCtrl.get);
  router.route('/user/:id').put(userCtrl.update);
  router.route('/user/:id').delete(userCtrl.delete);
  router.route('/users/ladder').get(userCtrl.userTipTotal);

  // Rounds
  router.route('/rounds').get(roundCtrl.getAll);
  router.route('/rounds/count').get(roundCtrl.count);
  router.route('/round').post(roundCtrl.insert);
  router.route('/round/:id').get(roundCtrl.get);
  router.route('/round/:id').put(roundCtrl.update);
  router.route('/round/:id').delete(roundCtrl.delete);
  router.route('/rounds/list').get(roundCtrl.getWithIdAndNumber);
  router.route('/rounds/current/total').get(roundCtrl.getRoundTotal);

  // Tips
  router.route('/user/:userId/round/:roundId').get(tipCtrl.userTipsByRound);
  router.route('/tip/:id').put(tipCtrl.update);
  router.route('/tips/roundId/:roundId').get(tipCtrl.allTipsForRound);
  router.route('/tips/roundId/:roundId/results').put(tipCtrl.updateTipsWithResults);

  // Teams
  router.route('/teams').get(teamCtrl.getAll);

  // Locations
  router.route('/locations').get(locationCtrl.getAll);

  // Email routes
  router.route('/send-email').post(sendGridCtrl.sendEmail);
  router.route('/enter-tips-success').post(sendGridCtrl.enteredTipsEmail);

  // Apply the routes to our application with the prefix /api
  app.use('/api', router);
}
