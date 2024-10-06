const usersModel = require('../model/usersModel.js');

//Create user
async function createUser(req, res){
    const {body: {email, username, password}} = req;
    const result = await usersModel.createUser(email, username, password);
    if(result === "All identifiers used"){
        return res.status(500).send({msg:"All identifiers used for this username"});
    }
    //console.log(result);
    if(typeof result !== "undefined"){
        req.session.user = {...result, password:password};
        return res.status(200).send({msg:"Created user"});
    }
    else{
        return res.status(500).send({msg:"Failed to create user"});
    }
}


async function changeStartPage(req, res) {
    const result = await usersModel.changeStartPage(req.session.user.email, req.session.user.password, req.body.startPage);
    if(result){
        return res.status(200).send({msg:"Changed start page"});
    }
    else{
        return res.status(500).send({msg:"Failed to change start page"});
    }
}


async function changePassword(req, res) {
    const result = await usersModel.changePassword(req.session.user.email, req.session.user.password, req.body.password);
    if(result){
        //Change the session to be the new password
        req.session.user.password = req.body.password;

        return res.status(200).send({msg:"Changed users password"});
    }
    else{
        return res.status(500).send({msg:"Failed to change password"});
    }
}


async function deleteUser(req, res) {
    try{
        const result = await usersModel.deleteUser(req.session.user.email, req.session.user.password);

        if(result){
            return res.status(200).send({msg:"Deleted user"});
        }
        else{
            return res.status(500).send({msg:"Failed to delete user"});
        }
    }
    catch(err){
        console.log("Failed to delete user");
        console.log(err);
        return res.status(500).send({msg:"Failed to delete user"});
    }
}



//add friend
async function addFriend(req, res) {
    const { body: { friendUsername } } = req;                               //get the friends username from the form

    const result = await usersModel.addFriend(req.session.user.email, friendUsername);      // get the current sessions email

    if (result) 
    {
        return res.status(200).send({ msg: "Added Friend" });
    }
    else
    {
        return res.status(400).send({ msg: "Failed to add Friend" });
    }
}





/* 
//add friend
async function addFriend(req, res) {
    const { body: { friendUsername } } = req;

    //const userEmail = req.session.user.email;       //get the email of the current user

    const result = await usersModel.addFriend(userEmail, friendUsername);

    if (result.success) 
    {
        return res.status(200).send({ msg: result.message });
    }
    else
    {
        return res.status(400).send({ msg: result.message });
    }
}*/




/* 
//add friend
async function addFriend(req, res) {
    const { body: { email, friendUsername } } = req;

    //const userEmail = req.session.user.email;       //get the email of the current user

    const result = await usersModel.addFriend(email, friendUsername);

    if (result.success) 
    {
        return res.status(200).send({ msg: result.message });
    }
    else
    {
        return res.status(400).send({ msg: result.message });
    }
}
*/


module.exports = {
    createUser,
    deleteUser,
    changeStartPage,
    changePassword,
    addFriend,
    getCurrentUser,
}









//Get user info
/*
export function getUser(req, res){
    if(!req.session.user){
        return res.status(401).send({msg:"Not authenticated"})
    }
    //Extract parameters from req
    const {body: {email, password}} = req;
    //Search database and checks if the user exists
    const user = getUserModel(email, password);
    if(!user){
        return res.status(403).send({msg:"Did not find user"});
    }

    //Copies object but removes password
    const returnUser = {email:user.email, username:user.username, description:user.description, startingPage:user.startingPage}

    return res.status(200).send(returnUser);
}
*/

//Save info