const User = require('../models/user');

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (err) {
    res.status(404).send(err.message);
  }
};

exports.createUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = new User({ name, email, password });
    await user.save();
    res.send(user);
  } catch (err) {
    res.status(422).send(err.message);
  }
};

exports.getUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    res.send(user);
  } catch (err) {
    res.status(404).send(err.message);
  }
};

exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email, password } = req.body;
  try {
    const user = await User.findByIdAndUpdate(id, { name, email, password }, { new: true });
    res.send(user);
  } catch (err) {
    res.status(422).send(err.message);
  }
};

exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    await User.findByIdAndRemove(id);
    res.send({ message: 'User deleted successfully' });
  } catch (err) {
    res.status(404).send(err.message);
  }
};
