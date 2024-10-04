var express = require('express');
const {authenicate, authStatus, removeAuth} = require("../controller/authController");
const {createUser, deleteUser} = require('../controller/usersController');
const { createEvent } = require('../Controller/eventController');
const {getGroup,
    getAllGroups,
    createGroup,
    updateGroup,
    deleteGroup} = require("../controller/groupController");
var router = express.Router();

//Authorization
router.post("/auth", authenicate);
router.get("/auth", authStatus);
router.delete("/auth", removeAuth);

//Users
router.post("/users", createUser);
router.delete("/users", deleteUser);

//Group
router.get("/group", getGroup);
router.post("/group", createGroup);
router.put("/group", updateGroup);
router.delete("/group", deleteGroup);

//Groups
router.get("/groups", getAllGroups);

//Events
router.post("/newEvent", createEvent);


module.exports = router;
