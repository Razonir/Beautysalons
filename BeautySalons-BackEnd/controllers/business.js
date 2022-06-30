const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Business = require('../models/business');

exports.createBusiness = async (req, res, next) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) return;

    const bid = req.body.bid;
    const userid = req.body.userid;
    const bname = req.body.bname;
    const bdescriptions = req.body.bdescriptions;
    const bdescriptionl = req.body.bdescriptionl;
    const bgender = req.body.bgender;
    const barea = req.body.barea;
    const bcity = req.body.bcity;
    const baddress = req.body.baddress;
    const bphone = req.body.bphone;
    const bsubject = req.body.bsubject;
    const bplan = req.body.bplan;
    const bvisibility = req.body.bvisibility;
    const blikes = req.body.blikes;
    const bviews = req.body.bviews;
    const createdate = req.body.createdate;
    const lastupdate = req.body.lastupdate;

    try {
        const businessDetails = {
            userid: userid,
            bname: bname,
            bdescriptions: bdescriptions,
            bdescriptionl: bdescriptionl,
            bgender: bgender,
            barea: barea,
            bcity: bcity,
            baddress: baddress,
            bphone: bphone,
            bsubject: bsubject
        };
        const result = await Business.createBusiness(businessDetails);
        res.status(201).json({ message: 'Business registered!' });
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