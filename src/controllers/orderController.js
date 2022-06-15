const { count } = require("console")
const orderModel = require("../models/orderModel")
const userModel = require("../models/userModel")
const productModel = require("../models/productModel")


const createOrder= async function (req, res) {
    
    if(!req.body.userId) res.send({msg: "UserId Requrired !!!"})
    if(!req.body.productId) res.send({msg: "ProductId Required !!!"})

    let userId= await userModel.findById(req.body.userId)
    if(!userId) res.send({msg: "User Does Not Exist !!!"})
    let productId= await productModel.findById(req.body.productId)
    if(!productId) res.send({msg : "Product Does Not Exist !!!"})
    
    let userBalance = await userModel.findOne(userId).select({balance:1, _id:0})
    let productPrice = await productModel.findOne(productId).select({price:1, _id:0})
    //First Scenario is done
    if(userBalance.balance >= productPrice.price){
        userBalance.balance = userBalance.balance - productPrice.price
        await userModel.findOneAndUpdate({_id : userId}, {$set: {balance: userBalance.balance} })
        req.body.amount = productPrice.price
        let savedOrder = await orderModel.create(req.body)
        savedOrder = await savedOrder.populate('userId')
        res.send({msg : savedOrder})
    }
    //res.send({msg : "Arrived in End Line !!!"})
    // let order = req.body
    // let savedOrder = await orderModel.create(order)
    // res.send({msg: savedOrder})

}


module.exports.createOrder = createOrder

