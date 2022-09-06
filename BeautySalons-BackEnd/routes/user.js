const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const User = require('../models/user');
const Business = require('../models/business');
const db = require('../util/database');
const jwt = require('jsonwebtoken');
const UserController = require('../controllers/user');
const auth = require('../middleware/auth');
const authAdmin = require('../middleware/authadmin');

router.post('/createUser',UserController.createUser);

router.post('/update',auth,UserController.updateUserJWT );

router.get('/user',auth,UserController.getUserByJWT);

router.post('/delete/:userid', authAdmin ,UserController.deleteUserById );

router.get('/users', UserController.fetchAllUsers ); 

router.get('/findbyemail', UserController.findByEmail ); 

router.post('/login',   UserController.login);

router.post('/resetpassword',   UserController.resetPasswordByEmail);

router.post('/contact', UserController.contact);

module.exports = router;