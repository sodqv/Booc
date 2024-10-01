import axios from 'axios';
import {redirect} from "react-router-dom";
import Cookies from 'universal-cookie';

const cookies = new Cookies(null, { path: '/' });

axios.defaults.withCredentials = true;

const api = axios.create({
    baseURL: "http://localhost:6400",
    withCredentials: true,
    headers:{
      "Access-Control-Allow-Origin": "http://localhost:6400",
      "Access-Control-Allow-Credentials":"true",
    }
  })

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

//Creates a new account and logs you in
export async function signUp(email, username, password){
    var redirect_target = "";
    const response = api.post('/api/users', {
        email:email,
        username: username,
        password: password,
      })
      .then(function(response){
        //Test for failed creation of account
        if(typeof response.msg !== "undefined"){
          throw Error(response.msg);
        }

        redirect_target = "/Profile";
      })
      .catch(function(error){
        throw error;
    })

    &&cookies.set("Session", response);
    return redirect(redirect_target);
}


//Checks your seesion cookie to see if you are logged in
export async function isAuth(email, password){
  return await api.get('/api/auth', {
        email:email,
        password: password,
        /*
        headers:{
            cookie: cookies.get("Session"),
        }
        */
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

