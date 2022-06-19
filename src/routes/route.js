const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const userController = require("../controllers/userController")



router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)

router.get("/cowin/sessions/byDistrict", CowinController.getSessionByDistrict)

router.post("/cowin/getOtp", CowinController.getOtp)
router.post("/createMeme", userController.createMeme)
router.get("/weatherByCity", userController.weatherOfCity)


module.exports = router;