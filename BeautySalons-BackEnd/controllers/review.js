const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Reviews = require('../models/review');

exports.createReview = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return;
    const bid = req.body.bid;
    const uid = req.body.uid;    
    const reviewtext = req.body.reviewtext;
    const review = req.body.review;
    try {
        const reviewDetails = {
            bid: bid,
            uid: uid,
            reviewtext: reviewtext,
            review: review
        };
        const result = await Reviews.createReview(reviewDetails);
        res.status(201).json({ message: 'Review created!' });
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}



exports.fetchAll = async (req, res, next) => {
    try {
        const [fetchAll] = await Reviews.fetchAll();
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
        const [getByBid] = await Reviews.getByBid(req.params.bid);
        res.status(200).json(getByBid);
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}

exports.deleteReviewById = async (req, res, next) => {
    try {
        const [deleteReviewById] = await User.deleteReviewById(req.params.reviewid);
        res.status(201).json({ message: 'Review delete!' });
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}
