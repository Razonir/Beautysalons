const { validationResult } = require('express-validator');
const Blog = require('../models/blog');

exports.createBlog = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return;
    const blogo = req.body.blogo;
    const btitle = req.body.btitle;
    const bsubtitle = req.body.bsubtitle;
    const bcontent = req.body.bcontent;
    try {
        const blogDetails = {
            blogo: blogo,
            btitle: btitle,
            bsubtitle: bsubtitle,
            bcontent: bcontent
        };
        const result = await Blog.createBlog(blogDetails);
        res.status(201).json({ message: 'Blog created!' });
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}


exports.findById = async (req, res, next) => {
    try {
        const [findById] = await Blog.findById(req.params.bid);
        if(findById.length == 0){
            res.status(404).json({ message: 'Not Found!' });
        }else{
            res.status(200).json(findById);
        }
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}


exports.deleteById = async (req, res, next) => {
    try {
        const [deleteById] = await Blog.deleteById(req.params.bid);
        res.status(200).json(deleteById);
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}

exports.fetchAll = async (req, res, next) => {
    try {
        const [fetchAll] = await Blog.fetchAll();
        res.status(200).json(fetchAll);
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}