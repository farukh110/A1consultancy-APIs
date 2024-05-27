const mongoose = require('mongoose');
const Category = require('../model/category');

// add category by admin
exports.createCategory = (req, res) => {

    const newCategory = new Category({

        _id: new mongoose.Types.ObjectId,
        name: req.body.name,
        imageUrl: req.body.imageUrl

    });

    newCategory.save()
        .then((result) => {

            res.status(200).json({
                new_category: result
            });

        }).catch((error) => {

            console.log('error: ', error);

            res.status(500).json({

                error: error

            });
        });

};

// get all categories
exports.getAllCategories = (req, res) => {

    Category.find()

        .select('_id name imageUrl')

        .then((result) => {

            res.status(200).json({

                category: result

            });
        })
        .catch((error) => {

            console.log('error: ', error);

            res.status(500).json({

                error: error
            })

        });
}

// delete category
exports.deleteCategory = (req, res) => {

    Category.deleteOne({ _id: req.params.id })

        .select('_id name imageUrl')

        .then((result) => {

            res.status(200).json({

                category: result

            })
        })
        .catch((error) => {

            console.log('error: ', error);

            res.status(500).json({

                error: error

            })

        });
}

// update category
exports.updateCategory = (req, res) => {

    Category.updateOne({ _id: req.params.id }, req.body)

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

// get all counts categories
exports.getAllCategoriesCount = (req, res) => {

    Category.find().countDocuments()

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

// get latest n categories

exports.getLatestCategories = (req, res) => {

    Category.find().sort({ $natural: -1 }).limit(req.params.n)

        .then((result) => {

            res.status(200).json({

                category: result
            })
        })
        .catch((error) => {

            console.log('error: ', error);

            res.status(500).json({
                error: error
            })
        })
}
