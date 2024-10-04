import {getGroup as CTRLgetGroup, getAllGroups as CTRLgetAllGroups, createGroup as CTRLcreateGroup, updateGroup as CTRLupdateGroup, deleteGroup as CTRLdeleteGroup} from ".././controllers/groupController"

//Get info about group for recreating form
export async function getGroup(){
    //Testing values
    const groupName = "TestingClient";

    const response = await CTRLgetGroup(groupName);
    console.log(response);
}

//Get all groups a person is in
export async function getAllGroups(){
    const response = await CTRLgetAllGroups();
    console.log(response);
}

//Create group
export async function createGroup(){
    //Testing values
    const groupName = "TestingClient";
    const members = [];

    const response = await CTRLcreateGroup(groupName, members);
    console.log(response);
}  

//Update group
export async function updateGroup(){
    //Testing values
    const groupName = "TestingClient";
    const owners = [{username:"bob", identifier:0}, {username:"Test5", identifier:0}]
    const members = [{username:"lisa", identifier:0},{username:"carl", identifier:1}]

    const response = await CTRLupdateGroup(groupName,owners,members);
    console.log(response);
}

//Delete group
export async function deleteGroup(){
    //Testing values
    const groupName = "TestingClient";

    const response = await CTRLdeleteGroup(groupName);
    console.log(response);
}