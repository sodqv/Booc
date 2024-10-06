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
        return null;
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

            smallestAvailableIdentifier++;
            if(typeof smallestAvailableIdentifier === "undefined"){
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


async function changeStartPage(email, password, newStartPage) {
    startmongoose();
    const user = await users.findOne({
        "email":email,
    })
    if(!user){
        return 0; //Cannot find user
    }

    try{
        if(await argon2.verify(user.password, password)){
            const result = await users.updateOne({"email":email}, {"startingPage":newStartPage});
            return result; //Will return 1 if sucessfull
        } 
    }
    catch{
        return 0;
    }
}


async function changePassword(email, password, newPassword) {
    startmongoose();
    const user = await users.findOne({
        "email":email,
    })
    if(!user){
        return 0; //Cannot find user
    }

    try{
        if(await argon2.verify(user.password, password)){
            newPassword = await argon2.hash(newPassword) //Hashes the password
            const result = await users.updateOne({"email":email}, {"password":newPassword});
            return result; //Will return 1 if sucessfull
        } 
    }
    catch{
        return 0;
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
            const result = await user.deleteOne({"email":email});
            return result; //Will return 1 if sucessfull
        } 
    }
    catch{
        return 0;
    }
    
}




//Add friend
async function addFriend(email, username) {
    startmongoose();

    try {

        //find the current user
        const currentUser = await users.findOne({ email: email });
        if (!currentUser) 
        {
            return 0; //User not found
        }

        //find the friend by username
        const friend = await users.findOne({ username: username });
        if (!friend)
        {
            return 0; //Friend not found
        }

        //check if the friend is already in the users friendlist
        if (currentUser.friendList.includes(friend._id))
        {
            return 0; //You are already friends with this person
        }


        //push the friend to the friend list
        currentUser.friendList.push(friend._id);
        await currentUser.save();


        return { success: true, message: 'Friend added successfully' };
    }
    catch (error) {
        console.error('Error when adding friend:', error);
        return { success: false, message: 'Failed to add friend' };
    }
}



//Reset password
//TO DO, will need access to a mailing service
//For sending email: https://www.w3schools.com/nodejs/nodejs_email.asp
//Tutorial: https://dev.to/cyberwolves/how-to-implement-password-reset-via-email-in-node-js-132m 

module.exports = {
    getUser,
    createUser,
    changePassword,
    deleteUser,
    changeStartPage,
    addFriend,
}