const mongoose = require('mongoose');

const cardInfo = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  number: {
    type: Number,
    required: true
  },
  address: {
    type: String,
  },
  state: {
    type: String,
  },
  city: {
    type: String,
    required: true
  },
  pincode: {
    type: String,
    required: true
  },
  nameOnCard: {
    type: String,
    required: true
  },
  typeOfCard:{
    type: String,
    required: true
  },
  cardNumber: {
    type: Number,
    required: true
  },
  cvv: {
    type: Number,
    required: true
  },
  expMM: {
    type: Number,
    required: true
  },
  expYY: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('cardInfo', cardInfo);