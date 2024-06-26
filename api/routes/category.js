const express = require('express');
const router = express.Router();
const checkAdmin = require('../middleware/checkAdmin');
const { createCategory, getAllCategories, deleteCategory, updateCategory, getAllCategoriesCount, getLatestCategories } = require('../../controller/category');

// add category by admin

router.post('/', checkAdmin, createCategory);

// get all categories

router.get('/', getAllCategories);

// delete category

router.delete('/:id', checkAdmin, deleteCategory);

// update category

// router.put('/:id', checkAdmin, updateCategory);

router.put('/:id', checkAdmin, updateCategory);

// get all counts categories

router.get('/get/count', getAllCategoriesCount);

module.exports = router;

// return n latest categories

router.get('/latest-categories/:n', getLatestCategories);
