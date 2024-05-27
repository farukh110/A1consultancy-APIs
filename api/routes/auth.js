const express = require('express');
const router = express.Router();
const { signup, login, adminLogin } = require('../../controller/auth');

// signup

router.post('/user/signup', signup);

// login 

router.post('/user/login', login);

// admin login

router.post('/admin/login', adminLogin);


module.exports = router;