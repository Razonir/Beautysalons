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

router.get('/:bid',(req,res,next)=>{
    Price.getByBid(req.params.bid)
    .then(result=>{
        res.status(200).json({
            price: result[0]
        })
    })
    .catch(err=>{
        res.status(500).json({
            error:err
        })
    })
});

router.post('/delete/:pid',(req,res,next)=>{
    Price.deletePriceById(req.params.pid)
    .then(result=>{
        return res.status(400).json({message: 'price delete'});
    })
    .catch(err=>{
        return res.status(400).json({message: 'price not found'});

    })
  });
module.exports = router;