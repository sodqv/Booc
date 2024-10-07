//import {redirect} from "react-router-dom";
import {api} from "./axiosTemplate.js";


/* 
//Get current user
export async function getCurrentUser()
{
    var ProccesedResponse = "";

    await api.get('/api/users',  
        { headers: { 
            "Access-Control-Allow-Origin": "http://localhost:6400",
            "Access-Control-Allow-Credentials":"true",
        }
    })
    .then(function(response) {
        if(typeof response.data?.msg === "undefined" || response.data?.msg === "Failed to get user") {
            throw new Error("Invalid response");
        }

        ProccesedResponse = response.data.user;
    })
    .catch(function(error) {
        console.log(error);
        ProccesedResponse = "Failed to get user";
    })

    return ProccesedResponse;
}
*/


//Add friend
export async function addFriend(newFriend)
{
    let ProccesedResponse = "";     //variable to hold the processed response


    //api post to the backend, request body containing the friend's username and identifier
    await api.post('/api/users/addFriend', {    
        friendsUsername: newFriend.username,
        friendIdentifier: newFriend.identifier
    },{

        headers: {
            "Access-Control-Allow-Origin": "http://localhost:6400",         //allow requests from this origin
            "Access-Control-Allow-Credentials":"true",                      //allow credentials (cookies) in the requests
        }
    })
    .then(function(response) {
        if(typeof response.data?.msg === "undefined" || response.data?.msg === "Failed to add friend") {
            throw new Error("Invalid response");
        }

        ProccesedResponse = "Success";
    })
    .catch(function(error) {
        console.log(error);
        ProccesedResponse = "Failed";
    })

    return ProccesedResponse;       //return the processed response. This should be either "Success" or "Failed"
}


