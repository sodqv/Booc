import * as React from 'react';
import axios from 'axios';
import {redirect} from "react-router-dom";

export async function login(email, password){
  return await axios.post('http://localhost:3000/api/auth', {
        email:email,
        password: password,
      })
      .then(function(response){
        //Test for failed login
        if(typeof response.msg !== "undefined"){
          throw new Error(response.msg);
        }

        //If success then redirect to next page
        if(response.data.startingPage == 0){
          return "/Profile";
        }
        else{
          return "/Feed";
        }
      })
      .catch(function(error){
        return "invalid";
      })
}