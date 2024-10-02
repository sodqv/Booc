const {startMongodb} = require("./mongodbStarter.js");
const mongoose = require('mongoose');
const {startmongoose} = require('./mongodbStarter');
const users = require("./schemas/userSchema.js");
const argon2 = require('argon2');

//Gets user with the same email and password
async function getUser(email, password){
    startmongoose();
    const user = await users.findOne({
        "email":email,
    });
    const objUser = user.toObject();
    //console.log( objUser);

    if(typeof objUser === "undefined"){
        return;
    }
    
    /*
    console.log("2");
    console.log(objUser.password);
    console.log(password);
    */

    if(await argon2.verify(objUser.password, password)){
        //console.log("Yay")
        return objUser;
    }
    else{
        return "Failed to find";
    }
}

//Create user
async function createUser(email, username, password) {
    startmongoose();
    try{
        const hashedPassword  = await argon2.hash(password);
        const newUser = new users({email, username, password:hashedPassword});
        await newUser.save();
        return newUser; //success
    }
    catch{
        return; //failed
    }
}

//Delete user
async function deleteUser(email, password){
    startmongoose();
    const user = await users.findOne({
        "email":email,
    })

    if(!user){
        return 0; //Failed to delete
    }

    try{
        if(await argon2.verify(user.password, password)){
            await user.deleteOne({"email":email});
            return 1;
        } 
    }
    catch{
        return 0;
    }
    
}

//Reset password
//TO DO, will need access to a mailing service
//For sending email: https://www.w3schools.com/nodejs/nodejs_email.asp
//Tutorial: https://dev.to/cyberwolves/how-to-implement-password-reset-via-email-in-node-js-132m 

module.exports = {
    getUser,
    createUser,
    deleteUser,
}