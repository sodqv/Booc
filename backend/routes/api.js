var express = require('express');
const {authenicate, authStatus, createUser, deleteUser} = require('../controller/usersController');
var router = express.Router();

//Authorization
router.post("/auth", authenicate);
router.get("/auth", authStatus);

//Users
router.post("/users", createUser);
router.delete("/users", deleteUser);

module.exports = router;
