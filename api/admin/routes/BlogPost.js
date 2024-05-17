const express = require('express');
const router = express.Router();

// get all posts

router.get('/', (req, res) => {

    res.status(200).json({
        blogs: 'array of blogs'
    });
});

// get blog post by id

router.get('/:id', (req, res) => {

    res.status(200).json({

        blogDetail: `${req.params.id} blog details`

    });
});

module.exports = router;