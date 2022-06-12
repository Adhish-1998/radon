const express = require('express');
const router = express.Router();
const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")

router.post("/createAuthor", authorController.createAuthor  )
router.post("/createBook", bookController.createBook  )
router.post("/createPublisher", authorController.createPublisher  )



router.get("/getAuthorsData", authorController.getAuthorsData)
router.get("/getBooks", bookController.getBooksData)
router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)


router.put("/updateHardCover",bookController.updateIsHardCover)
router.put("/updateAuthorRating",bookController.authorRating)

module.exports = router;