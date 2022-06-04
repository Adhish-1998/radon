const mongoose = require('mongoose');

 const bookSchema = new mongoose.Schema({
     "Book Name" : String,
     "AuthorName": String,
      Category : String,
      Year : Number
 })

module.exports = mongoose.model('book', bookSchema) //DataBase: books
