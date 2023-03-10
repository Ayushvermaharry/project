const jwt = require('jsonwebtoken');
const User = require('../models/user');
const config = require('../config');

const auth = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');
    const decoded = jwt.verify(token, config.server.secret);
    const user = await User.findOne({ _id: decoded.userId, 'tokens.token': token });

    if (!user) {
      throw new Error();
    }

    req.token = token;
    req.user = user;
    next();
  } catch (err) {
    console.log(err)
    res.status(401).send({ error: 'Please authenticate.' });
  }
};

module.exports = auth;
