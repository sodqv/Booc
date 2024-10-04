const {getGroup:getGroupModel, 
    getAllGroups:getAllGroupsModel,
    createGroup:createGroupModel,
    updateGroup:updateGroupModel,
    deleteGroup:deleteGroupModel} =  require("../model/groupModel")



//Get info about group for recreating form
async function getGroup(req, res){
    //console.log(req.query);
    const groupName = req.query.groupName;
    //console.log(groupName);
    var result = await getGroupModel(groupName);
    if(result === null){
        return res.status(500).send({msg:"Failed to get group"});
    }
    return res.status(200).send({msg:"Got group", group:result});
}

//Get all groups a person is in
async function getAllGroups(req, res){
    var result = await getAllGroupsModel(req.session.user.username, req.session.user.identifier);
    if(result === null){
        return res.status(500).send({msg:"Failed to get groups"});
    }
    return res.status(200).send({msg:"Got groups", groups:result});
}

//Create group
async function createGroup(req, res){
    const {body : {groupName, members}} = req
    const owner = [{username:req.session.user.username, identifier:req.session.user.identifier}];
    var result = await createGroupModel(groupName, owner, members);
    if(result === null){
        return res.status(500).send({msg:"Failed to create group"});
    }
    return res.status(200).send({msg:"Created group"});
}  

//Update group
async function updateGroup(req, res){
    const {body : {groupName, owners, members}} = req
    var result = await updateGroupModel(groupName, owners, members);
    if(result === null){
        return res.status(500).send({msg:"Failed to update group"});
    }
    return res.status(200).send({msg:"Updated group"});
}

//Delete group
async function deleteGroup(req, res){
    const {body : {groupName}} = req
    //Check if the user has the authority to delete group

    //delete group§
    var result = await deleteGroupModel(groupName);
    if(result === null){
        return res.status(500).send({msg:"Failed to delete group"});
    }
    return res.status(200).send({msg:"Deleted group"});
}


module.exports = {
    getGroup,
    getAllGroups,
    createGroup,
    updateGroup,
    deleteGroup
}