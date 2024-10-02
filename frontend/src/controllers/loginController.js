import {redirect} from "react-router-dom";
import {api} from "./axiosTemplate.js"

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
    return redirect(redirect_target);
}
