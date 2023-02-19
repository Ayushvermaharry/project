const CardInfo = require('../models/cardInfo');

exports.getAllCardsData = async (req, res) => {
  try {
    const cards = await CardInfo.find();
    if(cards.length < 1){
        res.send({message:"No data available"})
    } else {
        res.send(cards);
    }
  } catch (err) {
    res.status(404).send(err.message);
  }
};

exports.addNewCardData = async (req, res) => {
  const { 
    name, 
    number, 
    address, 
    state, 
    city, 
    pincode, 
    nameOnCard,
    typeOfCard,
    cardNumber,
    cvv,
    expMM,
    expYY
    } = req.body;

  try {
    const card = new CardInfo({ 
        name, 
        number, 
        address, 
        state, 
        city, 
        pincode, 
        nameOnCard, 
        typeOfCard,
        cardNumber,
        cvv,
        expMM,
        expYY 
    });
    await card.save();
    res.send(card);
  } catch (err) {
    res.status(422).send(err.message);
  }
};

exports.getCardById = async (req, res) => {
  const { id } = req.params;
  try {
    const card = await CardInfo.findById(id);
    if(card == null){
        res.send({ message: 'Id not found' });
    }else{
        res.send(card);
    }
  } catch (err) {
    res.status(404).send(err.message);
  }
};

exports.getCardByName = async (req, res) => {
    const { name } = req.params;
    try {
      const card = await CardInfo.find({name:name});
      
      if(card == null){
            res.send({ message: 'Invalid Request' });
        }
        else if(card.length < 1) {
            res.send({ message: 'Name Not found' });
        }   
        else{
            res.send(card);
        }
    } catch (err) {
      res.status(404).send(err.message);
    }
  };

exports.updateCard = async (req, res) => {
  const { id } = req.params;
  const { 
    name, 
    number, 
    address, 
    state, 
    city, 
    pincode, 
    nameOnCard,
    typeOfCard, 
    cardNumber,
    cvv,
    expMM,
    expYY
    } = req.body;
  try {
    const card = await CardInfo.findByIdAndUpdate(id, { 
        name, 
        number, 
        address, 
        state, 
        city, 
        pincode, 
        nameOnCard,
        typeOfCard, 
        cardNumber,
        cvv,
        expMM,
        expYY }, 
        { new: true });
    if(card == null){
        res.send({ message: 'Id not found' });
    }else{
        res.send(card);
    }
    console.log(card);
  } catch (err) {
    console.log(err);
    res.status(422).send(err.message);
  }
};

exports.deleteCard = async (req, res) => {
  const { id } = req.params;
  try {
    const card = await CardInfo.findByIdAndRemove(id);
    const dataDel = await CardInfo.find();
    if(card == null){
        res.send({ message: 'Id not found or Deleted' });
    }else{
        res.send(dataDel);
    }
    
  } catch (err) {
    res.status(404).send(err.message);
  }
};
