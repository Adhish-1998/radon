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
	amount: {
        type: Number,
        default: 0
    },
	isFreeAppUser: Boolean, 
	date: String

}, { timestamps: true });


module.exports = mongoose.model('Order', orderSchema) //orders
