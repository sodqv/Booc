const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    email: {type: String, unique:true},
    username: String,
    description: {type: String, default: ""},
    password: String,
    startingPage: Number,
},{
    collection:"Users"
})

module.exports = mongoose.model('User', userSchema);