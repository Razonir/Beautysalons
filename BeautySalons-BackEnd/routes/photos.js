const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const Photos = require('../models/photos');
const PhotosController = require('../controllers/photos');

router.post('/create', 
    [
        body('bid').trim().not().isEmpty(),
        body('url').not().isEmpty(),
    ],
    PhotosController.createPhoto
);

router.get('/:bid',PhotosController.getByBid);

router.delete('/delete/:pid',PhotosController.deleteById);

module.exports = router;