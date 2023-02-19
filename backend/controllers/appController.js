const appData = require('../models/appData');

exports.getAllAppData = async (req, res) => {
  try {
    const AppData = await appData.find();
    res.send(AppData);
  } catch (err) {
    res.status(404).send(err.message);
  }
};

exports.createAppData = async (req, res) => {
  try {
    const { name, number, isActive, sms, createdAt } = req.body;
    var oldSmsData = sms;
    const dataExists = await appData.findOne({number});
    if(dataExists){
      dataExists.number = number;
      dataExists.name = name;
      dataExists.isActive = isActive;
      dataExists.createAt = createdAt;
      oldSmsData.forEach(data => {
        dataExists.sms.push(data)
      })
      const updatedData = await appData.findByIdAndUpdate(dataExists.id ,dataExists, {new: true});
      res.send(updatedData);
    }else{
      const AppData = new appData({ 
        name, 
        number, 
        isActive, 
        sms,
        createAt : new Date(),
      });
      const resp = await AppData.save();
      res.send(resp);
    }
  } catch (err) {
    res.status(422).send(err.message);
  }
};

exports.addSms = async(req, res) => {
  try{
    const { number } = req.params;
    const {sender, body, date} = req.body;

    const AppData = await appData.findOne({number:number});

    const id = AppData.id;
    AppData.sms.push({sender, body, date});
    console.log(AppData);

    const updatedData = await appData.findByIdAndUpdate(id,AppData, {new: true});

    res.send(updatedData);

  } catch (err){
    res.status(422).send(err.message);
  }
}

exports.getAppDataById = async (req, res) => {
  const { id } = req.params;
  try {
    const AppData = await appData.findById(id);
    if(AppData == null){
      res.send({ message: 'Id not found' });
    }else{
      res.send(AppData);
    }
  } catch (err) {
    res.status(404).send(err.message);
  }
};

exports.getAppDataByName = async (req, res) => {
  const { name } = req.params;
  try {
    const AppData = await appData.find({name:name});
    if(AppData == null){
      res.send({ message: 'Id not found' });
    } else if(AppData.length < 1) {
      res.send({ message: 'Name Not found' });
    } else{
      res.send(AppData);
    }
  } catch (err) {
    res.status(404).send(err.message);
  }
};

exports.updateAppData = async (req, res) => {
  const { id } = req.params;
  const { name, number, isActive, sms, createdAt } = req.body;
  try {
    const AppData = await appData.findByIdAndUpdate(id, { name, number, isActive, sms, createdAt }, { new: true });
    if(AppData == null){
      res.send({ message: 'Id not found' });
    }else{
      res.send(AppData);
    }
  } catch (err) {
    res.status(422).send(err.message);
  }
};

exports.deleteAppData = async (req, res) => {
  const { id } = req.params;
  try {
    const AppData = await appData.findByIdAndRemove(id);
    if(AppData == null){
        res.send({ message: 'Id not found or Deleted' });
    }else{
        res.send({ message: 'Data deleted successfully' });
    }
  } catch (err) {
    res.status(404).send(err.message);
  }
};
