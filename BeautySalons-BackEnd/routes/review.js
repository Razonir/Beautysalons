const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const Review = require('../models/review');
const ReviewController = require('../controllers/review');
const auth = require('../middleware/auth');
const authAdmin = require('../middleware/authadmin');

router.post('/create',ReviewController.createReview);

router.get('/',ReviewController.fetchAll);

router.get('/:bid', ReviewController.getByBid);

router.delete('/delete/:reviewid' ,ReviewController.deleteReviewById);

module.exports = router;