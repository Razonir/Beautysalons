const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const Review = require('../models/review');
const ReviewController = require('../controllers/review');
const authadmin = require('../middleware/authadmin');

router.post('/create',ReviewController.createReview);

router.get('/',ReviewController.fetchAll);

router.get('/:bid', ReviewController.getByBid);

router.post('/delete/:reviewid', authadmin ,ReviewController.deleteReviewById);

module.exports = router;