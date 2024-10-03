import * as React from 'react';
import {isAuth as controllerIsAuth, login as controllerLogin, logOut as controllerLogOut} from "../controllers/authController"

export async function login(email, password){
    const response = await controllerLogin(email, password)
    return response;
}

export async function isAuth(){
    const response = await controllerIsAuth();
    return response;

    
}

export async function logOut() {
    console.log("Attempted to log out");
    return await controllerLogOut();
}