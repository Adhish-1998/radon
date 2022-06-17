const axios = require('axios')
const UserModel= require("../models/userModel")




const basicCode= async function(req, res) {
    let tokenDataInHeaders= req.headers.token
    console.log(tokenDataInHeaders)

    console.log( "HEADER DATA ABOVE")
    console.log( "hey man, congrats you have reached the Handler")
    res.send({ msg: "This is coming from controller (handler)"})
    }


const createUser= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}



let createMeme = async function (req, res) {
  try {
      let templateid = req.query.template_id
      let text0 = req.query.text0
      let  text1 = req.query.text1
      let username =req.query.username
      let password =req.query.password
      console.log(username, password)
      //console.log(`body is : ${bla} `)
      var options = {
          method: "post",
          url: `https://api.imgflip.com/caption_image?template_id=${templateid}&text0=${text0}&text1=${text1}&username=${username}&password=${password}`
      }

      let result = await axios(options)
      //console.log(result.data)
      res.status(200).send({ msg: result.data })
  }
  catch (err) {
      console.log(err)
      res.status(500).send({ msg: err.message })
  }
}


module.exports.createUser= createUser
module.exports.getUsersData= getUsersData
module.exports.basicCode= basicCode
module.exports.createMeme= createMeme