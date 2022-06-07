const { count } = require("console")
const BookModel= require("../models/bookModel")
const authorModel= require('../models/authorModel')

const createBook= async function (req, res) {
    let bookData= req.body
    let savedBook= await BookModel.create(bookData)
    res.send({msg: savedBook})
}
module.exports.createBook= createBook

const BooksOfChetanBhagat= async function (req, res) {
    //let bookData= req.body
    let authorDetails = await authorModel.find({ author_Name : "Chetan Bhagat"}).select({ author_id : 1, _id:0 })
    console.log(authorDetails)
    let aid = authorDetails.author_id
    console.log(aid)
    let allBooks = await BookModel.find({ author_id : aid})
    res.send({msg: allBooks})
}
module.exports.BooksOfChetanBhagat = BooksOfChetanBhagat


const TwoStatesUpdatedPrice = async function (req, res) {
    //let bookData= req.body
    let bookDetails = await BookModel.find({ name : "Two States"})
    console.log(bookDetails)
    // let aid = bookDetails.author_id
    // let updatedPrice = await BookModel.findOneAndUpdateOne(
    //     { author_id : aid},
    //     { $set : { price : 100 }},
    //     {new : true }
    // )    
    
   // res.send({msg: updatedPrice})
}
module.exports.TwoStatesUpdatedPrice = TwoStatesUpdatedPrice


const PriceBet50_100 = async function (req, res) {
    //let bookData= req.body
    let bookDetails = await BookModel.find({ price : {$gte: 50, $lte: 100}})
    let books = bookDetails.map(({ name, author_id })=> ({name , author_id}))
    let authorDetails = BookModel.author_name
    console.log(authorDetails)
    res.send({msg: books, authorDetails})
}
module.exports.PriceBet50_100 = PriceBet50_100
