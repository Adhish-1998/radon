const { count } = require("console")
const BookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let bookData= req.body
    let savedBook= await BookModel.create(bookData)
    res.send({msg: savedBook})
}
module.exports.createBook= createBook

const bookList= async function (req, res) {
    let allBooks = await BookModel.find().select({"Book Name" : 1, "Author Name" : 1, _id : 0})
    res.send({BooksWithAuthorName : allBooks})  
}
module.exports.bookList = bookList

const getBooksInYear= async function (req, res) {
    let allBooksInYear = await BookModel.find({ "Year" : req.params.bookyear })
    res.send({msg: allBooksInYear})
}

module.exports.getBooksInYear = getBooksInYear

const getXINRBooks= async function (req, res) {
    //const prc = BookModel.Price.IndianPrice
    let getBooksByINR = await BookModel.find({"Price.Indian Price" : { $or : ["INR 100", "INR 200", "INR 500"]} });
    res.send({msg: getBooksByINR})
}

module.exports.getXINRBooks = getXINRBooks

const getRandomBooks= async function (req, res) {
    let allBooks = await BookModel.find({$or : [{"Stock Availabe" : true} , {"Total Pages" : {$gt: 500}} ]  })
    res.send({msg : allBooks})
}

module.exports.getRandomBooks = getRandomBooks
