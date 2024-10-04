const {startmongoose} = require('./mongodbStarter');
const groups = require("./schemas/groupSchema.js");

//Get info about group for recreating form
async function getGroup(groupName){
    startmongoose();

    const group = await groups.findOne({
        groupName:groupName,
    });

    if(group === null){return null;}
    const objGroup = group.toObject();

    return objGroup;
}

//Get all groups a person is in ---------------------------------------------------------------------------------------------------------------------------------------TO DO, TODO
async function getAllGroups(username, identifier){
    startmongoose();
    try{
        const user = {username, identifier};
        const group = await groups.find({
            $or: [
                {owners: {$all: [user] }},
                {members:{$all: [user] }},
            ]
        });
        /*
        console.log("The following is the group: \n");
        console.log(group);
        console.log(group[0].owners[0]);
        */

        if(!Array.isArray(group) || !group.length){
            console.log("Failed to find groups");
            return null;
        }
        return group;
    }
    catch(err){
        console.log("Failed to get the users groups");
        console.log(err);
        return null;
    }
    

    
}

//Create group
async function createGroup(groupName, owner, members){
    startmongoose();
    try{
        //Create the user
        const newGroup = new groups({groupName,owners:owner, members});
        //console.log(newUser);
        await newGroup.save();
        return newGroup.toObject(); //success
    }
    catch{
        return null; //failed
    }
}  

//Update group
async function updateGroup(groupName, owners, members){
    startmongoose();
    try{
        const newGroup = await groups.findOneAndReplace({groupName}, {groupName, owners, members});
        await newGroup.save();
        return newGroup.toObject(); //success
    }
    catch(err){
        console.log("Failed to update group");
        console.log(err);
        return null; //failed
    }
}

//Delete group
async function deleteGroup(groupName){
    startmongoose();
    try{
        const deleted = (await groups.deleteOne({
            groupName:groupName,
        })).deletedCount;
        if(deleted){
            return "Deleted"
        }
        else{
            return null;
        }
        
    }
    catch(err){
        console.log("Failed deletion of group");
        console.log(err);
        return null;
    }
}

module.exports = {
    getGroup,
    getAllGroups,
    createGroup,
    updateGroup,
    deleteGroup
}