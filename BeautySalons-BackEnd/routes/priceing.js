const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const Price = require('../models/priceing');
const PriceController = require('../controllers/priceing');

router.post('/create', 
    [
        body('bid').trim().not().isEmpty(),
        body('service').not().isEmpty(),
        body('price').trim().not().isEmpty(),
    ],
    PriceController.createPrice
);

router.get('/',PriceController.fetchAll);

router.get('/:bid',PriceController.getByBid);

router.post('/update/',PriceController.updatePrice);

router.post('/delete/:pid',PriceController.deletePriceById);

module.exports = router;