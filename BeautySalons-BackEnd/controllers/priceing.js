const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Priceing = require('../models/priceing');

exports.createPrice = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return;
    const bid = req.body.bid;
    const service = req.body.service;
    const price = req.body.price;
    try {
        const priceingDetails = {
            bid: bid,
            service: service,
            price: price
        };
        const result = await Priceing.createPrice(priceingDetails);
        res.status(201).json({ message: 'Price created!' });
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}



exports.fetchAll = async (req, res, next) => {
    try {
        const [fetchAll] = await Priceing.fetchAll();
        res.status(200).json(fetchAll);
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}

exports.getByBid = async (req, res, next) => {
    try {
        const [getByBid] = await Priceing.getByBid(req.params.bid);
        res.status(200).json(getByBid);
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}

exports.deletePriceById = async (req, res, next) => {
    try {
        const [deletePriceById] = await Priceing.deletePriceById(req.params.pid);
        res.status(201).json({ message: 'Price delete!' });
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}

exports.updatePrice = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return;
    const pid = req.body.pid;
    const service = req.body.service;
    const price = req.body.price;
    try {
        const priceingDetails = {
            pid: pid,
            service: service,
            price: price
        };
        const result = await Priceing.updatePrice(priceingDetails);
        res.status(201).json({ message: 'Price update!' });
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}
