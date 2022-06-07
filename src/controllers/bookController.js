const { count } = require("console")
const BookModel= require("../models/bookModel")

//Creating A New Book

const createBook= async function (req, res) {
    let bookData= req.body
    let savedBook= await BookModel.create(bookData)
    res.send({msg: savedBook})
}
module.exports.createBook= createBook

//Fetch Book with Author and Book Name

const bookList= async function (req, res) {
    let allBooks = await BookModel.find().select({"Book Name" : 1, "Author Name" : 1, _id : 0})
    res.send({BooksWithAuthorName : allBooks})  
}
module.exports.bookList = bookList

//Fetch Book According to Year

const getBooksInYear= async function (req, res) {
    let allBooksByYear = await BookModel.find({ "Year" : req.params.bookyear })
    res.send({msg: allBooksByYear})
}

module.exports.getBooksInYear = getBooksInYear

//Fetch Book According to 100, 200, 500 INR

const getXINRBooks= async function (req, res) {
    //const prc = BookModel.Price.IndianPrice
    let getBooksByINR = await BookModel.find({"Price.Indian Price" : { $or : ["INR 100", "INR 200", "INR 500"]} });
    res.send({msg: getBooksByINR})
}

module.exports.getXINRBooks = getXINRBooks

//Fetch Book According to Given Property

const getParticularBook= async function (req, res) {
    //const prc = BookModel.Price.IndianPrice
    let Properties = req.body
    let ParticularBook = await BookModel.find( Properties ).select({ "Author Name" : 1, "Book Name" : 1 , _id: 0}); 
    res.send({msg: ParticularBook})
}

module.exports.getParticularBook = getParticularBook

//Fetch if Stock Available or Total Page is Greater than 500

const getRandomBooks= async function (req, res) {
    let allBooks = await BookModel.find({$or : [{"Stock Availabe" : true} , {"Total Pages" : {$gt: 500}} ]  })
    res.send({msg : allBooks})
}

module.exports.getRandomBooks = getRandomBooks
