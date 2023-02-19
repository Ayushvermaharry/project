const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const config = require('../config');


//Code is here while login and sign up

router.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = new User({ name, email, password });
    await user.save();
    const token = jwt.sign({ userId: user._id }, config.server.secret);
    res.send({ token });
  } catch (err) {
    res.status(422).send(err.message);
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(422).send({ error: 'Must provide email and password this is calling' });
  }
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).send({ error: 'Invalid email or password' });
  }
  try {
    await user.comparePassword(password);
    const token = jwt.sign({ userId: user._id }, config.server.secret);
    res.send({ token });
  } catch (err) {
    return res.status(422).send({ error: 'Invalid email or password' });
  }
});

module.exports = router;
