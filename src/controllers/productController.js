const { count } = require("console")
const productModel= require("../models/productModel")

const createProduct= async function (req, res) {
    let product = req.body
    let price = product.price
    if(!price) return res.send( 'Price is Missing !!!')

    let savedProduct= await productModel.create(product)
    res.send({Product: savedProduct})
}

module.exports.createProduct= createProduct
