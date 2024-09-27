const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    email: {type: String, unique:true},
    username: String,
    description: {type: String, default: ""},
    password: String,
    startingPage: {type: Number, default: 0},
},{
    collection:"Users"
})

module.exports = mongoose.model('User', userSchema);