import * as dotenv from 'dotenv';
import * as jwt from 'jsonwebtoken';

import User from '../models/user';
import Tip from '../models/tips';
import BaseCtrl from './base';

export default class UserCtrl extends BaseCtrl {
  model = User;

  login = (req, res) => {
    this.model.findOne({ email: req.body.email }, (err, user) => {
      if (!user) { return res.sendStatus(403); }
      user.comparePassword(req.body.password, (error, isMatch) => {
        if (!isMatch) { return res.sendStatus(403); }
        const token = jwt.sign({ user: user }, process.env.SECRET_TOKEN); // , { expiresIn: 10 } seconds
        res.status(200).json({ token: token });
      });
    });
  }

  newTipsUser = (req, res) => {
    const { userId } = req.params;
    // Create a new tip
    const newTip = new Tip(req.body);
    // Get User
    const user = this.model.findById(userId);
    // Assign user as a tip's
    newTip.user = user;
    // Save the tip
    newTip.save();
    // add tip to the users tips aray
    user.tips.push(newTip);
    // save the user
    user.save();
    res.status(201).json(newTip);
  }
// https://www.youtube.com/watch?v=FVn_wj1jLN0
}
