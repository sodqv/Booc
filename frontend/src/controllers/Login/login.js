import * as React from 'react';
import axios from 'axios';
import {redirect} from "react-router-dom";

export async function login(email, password){
    await axios.post('http://localhost:3000/api/auth', {
        email:email,
        password: password,
      })
      .then(function(response){
        //Test for failed login
        if(typeof response.msg !== "undefined"){
          throw new Error(response.msg);
        }

        //If success then redirect to next page
        if(response.startingPage == 0){
          return redirect("/Profile");
        }
        else{
          return redirect("/Feed");
        }
      })
      .catch(function(error){
        throw error;
      })
}