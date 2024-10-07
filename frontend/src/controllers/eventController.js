import {api} from "./axiosTemplate.js"

export async function getEvents(username, identifier){
    var event = [];
  
    try {
      const response = await api.get('/api/event', {params: { username, identifier }});
      if(typeof response.data === "undefined" || response.data?.msg === "Failed to get user"){
        throw "Error";
      }
      event = response.data.group;
      //console.log("Full response:", event[0].title);
    }
    catch (error) {
      console.log(error)
      return "Failed to get user";
    }
    // console.log("Jag är efter frontend och getEvents");
    return event;
}