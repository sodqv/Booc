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
    deleteGroup,
    leaveGroup} = require("../controller/groupController");
const {addFriend} = require('../controller/friendController');
const { createEvent, deleteEvent } = require('../controller/eventController');
var router = express.Router();

//Authorization
router.post("/auth", authenicate);
router.get("/auth", authStatus);
router.delete("/auth", removeAuth);

//Users
//router.get("/users", getCurrentUser);
router.post("/users", createUser);
router.put("/users", changeStartPage);
router.delete("/users", deleteUser);



//Friend
router.post("/users/addFriend", addFriend);

//Password
router.put("/password", changePassword);

//Group
router.get("/group", getGroup);
router.post("/group", createGroup);
router.put("/group", updateGroup);
router.delete("/group", deleteGroup);

//Groups
router.get("/groups", getAllGroups);
router.delete("/groups", leaveGroup);

//Events
router.post("/newEvent", createEvent);
//router.delete("events", deleteEvent);

module.exports = router;
