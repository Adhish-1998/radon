//const { count } = require("console")
const BookModel= require("../models/bookModel")
const authorModel= require("../models/authorModel")



//Authour Creation
const createAuthor= async function (req, res) {
    let authorData= req.body
    let savedAuthor= await authorModel.create(authorData)
    res.send({msg: savedAuthor})
}
module.exports.createAuthor = createAuthor

// Prints Books of Chetan Bhagat
const BooksOfChetanBhagat= async function (req, res) {
    let authorDetails = await authorModel.find({ author_Name : "Chetan Bhagat"}).select({ author_id : 1, _id:0 })
    let requiredBooks = await BookModel.find(authorDetails[0]).select({ name : 1, _id :0 })
    res.send({ChetanBhagat: requiredBooks})
}

module.exports.BooksOfChetanBhagat = BooksOfChetanBhagat