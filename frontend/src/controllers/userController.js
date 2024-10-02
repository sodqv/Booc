import {redirect} from "react-router-dom";
import {api} from "./axiosTemplate.js"

//Creates a new account and logs you in
export async function signUp(email, username, password){
  var redirect_target = "";
  const response = await api.post('/api/users', {
      email:email,
      username: username,
      password: password,
    })
    .then(function(response){
      //Test for failed creation of account
      if(response.data?.msg !== "Created user"){
        throw Error(response.msg);
      }
      redirect_target = "/Profile";
    })
    .catch(function(error){
      console.log(error);
      redirect_target = "invalid";
  })
  return redirect_target;
}
