const mongoose = require('mongoose');

const authSchema = mongoose.Schema({

    _id: mongoose.Schema.Types.ObjectId,
    fullName: String,
    email: String,
    password: String

});

module.exports = mongoose.model('Auth', authSchema);