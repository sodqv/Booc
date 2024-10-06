import { getCurrentUser as CTRLgetCurrentUser,
         addFriend as CTRLaddFriend } from ".././controllers/friendController"


export async function getCurrentUser()
{
    //testing values
    const currentUser = "TestingClient";

    const response = await CTRLgetCurrentUser(currentUser);
    console.log(response);
}


export async function addFriend(request)
{

    
    //const formData = await request.addFriendString;
    const formData = request.addFriendString;

    console.log("Raw formdata in friend.js:", formData);

    const splitStr = formData.split('#');

    //const [friendUsername, friendIdentifier] = formData.split('#');


    const friendsUsername = splitStr[0];
    const friendIdentifier = splitStr[1];

    const newFriend = {
        username: friendsUsername,
        identifier: friendIdentifier
    }

    console.log("New friend data in friend.js:", newFriend);

    const response = await CTRLaddFriend(newFriend);

    console.log("Response from backend:", response);
}

