const express = require('express');
const router = express.Router();
const BookController= require("../controllers/bookController")

router.post("/createBook", BookController.createBook  ) //Create a book
router.post("/getBooksInYear/:bookyear", BookController.getBooksInYear  ) //Get Book of Particular year
router.post("/getRandomBooks", BookController.getRandomBooks  )//Get A particular book

router.get("/getParticularBook", BookController.getParticularBook)
router.get("/bookList", BookController.bookList)  //Gives all the books with Book and Author Name
router.get("/getXINRBooks", BookController.getXINRBooks)//Give Books according to price

module.exports = router;