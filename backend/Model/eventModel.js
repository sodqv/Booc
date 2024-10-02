const mongoose = require('mongoose');
const Event = require("./schemas/eventSchema");
const startmongoose = require('./mongodbStarter');



//create event
async function createEvent(title, date, time, location, description, color, repeat = 'never', visibility = 'private', invitePeople = [], createdBy)
{
    startmongoose();                //initialize the mongoose connection
    
    try{
        const newEvent = new Event({
            title,
            date,
            time,
            location,
            description,
            color,
            repeat,
            visibility,
            invitePeople,
            createdBy,
        });

        await newEvent.save();      //saves the event to the database
        return newEvent;            //success
    }
    catch (error) {
        console.error('Failed to create event:', error);    //logs the error
        return null;                //failed
    }
}



module.exports = {
    createEvent
}

