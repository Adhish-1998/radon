const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel = require("../models/publisherModel")


const createBook= async function (req, res) {
    //Author and Publisher Checking
    if(!req.body.author) return res.send("Author Id is Required")
    if(!req.body.publisher) return res.send("Publisher is Required")

    //Valid Author Checking
    let authorId = await authorModel.findById(req.body.author)
    if(!authorId) return res.send("Author is not present")

    //Valid Publisher Checking
    let publish = await publisherModel.findById(req.body.publisher)
    if(!publish) return res.send("Publisher is not present")
    
    //Creating A Book
    let bookCreated = await bookModel.create(req.body)
    res.send({data: bookCreated})
}

const getBooksData= async function (req, res) {
    let books = await bookModel.find().populate(['author','publisher'])
    res.send({data: books})
}

const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate('author_id')
    res.send({data: specificBook})

}



module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails

