const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const { findByEmail } = require('../models/user');
const { sendMails } = require('../services/email-sender');

//createUser
//findByEmail
//fetchAllUsers
//getUserById
//deleteUserById
//generatePassword
//resetPassword
//login

exports.createUser = async (req, res, next) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) return;

    const userfname = req.body.userfname;
    const userlname = req.body.userlname;
    const useremail = req.body.useremail;
    const userpassword = req.body.userpassword;
    const userphone = req.body.userphone;

    try {
        const hashedPassword = await bcrypt.hash(userpassword, 12);
        const userDetails = {
            userfname: userfname,
            userlname: userlname,
            useremail: useremail,
            userpassword: hashedPassword,
            userphone: userphone
        };
        const result = await User.createUser(userDetails);
        const content = userDetails.useremail + " " + userDetails.userphone  + " "+ userDetails.userfname + " " + userDetails.userlname + " " ;
        try {
            sendMails('razonir@Gmail.com', 'משתמש חדש נרשם', content);

        } catch (err) {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        }
        res.status(201).json({ message: 'User registered!' });

    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}


exports.updateUserJWT = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return;
    const id = req.userId;
    const userfname = req.body.userfname;
    const userlname = req.body.userlname;
    const userphone = req.body.userphone;
    try {
        const userDetails = {
            userid: id,
            userfname: userfname,
            userlname: userlname,
            userphone: userphone
        };

        const result = await User.updateUser(userDetails);
        res.status(201).json({ message: 'User update' });
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}

exports.findByEmail = async (req, res, next) => {
    try {
        const [findByEmail] = await User.findByEmail(req.body.useremail);
        if (findByEmail[0] == undefined) {
            res.status(404).json({ message: 'Not found Email' });
        } else {
            res.status(200).json(findByEmail[0]);
        }
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

exports.getUserByJWT = async (req, res, next) => {
    try {

        const [getUserByJWT] = await User.getUserById(req.userId);
        res.status(200).json(getUserByJWT);
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}
exports.deleteUserById = async (req, res, next) => {
    try {
        const [deleteUserById] = await User.deleteUserById(req.params.userid);
        if (deleteUserById.affectedRows == 0) {
            res.status(404).json({ message: 'User Not Found!' });
        } else {
            res.status(201).json({ message: 'User delete!' });
        }
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
        const result = await User.resetPasswordByEmail(useremail, hashedPassword);
        try {
            sendMails(useremail, 'איפוס סיסמא', genpassowrd);
        } catch (err) {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        }
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
            const error = new Error('לא נמצא אימייל כזה');
            error.statusCode = 401;
            throw error;
        }
        const storedUser = user[0][0];
        const isEqual = await bcrypt.compare(password, storedUser.userpassword);
        if (!isEqual) {
            const error = new Error('הסיסמא אינה נכונה');
            error.statusCode = 401;
            throw error;
        }
        const token = jwt.sign(
            {
                email: storedUser.useremail,
                uid: storedUser.userid,
                role: storedUser.userrole
            },
            'secretfortoken'
        );
        res.status(200).json({ token: token, uid: storedUser.userid });
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}


exports.contact = async (req, res, next) => {
    const useremail = req.body.useremail;
    const userphone = req.body.userphone;
    const usertext = req.body.usertext;
    const url = req.body.url;
    const content = useremail + " " + userphone + " " + usertext + ",url: " + url;
    try {
        sendMails('razonir@Gmail.com', 'יצירת קשר באתר', content);
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}

exports.auto = async (req, res) => {

    const token = req.body.token;
    if (token) {
        const decode = jwt.verify(token, 'secret');

        res.json({
            login: true,
            data: decode
        });
    } else {
        res.json({
            login: false,
            data: 'error'
        })
    }
}