const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const middlewares= require("../middleware/auth")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser)

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId", middlewares.authenticate, middlewares.authorise, userController.getUserData)
router.post("/users/:userId/posts", middlewares.authenticate, middlewares.authorise, userController.postMessage)

router.put("/users/:userId", middlewares.authenticate, middlewares.authorise, userController.updateUser)
router.delete('/users/:userId', middlewares.authenticate, middlewares.authorise, userController.deleteUser)

module.exports = router;