const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const cardController = require('../controllers/cardController');

router.get('/', auth, cardController.getAllCardsData);
router.post('/add', cardController.addNewCardData);
router.get('/id/:id', auth, cardController.getCardById);
router.get('/name/:name', auth, cardController.getCardByName)
router.patch('/update/:id', auth, cardController.updateCard);
router.delete('/delete/:id', auth, cardController.deleteCard);

module.exports = router;