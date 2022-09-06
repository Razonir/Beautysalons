const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const Price = require('../models/priceing');
const PriceController = require('../controllers/priceing');

router.post('/create',PriceController.createPrice);

router.get('/',PriceController.fetchAll);

router.get('/:bid',PriceController.getByBid);

router.post('/update/',PriceController.updatePrice);

router.delete('/deleteid/:pid',PriceController.deletePriceByPid);

module.exports = router;