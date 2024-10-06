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

    
    const formData = await request.addFriendString;

    const splitStr = formData.split('#');

    const friendsUsername = splitStr[0];
    const friendIdentifier = splitStr[1];


    const response = await CTRLaddFriend(request);
    console.log(response);
}

