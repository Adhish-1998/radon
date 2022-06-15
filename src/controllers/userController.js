//const userModel = require("../models/userModel")
const UserModel= require("../models/userModel")



const createUser= async function (req, res) {
    let userData = req.body
    let savedUser = await UserModel.create(userData)
   res.send({User : savedUser})
}

module.exports.createUser= createUser
