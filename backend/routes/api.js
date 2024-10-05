var express = require('express');
const {authenicate, authStatus, removeAuth} = require("../controller/authController");
const {createUser, 
    deleteUser, 
    changePassword,
    changeStartPage} = require('../controller/usersController');
const {getGroup,
    getAllGroups,
    createGroup,
    updateGroup,
    deleteGroup} = require("../controller/groupController");
const { createEvent, deleteEvent } = require('../Controller/eventController');
var router = express.Router();

//Authorization
router.post("/auth", authenicate);
router.get("/auth", authStatus);
router.delete("/auth", removeAuth);

//Users
router.post("/users", createUser);
router.put("/users", changeStartPage);
router.delete("/users", deleteUser);

//Password
router.put("/password", changePassword)

//Group
router.get("/group", getGroup);
router.post("/group", createGroup);
router.put("/group", updateGroup);
router.delete("/group", deleteGroup);

//Groups
router.get("/groups", getAllGroups);

//Events
router.post("/newEvent", createEvent);
//router.delete("events", deleteEvent);


module.exports = router;
