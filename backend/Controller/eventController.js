
const eventModel = require('../model/eventModel');
const {createEvent:createEventModel,
        deleteEventModel,
        checkIfCreator} = eventModel;
const groupModel = require('../model/schemas/groupSchema');


function inviteToObject(array){
    return {username:array[0], identifier:array[1]};
}

//create event
async function createEvent(req, res){

    const { body: { title, date, fromTime, toTime, location, description, color, repeat, visibility, invitePeople, inviteGroup } } = req;
    
    const createdBy = req.session.user;

    const mappedInvite = invitePeople.map(inviteToObject); //Transforms the [[]] to [{}]
    const mappedGroupInvite = inviteGroup.map(inviteToObject);

    /* 
    let groupMembers = [];

    if (inviteGroup.length > 0)
    {
        for (let groupName of inviteGroup)
        {
            const group = await groupModel.findOne({ groupName });

            if (group)
            {
                groupMembers = groupMembers.concat(group.members);
            }
        }
    }
    */

    //const invites = [...mappedInvite, ...groupMembers];


    const result = await createEventModel(title, date, fromTime, toTime, location, description, color, repeat, visibility, mappedInvite, mappedGroupInvite, createdBy);

    if (result)
    {
        //Send notification to all group members
        for(const {username, identifier} of invitePeople){
            const emitted_obj = {Type:"Create group", Cause:`${req.session.user.username}#${req.session.user.identifier}`,}
            await sendToSocket((await getSocket(username, identifier)), emitted_obj);
        }
        return res.status(201).send({result});                          // 201 Created
    }
    else
    {
        return res.status(400).send({msg:"Failed to create event"});    // 400 Bad Request
    }
}



//delete event
async function deleteEvent(req, res) {

    const { body: { _id } } = req;


    //check if the user is the creator of the event
    try {

        const isEventCreator = await checkIfCreator(_id, req.session.user.username, req.session.user.identifier);

        console.log("Event creator:", isEventCreator);


        if (isEventCreator === null)
        {
            console.log("User does not have the authority to delete this event");
            return res.status(403).send({ msg: "User does not have the authority to delete this event"});       // 403 forbidden
        }

    } catch (error) {
        console.log("Failed to check if user is the event creator", error);
        return res.status(500).send({ msg: "Failed to check if user is the event creator"});
    }
    //Get event
    //invited people:
    
    //delete the event
    const result = await deleteEventModel(_id);

    if (result === null)
    {
        return res.status(500).send({msg:"Couldn't Delete Event"});     // 500 error
    }
    
    return res.status(200).send({msg:"Event Deleted"});              // 200 OK
}




// Get users events
async function getEvents(req, res){
    var uName = req.session.user.username;
    var uId = req.session.user.identifier;

    var result = await eventModel.getEvents(uName, uId);
    //console.log(`I controller så ser result ut såhär`, result);
    if (result === null) {
        console.log("Failed to get events");
        return res.status(500).send({msg:"Failed to get events"});
    }
    return res.status(200).send({msg:"Got group", group:result});
}



module.exports = {
    createEvent,
    deleteEvent,
    getEvents
}
