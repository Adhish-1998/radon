const BookModel= require("../models/bookModel")
const authorModel= require('../models/authorModel')

//Create Book

const createBook= async function (req, res) {
    let bookData= req.body
    let savedBook= await BookModel.create(bookData)
    res.send({msg: savedBook})
}
module.exports.createBook= createBook

// Updating Price of Two States

const TwoStatesUpdatedPrice = async function (req, res) {
    let bookData = await BookModel.findOneAndUpdate({ "name" :"Two states"}, {$set :{ price:100}}, {new : true}).select({ name : 1 , price : 1 ,  _id : 0})  
    res.send({UpdatedPrice: bookData})
}
module.exports.TwoStatesUpdatedPrice = TwoStatesUpdatedPrice

//Print the books of which price between 50 to 100

const PriceBet50_100 = async function (req, res) {
    let bookDetails = await BookModel.find({ price : {$gte: 50, $lte: 100}}).select({"name" : 1 , price : 1 , _id : 0 })
    res.send({ Price50to100 : bookDetails})
}
module.exports.PriceBet50_100 = PriceBet50_100

