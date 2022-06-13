const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    name: String,
	balance: {
        type: Number,
        default:100
    }, // Default balance at user registration is 100

	address: String,
	age: Number,
 	gender: ["male","femele", "other"],
	isFreeAppUser: Boolean  //(Default false value)
}
, { timestamps: true });

module.exports = mongoose.model('ProductUser', userSchema) //productusers



// String, Number
// Boolean, Object/json, array