//const { count } = require("console")
const bookModel= require("../models/bookModel")
const authorModel= require("../models/authorModel")



//Authour Creation
const createAuthor= async function (req, res) {
    let authorData= req.body
    let savedAuthor= await authorModel.create(authorData)
    res.send({msg: savedAuthor})
}
module.exports.createAuthor = createAuthor