import * as React from 'react';
import {login as loginController} from "../../controllers/Login/login"

export async function login({email, password}){
    return await loginController(email, password);

    
}