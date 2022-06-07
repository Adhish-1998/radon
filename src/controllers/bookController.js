const { count } = require("console")
const BookModel= require("../models/bookModel")
const authorModel= require('../models/authorModel')

// const createBook= async function (req, res) {
//     let bookData= req.body
//     let savedBook= await BookModel.create(bookData)
//     res.send({msg: savedBook})
// }
// module.exports.createBook= createBook

// const BooksOfChetanBhagat= async function (req, res) {
//     //let bookData= req.body
//     let authorDetails = await authorModel.find({ author_Name : "Chetan Bhagat"}).select({ author_id : 1, _id:0 })
//     console.log(authorDetails)
//     let aid = authorDetails.author_id
//     console.log(aid)
//     let allBooks = await BookModel.find({ author_id : aid})
//     res.send({msg: allBooks})
// }
// module.exports.BooksOfChetanBhagat = BooksOfChetanBhagat


// const TwoStatesUpdatedPrice = async function (req, res) {
//     //let bookData= req.body
//     let bookDetails = await BookModel.find({ name : "Two States"})
//     console.log(bookDetails)
//     // let aid = bookDetails.author_id
//     // let updatedPrice = await BookModel.findOneAndUpdateOne(
//     //     { author_id : aid},
//     //     { $set : { price : 100 }},
//     //     {new : true }
//     // )    
    
//    // res.send({msg: updatedPrice})
// }
// module.exports.TwoStatesUpdatedPrice = TwoStatesUpdatedPrice


// const PriceBet50_100 = async function (req, res) {
//     //let bookData= req.body
//     let bookDetails = await BookModel.find({ price : {$gte: 50, $lte: 100}})
//     let books = bookDetails.map(({ name, author_id })=> ({name , author_id}))
//     let authorDetails = BookModel.author_name
//     console.log(authorDetails)
//     res.send({msg: books, authorDetails})
// }
// module.exports.PriceBet50_100 = PriceBet50_100

const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const getBooksData= async function (req, res) {
    let allBooks= await BookModel.find( {authorName : "HO" } )
    console.log(allBooks)
    if (allBooks.length > 0 )  res.send({msg: allBooks, condition: true})
    else res.send({msg: "No books found" , condition: false})
}


const updateBooks= async function (req, res) {
    let data = req.body // {sales: "1200"}
    // let allBooks= await BookModel.updateMany( 
    //     { author: "SK"} , //condition
    //     { $set: data } //update in data
    //  )
    let allBooks= await BookModel.findOneAndUpdate( 
        { authorName: "ABC"} , //condition
        { $set: data }, //update in data
        { new: true , upsert: true} ,// new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT  
     )
     
     res.send( { msg: allBooks})
}

const deleteBooks= async function (req, res) {
    // let data = req.body 
    let allBooks= await BookModel.updateMany( 
        { authorName: "FI"} , //condition
        { $set: {isDeleted: true} }, //update in data
        { new: true } ,
     )
     
     res.send( { msg: allBooks})
}




// CRUD OPERATIONS:
// CREATE
// READ
// UPDATE
// DELETE



module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.updateBooks= updateBooks
module.exports.deleteBooks= deleteBooks
