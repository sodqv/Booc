import {getGroup as CTRLgetGroup, getAllGroups as CTRLgetAllGroups, createGroup as CTRLcreateGroup, updateGroup as CTRLupdateGroup, deleteGroup as CTRLdeleteGroup} from ".././controllers/groupController"

//Get info about group for recreating form
export async function getGroup(){
    //Testing values
    const groupName = "TestingClient";

    const response = await CTRLgetGroup(groupName);
    console.log(response);
    //Typical response:
    /* 
    "group": {
        "_id": "6701740d478dcc174a97a6df",
        "groupName": "TestingClient",
        "owners": [
            {
                "username": "bob",
                "identifier": "0"
            },
            {
                "username": "Test5",
                "identifier": "0"
            }
        ],
        "members": [
            {
                "username": "lisa",
                "identifier": "0"
            },
            {
                "username": "carl",
                "identifier": "1"
            }
        ]
    }
    */
}

//Get all groups a person is in
export async function getAllGroups(){
    const response = await CTRLgetAllGroups();
    console.log(response);
    //Typical response: Array of groups:
    /*
    "groups": [
        {
            "_id": "6701740d478dcc174a97a6df",
            "groupName": "TestingClient",q 
            "owners": [
                {
                    "username": "Tester",
                    "identifier": "0"
                }
            ],
            "members": [],
            "__v": 0
        }
    ]
    */
}

//Create group
export async function createGroup(formData){
    //Extracts form values
    let groupName = formData.groupName;
    let members = formData.invitePeople;

    //Testing values
    /*
    const groupName = "TestingClient";
    const members = [{username: bob, identifier: 0}];
    */

    const response = await CTRLcreateGroup(groupName, members);
    return response;
    //Typical response: Success
}  

//Update group
export async function updateGroup(){
    //Testing values
    const groupName = "TestingClient";
    const owners = [{username:"bob", identifier:0}, {username:"Test5", identifier:0}]
    const members = [{username:"lisa", identifier:0},{username:"carl", identifier:1}]

    const response = await CTRLupdateGroup(groupName,owners,members);
    console.log(response);
    //Typical response: Updated group
    
}

//Delete group
export async function deleteGroup(){
    //Testing values
    const groupName = "TestingClient";

    const response = await CTRLdeleteGroup(groupName);
    console.log(response);
    //Typical response: "Deleted group"
}