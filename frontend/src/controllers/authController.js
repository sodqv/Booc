import axios from 'axios';

export async function isAuth(email, password){
  const api = axios.create({
    baseURL: "http://localhost:3000",
  })

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