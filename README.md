# Booc
This is an app where you can create and schedule meetings and events. Don't miss any events by following people and get a notice when someone uploads a new event. Keep track of everything on your personal page.


Group 3 - List of members
---------
Github handle - Firstname Lastname

* Sneakycloud - Eddie Olofsgård
* sodqv - Sara Odqvist
* ebbabrage - Ebba Brage
* sandzan - Sandra Carlsson



Tools
----------
[Material UI Components](https://mui.com/material-ui/all-components)


Starting app on client
---------
1. Clone repository.
2. Go into "frontend" folder.
3. Open cmd (in the current directory) and enter "npm ci". (This requires node.js)
4. then enter "npm start" in cmd.

Starting server
---------
1. Clone repository
2. Go into "Backend" folder.
3. Open cmd in current directory and enter "npm ci". (This requires node.js)
4. Create an .env file (in the backend directory) and enter your username and password for the mongodb in the format:  
DB_USERNAME = place username here  
DB_PASSWORD = place password here
5. For debugging run "SET DEBUG=backend:* & npm start" in the cmd(this has a problem with doing it in vscode) or if you are running it for production "npm start".

Preliminary List of Features
----------
- user accounts
- create events
- join events
- security(password encryption)
- personal page with your scheduled events
- follow other users, see other users events
- reset password
- notification, user roles

Main Entities
----------
users, events, groups

