const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Photos = require('../models/photos');

exports.createPhoto = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return;
    const bid = req.body.bid;
    const url = req.body.url;
    try {
        const photoDetails = {
            bid: bid,
            url: url
        };
        const result = await Photos.createPhoto(photoDetails);
        res.status(201).json({ message: 'Photo created!' });
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}

exports.getByBid = async (req, res, next) => {
    try {
        const [getByBid] = await Photos.getByBid(req.params.bid);
        res.status(200).json(getByBid);
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}

exports.getAll = async (req, res, next) => {
    try {
        const [getAll] = await Photos.getAll();
        res.status(200).json(getAll);
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}


exports.deleteById = async (req, res, next) => {
    try {
        const [deleteById] = await Photos.deleteById(req.params.pid);
        res.status(201).json({ message: 'Photo delete!' });
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}
