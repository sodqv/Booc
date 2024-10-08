
const eventsModel = require('../model/eventModel');


function inviteToObject(array){
    return {username:array[0], identifier:array[1]};
}

//create event
async function createEvent(req, res){

    const { body: { title, date, fromTime, toTime, location, description, color, repeat, visibility, invitePeople } } = req;
    const createdBy = req.session.user;
    const mappedInvite = invitePeople.map(inviteToObject); //Transforms the [[]] to [{}]

    const result = await eventsModel.createEvent(title, date, fromTime, toTime, location, description, color, repeat, visibility, mappedInvite, createdBy);

    if (result)
    {
        return res.status(201).send({result});                          // 201 Created
    }
    else
    {
        return res.status(400).send({msg:"Failed to create event"});    // 400 Bad Request
    }
}



//delete event
async function deleteEvent(req, res){
    const {body: {eventID}} = req;

    const result = await eventsModel.deleteEvent(eventID);

    if (result)
    {
        return res.status(200).send({msg:"Event Deleted"});              // 200 OK
    }
    else
    {
        return res.status(500).send({msg:"Couldn't Delete Event"});     // 500 error
    }
}



// Get users events
async function getEvents(req, res){
    var uName = req.session.user.username;
    var uId = req.session.user.identifier;

    var result = await eventsModel.getEvents(uName, uId);
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
