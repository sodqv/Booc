const { startMongodb } = require('./mongodbStarter.js');

//Send to socket
async function sendToSocket(socket_Id, sending_obj){
    socket.to(socket_Id).emit(sending_obj);
}


//Get socket id for user using username, identifier
async function getSocket(username, identifier) {
    const client = startMongodb();
    await client.connect();
    const db = client.db("Booc");
    const col = db.collection("mySessions");
    
    //Gets session with username and identfier
    console.log("Trying to find socketID for", username, identifier);
    //const userToFind = {username:username, identifier:identifier};
    foundUser = await col.find({
        "session":{"user":{"username":username}}, 
        "session":{"user":{"identifier":identifier}}
    });

    if(!foundUser || foundUser == null){return "Failed to find session"};
    console.log("found socket_id:", foundUser.session.user.socket_Id, "\n For user: ". username + "#" + identifier);
    return foundUser.session.user.socket_Id;
}





module.exports = {sendToSocket, getSocket}