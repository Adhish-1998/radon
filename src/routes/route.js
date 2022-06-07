const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const authorController= require("../controllers/authorController")
const BookController= require("../controllers/bookController")



router.post("/createBook", BookController.createBook  )
router.post("/createAuthor", authorController.createAuthor )

router.get("/BookOFChetanBhagat", BookController.BooksOfChetanBhagat )
router.get("/TwoStates", BookController.TwoStatesUpdatedPrice  )
router.get("/PriceBet50-100", BookController.PriceBet50_100 )


module.exports = router;