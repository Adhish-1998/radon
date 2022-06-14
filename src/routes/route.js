const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const commonMW = require('../middleware/commonMW')

//Registering A User
router.post("/users", userController.createUser  )

//Login User
router.post("/login", userController.loginUser)

//Fetch User Details
router.get("/users/:userId", commonMW.Authenticity, userController.getUserData)\

//Update User Details
router.put("/users/:userId", commonMW.Authenticity, userController.updateUser)

//Deleted User Details
router.delete("/users/:userId", commonMW.Authenticity, userController.deleteUser)

module.exports = router;