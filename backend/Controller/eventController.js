
const eventsModel = require('../model/eventModel');


//create event
async function createEvent(req, res){
    const { body: { title, date, fromTime, toTime, location, description, color, repeat, visibility, invitePeople, createdBy } } = req;
    const result = await eventsModel.createEvent(title, date, fromTime, toTime, location, description, color, repeat, visibility, invitePeople, createdBy);

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


module.exports = {
    createEvent,
    deleteEvent
}
