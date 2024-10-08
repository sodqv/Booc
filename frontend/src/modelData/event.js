import { getEvents as getEventsCTRL } from "../controllers/eventController";

export async function getEvents(userData) {

    const response = await getEventsCTRL(userData.username, userData.identifier);
    //console.log("Full response:", response);
    return response;
}