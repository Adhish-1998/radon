const UserModel= require("../models/userModel")


const createBook = async function(req, res){
    let data = req.body
    let savedData = await UserModel.create(data) // Adding the Data in DataBase
    res.send({ msg : savedData })
}

const getBooksData = async function(req, res){
    let allBooks = await UserModel.find() // Fetch all The Data
    res.send({ msg : allBooks})
}

module.exports.createBook = createBook
module.exports.getBooksData = getBooksData