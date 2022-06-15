const express = require('express');
const router = express.Router();
const orderController= require("../controllers/orderController")
const UserController= require("../controllers/userController")
const productController= require("../controllers/productController")
const commonMW = require ("../middlewares/commonMiddlewares")



router.post("/createProduct", productController.createProduct  )
router.post("/createUser", commonMW.checkFreeAppUser, UserController.createUser  )
router.post("/createOrder", commonMW.checkFreeAppUser, orderController.createOrder  )


module.exports = router;