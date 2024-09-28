import * as React from 'react';
import {login as loginController} from "../../controllers/Login/login"

export async function login(email, password){
    const response = await loginController(email, password)
    return response;

    
}