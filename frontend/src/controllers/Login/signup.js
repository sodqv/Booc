import * as React from 'react';;
import {redirect} from "react-router-dom";
import axios from 'axios';

export async function signUp(email, username, password){
    await axios.post('http://localhost:3000//api/users', {
        email:email,
        username: username,
        password: password,
      })
      .then(function(response){
        //Test for failed creation of account
        if(typeof response.msg !== "undefined"){
          throw error(response.msg);
        }

        redirect("/Profile");
      })
      .catch(function(error){
        throw error;
      })
}