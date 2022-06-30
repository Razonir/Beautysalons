const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const { sendMails } = require('../services/email-sender')

exports.createUser = async (req, res, next) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) return;

    const userfname = req.body.userfname;
    const userlname = req.body.userlname;
    const useremail = req.body.useremail;
    const userpassword = req.body.userpassword;
    const usergender = req.body.usergender;
    const usercity = req.body.usercity;
    const useraddress = req.body.useraddress;
    const userphone = req.body.userphone;

    try {
        const hashedPassword = await bcrypt.hash(userpassword, 12);
        const userDetails = {
            userfname: userfname,
            userlname: userlname,
            useremail: useremail,
            userpassword: hashedPassword,
            usergender: usergender,
            usercity: usercity,
            useraddress: useraddress,
            userphone: userphone
        };
        const result = await User.createUser(userDetails);
        res.status(201).json({ message: 'User registered!' });
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}

exports.findByEmail = async (req, res, next) => {
    try {
        const [findByEmail] = await User.findByEmail();
        res.status(200).json(findByEmail);
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}

exports.fetchAllUsers = async (req, res, next) => {
    try {
        const [fetchAllUsers] = await User.fetchAllUsers();
        res.status(200).json(fetchAllUsers);
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}

exports.getUserById = async (req, res, next) => {
    try {
        const [getUserById] = await User.getUserById();
        res.status(200).json(getUserById);
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}

exports.deleteUserById = async (req, res, next) => {
    try {
        const [deleteUserById] = await User.deleteUserById();
        res.status(200).json(deleteUserById);
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}

function generatePassword() {
    var length = 8,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}

exports.resetPasswordByEmail = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return;
    const useremail = req.body.useremail;
    if (useremail == null) {
        res.status(400).send({ message: "Missing email" });
        return;
    }
    try {
        const genpassowrd = generatePassword();
        const hashedPassword = await bcrypt.hash(genpassowrd, 12);
        const result = await User.resetPasswordByEmail(useremail,hashedPassword);
        sendMails(email,genpassowrd,genpassowrd)
        res.status(201).json({ message: 'User update!' });
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}


exports.login = async (req, res, next) => {
    const email = req.body.useremail;
    const password = req.body.userpassword;
    try {
        const user = await User.findByEmail(email);
        if (user[0].length !== 1) {
            const error = new Error('A user with this email could not be found.');
            error.statusCode = 401;
            throw error;
        }
        const storedUser = user[0][0];
        const isEqual = await bcrypt.compare(password, storedUser.userpassword);
        if (!isEqual) {
            const error = new Error('Worng password!');
            error.statusCode = 401;
            throw error;
        }
        const token = jwt.sign(
            {
                email: storedUser.useremail,
                uid: storedUser.userid
            },
            'secretfortoken',
            { expiresIn: '1h' }
        );
        res.status(200).json({ token: token, uid: storedUser.userid });
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}

