import * as React from 'react';
import {signUp as signUpController} from "../../controllers/loginController"

export async function signUp({request}){
    const formData = await request.formData();
    let email = formData.get('email');
    let username = formData.get('username');
    let password1 = formData.get('password1');
    let password2 = formData.get('password2');
    
    //test if passwords are the same
    if(password1 !== password2){
        return;
    }


    return await signUpController(email, username, password1);
}