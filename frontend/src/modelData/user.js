import * as React from 'react';
import {signUp as signUpController, 
    changePassword as changePasswordController, 
    deleteUser as deleteUserController,
    changeStartPage as changeStartPageController,    
    } from "../controllers/userController"

export async function signUp(request){
    const formData = await request.formData();
    let email = formData.get('email');
    let username = formData.get('username');
    let password1 = formData.get('password1');
    let password2 = formData.get('password2');
    
    //test if passwords are the same
    if(password1 !== password2){
        return null;
    }
    const response = await signUpController(email, username, password1);
    return response;
}

//0 = Profile
//1 = Feed
export async function changeStartPage(newStartPage){
    const response = await changeStartPageController(newStartPage);
    return response;
}


export async function changePassword(request) {
    const formData = await request.formData();
    let password1 = formData.get('password1');
    let password2 = formData.get('password2');
    
    //test if passwords are the same
    if(password1 !== password2){
        return null;
    }
    const response = await changePasswordController(password1);
    return response;
}

export async function deleteUser() {
    const response = await deleteUserController();
    return response;
}