const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const appController = require('../controllers/appController');

router.get('/', auth, appController.getAllAppData);
router.post('/add', appController.createAppData);
router.post('/addSms/:number',appController.addSms);
router.get('/getById/:id', auth, appController.getAppDataById);
router.get('/getByName/:name', auth, appController.getAppDataByName);
router.patch('/update/:id', auth, appController.updateAppData);
router.delete('/delete/:id', auth, appController.deleteAppData);



module.exports = router;