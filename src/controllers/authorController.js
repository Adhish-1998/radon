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


const getBooksByAuthor= async function (req, res) {
    let bookDetails = req.params.authorId
    let Books = await BookModel.find({ author_id : bookDetails }).select({ name : 1, author_id : 1, _id:0 })
    res.send({BooksByAuthorId: Books})
}

module.exports.getBooksByAuthor = getBooksByAuthor


// //const authorByAge= async function (req, res) {
//     let authorDetails = await authorModel.find({ age : { $gt : 50}}).select({author_id : 1, author_name : 1 , age : 1, _id : 0  })
//     console.log(authorDetails)
//     let bookDetails = await BookModel.find({ratings : {$gt : 4 }}).select({name : 1, author_id : 1, _id : 0})
//     console.log(bookDetails)
//     for(i=0; i<bookDetails.length ; i++){
//         for(j=0 ; j<)
//         if(bookDetails[i].author_id == authorDetails.author_id){
//             console.log("Hi")
//         }else{
//             console.log("Hell0")
//         }
//     }
    // let aid = await authorDetails.map(auth => auth.author_id)
    // console.log(aid)
    //let details = await Bookdetails.find()
    //res.send({msg : details})
    //let bookDetails = req.params.authorId
    //let Books = await BookModel.find({ author_id : bookDetails }).select({ name : 1, author_id : 1, _id:0 })
    //res.send({BooksByAuthorId: Books})
//}

//module.exports.authorByAge = authorByAge