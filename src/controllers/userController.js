const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req, res) {
  try{
  let data = req.body;
  let savedData = await userModel.create(data);
  res.status(201).send({ msg: savedData });
  }
  catch(error){
    res.status(400).send({ msg : "Error" })
  }
};

const loginUser = async function (req, res) {
  try{
  let userName = req.body.emailId;
  let password = req.body.password;


  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.status(500).send({
      status: false,
      msg: "username or the password is not corerct",
    });

  let token = jwt.sign(
    {
      userId: user._id.toString(),
      batch: "radon",
      organisation: "FunctionUp",
    },
    "functionup-radon"
  );
  res.status(200).send({ status: true, data: token });
}catch(error){
  res.status(401).send({Msg : "Error"})
}
};

const getUserData = async function (req, res) {
  try{
  let userDetails = await userModel.findById(req.params.userId);
  if (!userDetails)
    return res.status(500).send({ status: false, msg: "No such user exists" });

  res.status(200).send({ status: true, data: userDetails });
}catch(error){
  res.status(403).send({Msg : "Error"})
}
};

const updateUser = async function (req, res) {
  try{
  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  if (!user) {
    return res.status(500).send("No such user exists");
  }

  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData);
  res.status(200).send({ status: updatedUser, data: updatedUser });
 }catch(error){
  res.status(403).send({Msg : "Error"})
}
};

const postMessage = async function (req, res) {
    try{
    let message = req.body.message
    let user = await userModel.findById(req.params.userId)
    if(!user) return res.status(500).send({status: false, msg: 'No such user exists'})
    
    let updatedPosts = user.posts
    //add the message to user's posts
    updatedPosts.push(message)
    let updatedUser = await userModel.findOneAndUpdate({_id: user._id},{posts: updatedPosts}, {new: true}).select({firstName : 1, lastName: 1, posts : 1, _id: 0})

    //return the updated user document
    return res.status(200).send({status: true, data: updatedUser})
    }catch(error){ 
    res.status(403).send({Msg : "Error"})
   }
}

const deleteUser = async function (req, res){
  try{
  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  if (!user) {
    return res.status(500).send("No such user exists");
  }
  await userModel.findOneAndUpdate({ _id: userId }, {$set: {isDeleted : true}}, {new : true})
  res.send({msg : "Your Data is Deleted"})
  }catch(error){
  res.status(403).send({Msg : "Error"})
}
}

module.exports.deleteUser = deleteUser;
module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.postMessage = postMessage
