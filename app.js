require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { urlencoded, json } = require('body-parser');
const blogRoute = require('./api/routes/blog');
const categoryRoute = require('./api/routes/category');
const authRoute = require('./api/routes/auth');
const commentRoute = require('./api/routes/comment');

const cors = require('cors');

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('connected', () => {

    console.log('connected with MongoDB database');

});

mongoose.connection.on('error', (error) => {

    console.log('connection fail');
    console.log(error);

});

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' })); // Increase the limit to 50mb or as needed
app.use(bodyParser.json({ limit: '50mb' })); // Increase the limit to 50mb or as needed

app.use(cors());

// admin routes
app.use('/blog', blogRoute);
app.use('/category', categoryRoute);
app.use('/auth', authRoute);
app.use('/comment', commentRoute);

app.use((req, res) => {

    res.status(200).json({
        msg: 'Bad Request'
    });
});

module.exports = app;