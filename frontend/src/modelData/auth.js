import * as React from 'react';
import {isAuth as controllerIsAuth} from "../controllers/loginController"


export function authenticatedLoader(){
    //Gets current users email and password and authenticates it
    //Gets email and password (first checks if they exist)

    //await authentication from api
    //const response = Auth(email, password);

    //redirect back to home page if not logged in
    //if(response === "Not authenticated"){return redirect("/");}
}

export async function isAuth(email, password){
    const response = await controllerIsAuth(email, password);
    return response;

    
}