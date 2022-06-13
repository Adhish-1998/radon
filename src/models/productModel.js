const mongoose = require('mongoose');

const productSchema = new mongoose.Schema( {
	name: String,
	category: String,
	price: Number //mandatory property
}, { timestamps: true });

module.exports = mongoose.model('product', productSchema) //products
