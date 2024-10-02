var express = require('express');
const {authenicate, authStatus, createUser, deleteUser} = require('../controller/usersController');
const { createEvent } = require('../Controller/eventController');
var router = express.Router();

//Authorization
router.post("/auth", authenicate);
router.get("/auth", authStatus);

//Users
router.post("/users", createUser);
router.delete("/users", deleteUser);

//Events
router.post("/newEvent", createEvent);


module.exports = router;
