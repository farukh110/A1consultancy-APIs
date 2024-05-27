const mongoose = require('mongoose');
const Comment = require('../model/comment');

// add comment

exports.createComment = (req, res) => {

    const newComment = new Comment({

        _id: new mongoose.Types.ObjectId,
        email: req.body.email,
        commentText: req.body.commentText,
        blogId: req.body.blogId

    });

    newComment.save()
        .then((result) => {

            res.status(200).json({
                new_comment: result
            });

        }).catch((error) => {

            console.log('error: ', error);

            res.status(500).json({

                error: error

            });
        });

};


// get all comments by admin

exports.getAllComments = (req, res) => {

    Comment.find()

        .select('_id email commentText blogId timestamp')

        .then((result) => {

            res.status(200).json({

                comments: result

            });
        })
        .catch((error) => {

            console.log('error: ', error);

            res.status(500).json({

                error: error
            })

        });

};

// delete comment

exports.deleteComment = (req, res) => {

    Comment.deleteOne({ _id: req.params.id })

        .select('_id email commentText')

        .then((result) => {

            res.status(200).json({

                comment: result

            })
        })
        .catch((error) => {

            console.log('error: ', error);

            res.status(500).json({

                error: error

            })

        });

};

// get all counts comment

exports.getAllCommentsCount = (req, res) => {

    Comment.find({ blogId: req.params.blogId }).countDocuments()

        .then((result) => {

            res.status(200).json({

                total: result

            });

        }).catch((error) => {

            res.status(500).json({

                error: error

            });

        });

};

