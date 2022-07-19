const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const User = require('../models/user');
const Business = require('../models/business');
const db = require('../util/database');
const jwt = require('jsonwebtoken');
const UserController = require('../controllers/user');

router.post('/createUser', 
    [
        body('userfname').trim().not().isEmpty(),
        body('userlname').trim().not().isEmpty(),
        body('useremail').isEmail().normalizeEmail().not().isEmpty(),
        body('userpassword').trim().not().isEmpty(),
        body('usergender').trim().not().isEmpty(),
        body('usercity').trim().not().isEmpty(),
        body('useraddress').trim().not().isEmpty(),
        body('userphone').trim().not().isEmpty()
    ],
    UserController.createUser
);

router.get('/user/:userid', UserController.getUserById);

router.post('/delete/:userid', UserController.deleteUserById );

router.get('/users', UserController.fetchAllUsers ); 

router.get('/findbyemail', UserController.findByEmail ); 

router.post('/login',   UserController.login);

router.post('/resetpassword',   UserController.resetPasswordByEmail);

router.post('/contact',   UserController.contact);

router.get('/username'), verifyToken,function(req,res,next){
  return res.status(200).json(decodedToken.userfname);
}


// token verify
var decodedToken ='';
function verifyToken(req,res,next){
  let token = req.query.token;

  jwt.verify(token,'secret',function(err,tokendata){
    if(err){
      return res.status(400).json({message: 'Inauthorized request'});
    }
    if(tokendata){
      decodedToken = tokendata;
    }
  })
}

module.exports = router;