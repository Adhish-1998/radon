const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId
const orderSchema = new mongoose.Schema( {

	userId: {
        type: ObjectId,
        ref:"ProductUser"
    },
	productId: {
        type: ObjectId,
        ref:"product"
    },
	amount: Number,
	isFreeAppUser: Boolean, 
	date: String

}, { timestamps: true });


module.exports = mongoose.model('Order', bookSchema) //orders
