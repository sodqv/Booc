const { startMongodb } = require('./mongodbStarter.js');

//Send to socket
async function sendToSocket(socket_Id, sending_obj, io){
    try{
        if(!socket_Id){throw Error("Socket does not exist")};
        io.to(socket_Id).emit(sending_obj);
    }
    catch(err){
        console.log("Failed to send to socket: ", socket_Id);
        console.log(err);
        return;
    }
    
}


//Get socket id for user using username, identifier
async function getSocket(username, identifier) {
    try{
       const client = startMongodb();
        await client.connect();
        const db = client.db("Booc");
        const col = db.collection("mySessions");
        
        //Gets session with username and identfier
        console.log("Trying to find socketID for", username, identifier);
        //const userToFind = {username:username, identifier:identifier};
        const findUser = (await col.find({
            $and: [
                {"session.user.username":username},
                //{"session.user.identifier":identifier},
            ]
            
            //"session": {"user":{"username":username}}, 
            //"session": {"user":{"identifier":identifier}}
        }).toArray());
        //console.log("findUser", findUser);
        const foundUser = findUser[0].session.user
        console.log("Found username: ", foundUser);

        if(!foundUser || foundUser == null){return "Failed to find session"};
        console.log("found socket_id:", foundUser.socket_Id, " For user: " + foundUser.username + "#" + foundUser.identifier);
        if(!foundUser.socket_Id){return "Failed to find socket"}
        console.log("Failed to find socket");
        return foundUser.session.user.socket_Id; 
    }
    catch(err){
        console.log(err);
        return undefined;
    }
    
}





module.exports = {sendToSocket, getSocket}