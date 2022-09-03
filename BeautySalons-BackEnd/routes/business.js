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
        body('instegram').not().isEmpty(),
        body('bgender').trim().not().isEmpty(),
        body('barea').trim().not().isEmpty(),
        body('bcity').trim().not().isEmpty(),
        body('baddress').trim().not().isEmpty(),
        body('bphone').trim().not().isEmpty(),
        body('baddress').trim().not().isEmpty(),
        body('bsubject').trim().not().isEmpty(),
        body('blogo').trim().not().isEmpty()
    ],
    BusinessController.createBusiness
);

router.post('/updateById', BusinessController.updateById);

router.get('/:bid', BusinessController.findById);

router.get('/', BusinessController.fetchAll ); 

router.get('/:bsubject', BusinessController.fetchBySubject ); 

router.get('/user/:uid', BusinessController.getBusinessByUserId);

router.delete('/remove/:bid', BusinessController.deleteById);

router.get('/like/:bid', BusinessController.addlike);

router.get('/view/:bid', BusinessController.addView);

module.exports = router;