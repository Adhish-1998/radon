const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    "Book Name": {
        type : String,
        required : true,
        unique : true
    },
     Price : {
         IndianPrice : String,
         EuropePrice : String
     },
     Year : {
         type : Number,
         default : 2021
     },
     tags: [String],
    "Author Name": String, 
    "Total Pages": Number,
    "Stock Availabe": Boolean
}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema) //books