const mongoose = require('mongoose');
const events = require("./schemas/eventSchema");
const {startmongoose} = require('./mongodbStarter');



//create event
async function createEvent(title, date, fromTime, toTime, location, description, color, repeat = 'never', visibility = 'private', invitePeople = [], createdBy)
{
    startmongoose();                                        //initialize the mongoose connection
    
    try{
        const newEvent = new events({
            title,
            date,
            fromTime,
            toTime,
            location,
            description,
            color,
            repeat,
            visibility,
            invitePeople,
            createdBy,
        });

        await newEvent.save();                              //saves the event to the database
        return newEvent;                                    //success
    }
    catch (error) {
        console.error('Failed to create event:', error);    //logs the error
        return null;                                        //failed
    }
}




//delete event
async function deleteEvent(eventID){
    startmongoose();

    try {
        const event = await events.findById(eventID);
        if (!event) return 0;

        await event.deleteOne();
        return 1;
    }
    catch (error) {
        console.error('Failed to delete event:', error);
        return 0;
    }

}




module.exports = {
    createEvent,
    deleteEvent
}

