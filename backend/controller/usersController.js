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