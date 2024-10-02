
const eventsModel = require('../Model/eventModel');


//create event
async function createEvent(req, res){
    const { body: { title, date, fromTime, toTime, location, description, color, repeat, visibility, invitePeople } } = req;
    const result = await eventsModel.createEvent(title, date, fromTime, toTime, location, description, color, repeat, visibility, invitePeople);

    if (result)
    {
        return res.status(200).send({result});  // OK
    }
    else
    {
        return res.status(500).send({msg:"Failed to create event"});    // Internal Server Error
    }
}

module.exports = {
    createEvent
}
