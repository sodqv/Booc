import axios from 'axios';
axios.defaults.withCredentials = true;

export const api = axios.create({
    baseURL: "http://localhost:6400",
    withCredentials: true,
    headers:{
      "Access-Control-Allow-Origin": "http://localhost:6400",
      "Access-Control-Allow-Credentials":"true",
    }
  })