import {redirect} from "react-router-dom";
import {api} from "./axiosTemplate.js";



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



//Add friend
export async function addFriend(newFriend)
{

    var ProccesedResponse = "";

    await api.put('api/users', {
        friendList:newFriend
    },{
        headers: {
            "Access-Control-Allow-Origin": "http://localhost:6400",
            "Access-Control-Allow-Credentials":"true",
        }
    })
    .then(function(response) {
        if(typeof response.data?.msg === "undefined" || response.data?.msg === "Failed to add friend") {
            throw new Error("Invalid response");
        }

        return "Success";
    })
    .catch(function(error) {
        console.log(error);
        ProccesedResponse = "Failed to add friend";
    })

    return ProccesedResponse;
}


