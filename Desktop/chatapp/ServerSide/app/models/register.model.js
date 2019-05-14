const mongoose = require('mongoose');

const RegisterSchema = mongoose.Schema({
    firstname: String,
    lastname: String,
    username:String,
    useremail:String,
    mobilenumber:Number,
    password:String
}, {
    timestamps: true
});

module.exports = mongoose.model('Register', RegisterSchema);