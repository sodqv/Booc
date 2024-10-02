const usersModel = require('../model/usersModel.js');

//Checks if the given credentials are a valid login.
async function authenicate(req, res){
    //Extract parameters from req
    const {body: {email, password}} = req;

    //Check auth
    const user = await usersModel.getUser(email, password);

    //Exists
    if(!user || user == null){
        console.log("Invalid credentials");
        return res.status(401).send({msg: "Bad credentials"});
    }
    else{
        console.log("valid credentials");
        //Updates session
        const recastUser = user;
        req.session.user = {...recastUser, password:password};
        //res.cookie("user", recastUser, );
        return res.status(200).send(user);
    }
}

//Check if user is logged in
async function authStatus(req, res){
    //const {body: {email, password}} = req;
    try{
        //console.log(req.session.user.email);
        //console.log(req.session.user.password);
        const user = await usersModel.getUser(req.session.user.email, req.session.user.password);
        //console.log(user);
        if(typeof req.session.user === "undefined"|| typeof user === "undefined" || user === "Failed to find"){
            return res.status(401).send({msg:"Not authenticated"})
        } 
        return res.status(200).send({msg:"You are authenticated"});
    }
    catch{
        return res.status(401).send({msg:"Not authenticated"})
    }
}

//Create user
async function createUser(req, res){
    const {body: {email, username, password}} = req;
    const result = await usersModel.createUser(email, username, password);
    if(result){
        return res.status(200).send({result});
    }
    else{
        return res.status(500).send({msg:"Failed to create user"});
    }
}

async function deleteUser(req, res) {
    const {body: {email, password}} = req;

    const result = await usersModel.deleteUser(email, password);

    if(result){
        return res.status(200).send({msg:"Deleted user"});
    }
    else{
        return res.status(500).send({msg:"Failed to create user"});
    }
}

module.exports = {
    authenicate,
    authStatus,
    createUser,
    deleteUser
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