const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const Business = require('../models/business');
const BusinessController = require('../controllers/business');
const auth = require('../middleware/auth');

router.post('/createBusiness',BusinessController.createBusiness);

router.post('/create' ,auth,BusinessController.create);

router.post('/updateById', BusinessController.updateById);

router.get('/', BusinessController.fetchAll ); 

router.get('/user',auth ,BusinessController.getBusinessByUserJWT);

router.delete('/remove/:bid', BusinessController.deleteById);

router.get('/like/:bid', BusinessController.addlike);

router.get('/view/:bid', BusinessController.addView);

router.get('/:bid', BusinessController.findById);

router.post('/createSendEmail', BusinessController.createEmail);


module.exports = router;
