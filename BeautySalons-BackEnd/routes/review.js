const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const Review = require('../models/review');
const ReviewController = require('../controllers/review');

router.post('/create', 
    [
        body('bid').trim().not().isEmpty(),
        body('uid').trim().not().isEmpty(),
        body('reviewtext').not().isEmpty(),
    ],
    ReviewController.createReview
);

router.get('/',ReviewController.fetchAll);

router.get('/:bid', ReviewController.getByBid);

router.post('/delete/:reviewid', ReviewController.deleteReviewById);

module.exports = router;