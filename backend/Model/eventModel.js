const mongoose = require('mongoose');
const events = require("./schemas/eventSchema");
const users = require("./schemas/userSchema");
const {startmongoose} = require('./mongodbStarter');


function inviteToObject(array){
    return {username:array[0], identifier:array[1]};
}


//create event
async function createEvent(title, date, fromTime, toTime, location, description, color, repeat = 'never', visibility = 'private', invitePeople = [], createdBy)
{
    startmongoose();                                        //initialize the mongoose connection

    try{
        const currentUser = {
            username: createdBy.username,
            identifier: createdBy.identifier,
        }
        if (!currentUser) {
            return 0;
        }

        const mappedInvite = invitePeople.map(inviteToObject); //Transforms the [[]] to [{}]


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
            invitePeople:mappedInvite,
            createdBy: currentUser    
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

