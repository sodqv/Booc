import { //getCurrentUser as CTRLgetCurrentUser,
         addFriend as CTRLaddFriend } from ".././controllers/friendController"

/* 
export async function getCurrentUser()
{
    //testing values
    const currentUser = "TestingClient";

    const response = await CTRLgetCurrentUser(currentUser);
    console.log(response);
}
*/


export async function addFriend(request)
{
    const formData = request.addFriendString;       //get the request object containing the friend's username and identifier

    console.log("Raw formdata in friend.js:", formData);


    const splitStr = formData.split('#');           //split the form data on #, separating username and identifier

    const friendsUsername = splitStr[0];
    const friendIdentifier = splitStr[1];

    //newFriend object containing the username and identifier
    const newFriend = {
        username: friendsUsername,
        identifier: friendIdentifier
    }


    console.log("New friend data in friend.js:", newFriend);                    //logs the newFriend object

    const response = await CTRLaddFriend(newFriend);                            //send the newFriend object to friendController (frontend) 

    console.log("Response from friendController (frontend):", response);        //logs the response from friendController

    return response;
}

