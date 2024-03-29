const express = require('express');
const router = express.Router();
const BlogController = require('../controllers/blog');
const auth = require('../middleware/auth');

router.post('/create',BlogController.createBlog);

router.get('/:bid', BlogController.findById);

router.get('/', BlogController.fetchAll ); 

router.delete('/remove/:bid', BlogController.deleteById);

module.exports = router;