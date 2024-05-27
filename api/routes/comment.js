const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/checkAuth');
const { createComment, getAllComments, deleteComment, getAllCommentsCount } = require('../../controller/comment');
const checkAdmin = require('../middleware/checkAdmin');

// add comment 

router.post('/', checkAuth, createComment);

// get all comments by admin

router.get('/', getAllComments);

// delete comment

router.delete('/:id', checkAdmin, deleteComment);

// get all counts comment

router.get('/get/count/:blogId', getAllCommentsCount);

module.exports = router;