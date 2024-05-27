const mongoose = require('mongoose');
const Blog = require('../model/blog');

// create blog post
exports.createPost = (req, res) => {

    const newBlog = new Blog({

        _id: new mongoose.Types.ObjectId,
        title: req.body.title,
        category: req.body.category,
        description: req.body.description,
        imageUrl: req.body.imageUrl

    });

    newBlog.save()
        .then((result) => {

            res.status(200).json({
                new_blog: result
            });

        }).catch((error) => {

            console.log('error: ', error);

            res.status(500).json({

                error: error

            });
        });

};

// get all blog posts
exports.getAllPosts = (req, res) => {

    Blog.find()

        .select('_id title category description imageUrl')

        .then((result) => {

            res.status(200).json({

                blog: result

            });
        })
        .catch((error) => {

            console.log('error: ', error);

            res.status(500).json({

                error: error
            })

        });
};

// get post by id
exports.getBlogPost = (req, res) => {

    Blog.find({ _id: req.params.id })

        .select('_id title category description imageUrl')

        .then((result) => {

            res.status(200).json({

                blog: result

            })
        })
        .catch((error) => {

            console.log('error: ', error);

            res.status(500).json({

                error: error

            })

        });

};

// get post by title
exports.getBlogPostByTitle = (req, res) => {

    Blog.find({ title: req.params.title })

        .select('_id title category description imageUrl')

        .then((result) => {

            res.status(200).json({

                blog: result

            })
        })
        .catch((error) => {

            console.log('error: ', error);

            res.status(500).json({

                error: error

            })

        });
};

// get post by category
exports.getPostByCategory = (req, res) => {

    Blog.find({ category: req.params.category })

        .select('_id title category description imageUrl')

        .then((result) => {

            res.status(200).json({

                blog: result

            })
        })
        .catch((error) => {

            console.log('error: ', error);

            res.status(500).json({

                error: error

            })

        });
};

// delete post
exports.deletePost = (req, res) => {

    Blog.deleteOne({ _id: req.params.id })

        .select('_id title category description imageUrl')

        .then((result) => {

            res.status(200).json({

                blog: result

            })
        })
        .catch((error) => {

            console.log('error: ', error);

            res.status(500).json({

                error: error

            })

        });
}

// update post

exports.updatePost = (req, res) => {

    Blog.updateOne({ _id: req.params.id }, req.body)

        .then((result) => {

            res.status(200).json({

                updateData: result

            });
        })
        .catch((error) => {

            res.status(500).json({

                error: error

            });

        })
}

// get all counts blog

exports.getAllPostCount = (req, res) => {

    Blog.find().countDocuments()

        .then((result) => {

            res.status(200).json({

                total: result

            });

        }).catch((error) => {

            res.status(500).json({

                error: error

            });

        });
}

// get latest n posts

exports.getLatestPosts = (req, res) => {

    Blog.find().sort({ $natural: -1 }).limit(req.params.n)

        .then((result) => {

            res.status(200).json({

                blog: result
            })
        })
        .catch((error) => {

            console.log('error: ', error);

            res.status(500).json({
                error: error
            })
        })
}