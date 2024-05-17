const express = require('express');
const app = express();
const adminBlogPostRoute = require('./api/admin/routes/BlogPost');

// admin routes
app.use('/admin/blog', adminBlogPostRoute);

app.use((req, res) => {

    res.status(200).json({
        msg: 'Ok'
    });
});

module.exports = app;