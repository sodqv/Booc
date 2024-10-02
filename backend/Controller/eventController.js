
const eventsModel = require('../Model/eventModel');


//create event
async function createEvent(req, res){
    const { body: { title, date, fromTime, toTime, location, description, color, repeat, visibility, invitePeople } } = req;
    const result = await eventsModel.createEvent(title, date, fromTime, toTime, location, description, color, repeat, visibility, invitePeople);

    if (result)
    {
        return res.status(201).send({result});                          // 201 Created
    }
    else
    {
        return res.status(400).send({msg:"Failed to create event"});    // 400 Bad Request
    }
}

module.exports = {
    createEvent
}
