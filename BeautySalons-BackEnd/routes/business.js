const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const Business = require('../models/business');
const BusinessController = require('../controllers/business');

router.post('/createBusiness', 
    [
        body('uid').trim().not().isEmpty(),
        body('bname').trim().not().isEmpty(),
        body('bdescriptions').not().isEmpty(),
        body('bdescriptionl').not().isEmpty(),
        body('bgender').trim().not().isEmpty(),
        body('barea').trim().not().isEmpty(),
        body('bcity').trim().not().isEmpty(),
        body('baddress').trim().not().isEmpty(),
        body('bphone').trim().not().isEmpty(),
        body('baddress').trim().not().isEmpty(),
        body('bsubject').trim().not().isEmpty()
    ],
    BusinessController.createBusiness
);

router.get('/:bid',(req,res,next)=>{
    Business.findById(req.params.bid)
    .then(result=>{
        res.status(200).json({
            business: result[0]
        })
    })
    .catch(err=>{
        res.status(500).json({
            error:err
        })
    })
});

router.get('/', BusinessController.fetchAll ); 

router.get('/user/:uid', (req,res,next)=>{
    Business.getBusinessByUserId(req.params.uid)
    .then(result=>{
        res.status(200).json({
            business: result[0]
        })
    })
    .catch(err=>{
        res.status(500).json({
            error:err
        })
    })
});


router.get('/like/:bid', (req,res,next)=>{
    Business.addlike(req.params.bid)
    .then(result=>{
        res.status(200).json({
            business: result
        })
    })
    .catch(err=>{
        res.status(500).json({
            error:err
        })
    })
});

module.exports = router;