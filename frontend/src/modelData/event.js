import { getEvents as getEventsCTRL,
        deleteEvent as deleteEventCTRL } from "../controllers/eventController";


export async function getEvents(userData) {

    const response = await getEventsCTRL(userData.username, userData.identifier);
    //console.log("Full response:", response);
    return response;
}


export async function deleteEvent(_id)
{
    console.log(_id);

    const response = await deleteEventCTRL(_id);
    console.log(response);
}

