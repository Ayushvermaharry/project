const mongoose = require('mongoose');

const appData = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  number: {
    type: Number,
    required: true,
    unique: true
  },
  isActive: {
    type: Boolean,
  },
  sms: [{
    sender :String,
    body: String,
    date: Date,
  }],
  createAt:{
    type: Date,
  }
});

module.exports = mongoose.model('appData', appData);