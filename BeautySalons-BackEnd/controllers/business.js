const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Business = require('../models/business');

exports.createBusiness = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return;
    
    const bid = req.body.bid;
    const uid = req.body.uid;
    const bname = req.body.bname;
    const bdescriptions = req.body.bdescriptions;
    const bdescriptionl = req.body.bdescriptionl;
    const bgender = req.body.bgender;
    const barea = req.body.barea;
    const bcity = req.body.bcity;
    const baddress = req.body.baddress;
    const bphone = req.body.bphone;
    const bsubject = req.body.bsubject;
    const bvisibility = req.body.bvisibility;
    const blikes = req.body.blikes;
    const bviews = req.body.bviews;
    const createdate = req.body.createdate;
    const lastupdate = req.body.lastupdate;
    const blogo = req.body.blogo;
    
    try {
        const businessDetails = {
            uid: uid,
            bname: bname,
            bdescriptions: bdescriptions,
            bdescriptionl: bdescriptionl,
            bgender: bgender,
            barea: barea,
            bcity: bcity,
            baddress: baddress,
            bphone: bphone,
            bsubject: bsubject,
            blogo: blogo
        };
        const result = await Business.createBusiness(businessDetails);
        res.status(201).json({ message: 'Business created!' });
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}


exports.findById = async (req, res, next) => {
    try {
        const [findById] = await Business.findById();
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
        const [deleteById] = await Business.deleteById();
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

exports.getBusinessByUserId = async (req, res, next) => {
    try {
        const [getBusinessByUserId] = await Business.getBusinessByUserId();
        res.status(200).json(getBusinessByUserId);
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}

exports.addlike = async (req, res, next) => {
    try {
        const [addLike] = await Business.addLike();
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
        const [addLike] = await Business.addView();
        res.status(201).json({ message: 'View add!' });
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}
