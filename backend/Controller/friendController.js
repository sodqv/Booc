const { getCurrentUser:getCurrentUserModel,
        addFriend:addFriendModel } = require("../Model/usersModel")



async function getCurrentUser(req, res) 
{
    const currentUser = req.query.currentUser;
    var result = await getCurrentUserModel(currentUser);
    
    if (result === null)
    {
        return res.status(500).send({ msg: "Failed to get current user" });
    }

    return res.status(200).send({ msg: "Got current user", user:result });
}


async function addFriend(req, res)
{
    const { body : { friendsUsername, friendIdentifier } } = req;

    try {
        var result = await addFriendModel(friendsUsername, friendIdentifier);

        if (result === null)
        {
            return res.status(500).send({ msg: "Failed to add friend" });
        }

        return res.status(200).send({ msg: "Added friend" });
    }
    catch (error) {
        console.log("Failed to add friend");
        console.log("error");
        return res.status(500).send({ msg: "Failed to add friend" });
    }
}


module.exports = {
    getCurrentUser,
    addFriend
}

