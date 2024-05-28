const express = require('express');
const router = express.Router();
const checkAdmin = require('../middleware/checkAdmin');
const { createPost, getAllPosts, getBlogPost, getPostByCategory, deletePost, updatePost, getAllPostCount, getLatestPosts, getBlogPostByTitle } = require('../../controller/blog');

// post blog by admin

router.post('/', checkAdmin, createPost);

// get all posts

router.get('/', getAllPosts);

// get post by id

router.get('/:id', getBlogPost);

// get post by title

router.get('/title/:title', getBlogPostByTitle);


// get post by category

router.get('/category/:category', getPostByCategory);

// delete post

router.delete('/:id', checkAdmin, deletePost);

// update post

router.put('/:id', checkAdmin, updatePost);

// get all counts blog

router.get('/get/count', getAllPostCount);

// return n latest blog posts

router.get('/latest-post/:n', getLatestPosts);

module.exports = router;