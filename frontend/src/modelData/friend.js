import { getCurrentUser as CTRLgetCurrentUser,
         addFriend as CTRLaddFriend } from ".././controllers/friendController"


export async function getCurrentUser()
{
    //testing values
    const currentUser = "TestingClient";

    const response = await CTRLgetCurrentUser(currentUser);
    console.log(response);
}


export async function addFriend()
{
    //testing values
    const _id = "TestingClient";
    const friendList = [{username:"pal", identifier:0}, {username:"world", identifier:1}]

    const response = await CTRLaddFriend(_id, friendList);
    console.log(response);
}

