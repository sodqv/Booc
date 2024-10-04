var express = require('express');
const {authenicate, authStatus, removeAuth} = require("../controller/authController");
const {createUser, deleteUser} = require('../controller/usersController');
const { createEvent, deleteEvent } = require('../Controller/eventController');
//add const { createGroup, deleteGroup } = require('../Controller/groupController'); when it's implemented
var router = express.Router();

//Authorization
router.post("/auth", authenicate);
router.get("/auth", authStatus);
router.delete("/auth", removeAuth);

//Users
router.post("/users", createUser);
router.delete("/users", deleteUser);

//Events
router.post("/events", createEvent);
router.delete("events", deleteEvent);

//Groups
router.post("/groups", createGroup);
router.delete("/groups", deleteGroup);


module.exports = router;
