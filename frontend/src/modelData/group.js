import {getGroup as CTRLgetGroup, 
    getAllGroups as CTRLgetAllGroups, 
    createGroup as CTRLcreateGroup, 
    updateGroup as CTRLupdateGroup, 
    deleteGroup as CTRLdeleteGroup,
    leaveGroup as CTRLleaveGroup} from ".././controllers/groupController"

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
    return response;
    //Typical response: Array of groups:
    /*
    "groups": [
        {
            "_id": "6701740d478dcc174a97a6df",
            "groupName": "TestingClient",
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
    let members = formData.invitePeople.map((preproceccedUsername) => preproceccedUsername.split("#"));
    

    /*
    //Testing values
    const groupName = "TestingClient";
    const members = [{username: "bob", identifier: 0}];
    */

    const response = await CTRLcreateGroup(groupName, members);
    return response;
    //Typical response: Success
}  

//Update group
export async function updateGroup(formData, user){
    //Processes values from form
    const currentGroupName = formData.currentGroupName;             //Group that is to be changed
    if(!currentGroupName){console.log("No group chosen");return;}

    var groupName = formData.groupName;                             //New group name
    if(!currentGroupName){groupName = currentGroupName;}            //If no new name is chosen then use the current group name

    var invitePeople = formData.invitePeople.map((member) => {return {username:member.split("#")[0],identifier:member.split("#")[1]}}); //This will overwritte the current members

    var newOwner = formData.newOwner;                                                   //Changes the owner
    if(!newOwner){newOwner = [{username:user.username,  identifier:user.identifier}]};  //If no new owner is selected keep the current user as owner


    //Testing values
    /*
    const groupName = "TestingClient";
    const owners = [{username:"bob", identifier:0}, {username:"Test5", identifier:0}]
    const members = [{username:"lisa", identifier:0},{username:"carl", identifier:1}]
    */

    const response = await CTRLupdateGroup(currentGroupName, groupName, newOwner, invitePeople); //For testing switch to (groupName,owners,members)
    console.log(response);
    return response;
    //Typical response: Updated group
    
}

//Delete group
export async function deleteGroup(groupName){
    //Testing values
    //const groupName = "TestingClient";
    console.log(groupName);

    const response = await CTRLdeleteGroup(groupName);
    console.log(response);
    //Typical response: "Deleted group"
}

export async function leaveGroup(groupName) {
    //Testing values
    //const groupName = "TestingClient";

    const response = await CTRLleaveGroup(groupName);
    console.log(response);
    //Typical response: "Left group"
}