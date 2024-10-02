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
    if(user === null){return null;}
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
        //Find smallest identifier within 9999
        var smallestAvailableIdentifier = 0;
        console.log("Started querry");
        try{
            smallestAvailableIdentifier = (await users.find({"username":username}).sort({"identifier":-1}).limit(1))[0].identifier;

            //BiggestIdentifier = await users.find({"username":username}).sort({"identifier":-1}).limit(1);//.identifier;
            /*
            console.log(BiggestIdentifier[0]);
            console.log(typeof BiggestIdentifier[0]);
            console.log(BiggestIdentifier[0].identifier);
            */
            //smallestAvailableIdentifier = BiggestIdentifier[0].identifier
            smallestAvailableIdentifier++;
            //console.log(smallestAvailableIdentifier);
            if(typeof smallestAvailableIdentifier === "undefined"){
                //console.log("became 0");
                smallestAvailableIdentifier = 0;
            }
        }
        catch(err){
            console.log("Failed to find smallest identifier defaulting to 0");
            //console.log(err);
            smallestAvailableIdentifier = 0;
        }
        //console.log("Found smallest number: " + smallestAvailableIdentifier);
        if(0 > smallestAvailableIdentifier){
            //Invalid indexing has occoured
            console.log("To low of a identifier was attempted to be assigned");
            return "undefined"; //This should never happen
        } 
        else if(smallestAvailableIdentifier > 9999){
            console.log("Too high of a identifier was attempted to be assigned");
            return "All identifiers used"; //For the username
        }
        

        //Create the user
        const hashedPassword  = await argon2.hash(password);
        const newUser = new users({email, username,identifier:smallestAvailableIdentifier, password:hashedPassword});
        //console.log(newUser);
        await newUser.save();
        return newUser.toObject(); //success
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