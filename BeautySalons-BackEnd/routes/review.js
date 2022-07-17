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
        body('review').trim().not().isEmpty(),
    ],
    ReviewController.createReview
);

router.get('/',ReviewController.fetchAll);

router.get('/:bid',(req,res,next)=>{
    Review.getByBid(req.params.bid)
    .then(result=>{
        res.status(200).json({
            review: result[0]
        })
    })
    .catch(err=>{
        res.status(500).json({
            error:err
        })
    })
});

router.post('/delete/:reviewid',(req,res,next)=>{
    Review.deleteReviewById(req.params.reviewid)
    .then(result=>{
        return res.status(400).json({message: 'Review delete'});
    })
    .catch(err=>{
        return res.status(400).json({message: 'Review not found'});

    })
  });
module.exports = router;