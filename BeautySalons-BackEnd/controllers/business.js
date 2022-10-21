const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Business = require('../models/business');
const { sendMails } = require('../services/email-sender');


exports.createEmail = async (req,res,next) => {
    const businessDetails = req.body.businessDetails;
    try {
        sendMails('razonir@Gmail.com', 'עסק רוצה להירשם', businessDetails);
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}

exports.create = async (req,res,next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) return;

    const id = req.userId;
    const bname = req.body.bname;
    const bdescriptions = req.body.bdescriptions;
    const instegram = req.body.instegram;
    const bgender = req.body.bgender;
    const barea = req.body.barea;
    const bcity = req.body.bcity;
    const baddress = req.body.baddress;
    const bphone = req.body.bphone;
    const bsubject = req.body.bsubject;
    const blogo = req.body.blogo;
    try{
        const bcreate = {
            uid:id,
            bname: bname,
            bdescriptions: bdescriptions,
            instegram: instegram,
            bgender: bgender,
            barea: barea,
            bcity: bcity,
            baddress: baddress,
            bphone: bphone,
            bsubject: bsubject,
            blogo: blogo
        };
        const result = await Business.create(bcreate);
        const content = bcreate.bname + " " + bcreate.bgender  + " "+ bcreate.bsubject;
        try {
            sendMails('razonir@Gmail.com', 'עסק חדש נרשם', content);

        } catch (err) {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        }
        res.status(201).json({ message: 'Business created!' });
    }catch(err){
        if(!err.statusCode){
            err.statusCode = 500;
        }
        next(err);
    }
}

// exports.createBusiness = async (req, res, next) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) return;
    
//     const uid = req.body.userid;
//     const bname = req.body.bname;
//     const bdescriptions = req.body.bdescriptions;
//     const instegram = req.body.instegram;
//     const bgender = req.body.bgender;
//     const barea = req.body.barea;
//     const bcity = req.body.bcity;
//     const baddress = req.body.baddress;
//     const bphone = req.body.bphone;
//     const bsubject = req.body.bsubject;
//     const blogo = req.body.blogo;
    
//     try {
//         const businessDetails = {
//             uid: uid,
//             bname: bname,
//             instegram: instegram,
//             bdescriptions: bdescriptions,
//             bgender: bgender,
//             barea: barea,
//             bcity: bcity,
//             baddress: baddress,
//             bphone: bphone,
//             bsubject: bsubject,
//             blogo: blogo
//         };
//         const result = await Business.createBusiness(businessDetails);
//         res.status(201).json({ message: 'Business created!' });
//     } catch (err) {
//         if (!err.statusCode) {
//             err.statusCode = 500;
//         }
//         next(err);
//     }
// }


exports.updateById = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return;
    
    const bid = req.body.bid;
    const bname = req.body.bname;
    const instegram = req.body.instegram;
    const bdescriptions = req.body.bdescriptions;
    const bgender = req.body.bgender;
    const barea = req.body.barea;
    const bcity = req.body.bcity;
    const baddress = req.body.baddress;
    const bphone = req.body.bphone;
    const bsubject = req.body.bsubject;    
    try {
        const businessDetails = {
            bid: bid,
            bname: bname,
            instegram: instegram,
            bdescriptions: bdescriptions,
            bgender: bgender,
            barea: barea,
            bcity: bcity,
            baddress: baddress,
            bphone: bphone,
            bsubject: bsubject,
        };
        const result = await Business.updateById(businessDetails);
        res.status(201).json({ message: 'Business update!' });
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}

exports.findById = async (req, res, next) => {
    try {
        const [findById] = await Business.findById(req.params.bid);
        res.status(200).json(findById);
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}


exports.deleteById = async (req, res, next) => {
    try {
        const [deleteById] = await Business.deleteById(req.params.bid);
        res.status(200).json(deleteById);
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}

exports.fetchAll = async (req, res, next) => {
    try {
        const [fetchAll] = await Business.fetchAll();
        res.status(200).json(fetchAll);
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}

exports.getBusinessByUserJWT = async (req, res, next) => {
    try {
        const [getBusinessByUserJWT] = await Business.getBusinessByUserJWT(req.userId);
        res.status(200).json(getBusinessByUserJWT);
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}

exports.addlike = async (req, res, next) => {
    try {
        const [addlike] = await Business.addlike(req.params.bid);
        res.status(201).json({ message: 'Like add!' });
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}


exports.addView = async (req, res, next) => {
    try {
        const [addView] = await Business.addView(req.params.bid);
        res.status(201).json({ message: 'View add!' });
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}
