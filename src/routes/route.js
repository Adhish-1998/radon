const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const userController = require("../controllers/userController")

const b = function (req , res , next){
    let a = false
    if(a == true){
        console.log("a = true.")
    }
    else{
        console.log("a = false")
    }
    console.log("End Line.")
  next()
}

router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)

router.get("/cowin/sessions/byDistrict", b , CowinController.getSessionByDistrict)

router.post("/cowin/getOtp", CowinController.getOtp)
router.post("/createMeme", userController.createMeme)
router.get("/weatherByCity", userController.weatherOfCity)


module.exports = router;