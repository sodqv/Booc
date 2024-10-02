import axios from 'axios';
import {api} from "./axiosTemplate.js"

//Checks if you are logged in
export async function login(email, password){
  var redirect_target = "";
  const response =  await api.post('/api/auth', {
        email:email,
        password: password,
      },{
        headers:{
          "Access-Control-Allow-Origin": "http://localhost:6400",
          "Access-Control-Allow-Credentials":"true",
        }
      })
      .then(function(response){
        //Test for failed login
        if(typeof response.msg !== "undefined"){
          throw new Error(response.msg);
        }

        //If success then redirect to next page
        if(response.data.startingPage == 0){
          redirect_target = "/Profile";
        }
        else{
          redirect_target =  "/Feed";
        }
      })
      .catch(function(error){
          redirect_target = "invalid";
      })

  //cookies.set("Session", response);
  return redirect_target;
}

//Checks your seesion cookie to see if you are logged in
export async function isAuth(email, password){
  return await api.get('/api/auth', {
        email:email,
        password: password,
      })
      .then(function(response){
        //Test for failed login
        if(typeof response.msg !== "undefined"){
          throw new Error(response.msg);
        }
        //Checks if the user was authenticated or not
        if(response.data.msg == "You are authenticated"){
            return "authenticated";
        }
        else{
            return "Not authenticated";
        }
      })
      .catch(function(error){
        return("failed to get authenticated status");
      })
}
