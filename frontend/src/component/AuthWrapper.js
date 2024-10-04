import * as React from 'react';
import {redirect, useNavigate} from "react-router-dom";
import {isAuth} from "../modelData/auth";

export async function AuthLoader(){
    //console.log("Starting auth");
    const response = await isAuth();
    //console.log(response);
    if( response !== "authenticated"){
        return redirect("/");
    }
    return 0;
}