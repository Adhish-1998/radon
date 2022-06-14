const jwt = require("jsonwebtoken");
const { rawListeners } = require("../models/userModel");
const userModel = require("../models/userModel");


//Create a user
const createUser = async function (req, res) {
  let data = req.body;
  let savedData = await userModel.create(data);
  res.send({ msg: savedData });
};

module.exports.createUser = createUser;

// User Will be log in
const loginUser = async function (req, res) {
  let userName = req.body.emailId;
  let password = req.body.password;
  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.send({
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
  res.setHeader("x-auth-token", token);
  res.send({ status: true, token: token });
};

module.exports.loginUser = loginUser;

//Get the details of the user
const getUserData = async function (req, res) {
  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails)
    return res.send({ status: false, msg: "No such user exists" });

  res.send({ status: true, data: userDetails });
};

module.exports.getUserData = getUserData;

//It will update user details
const updateUser = async function (req, res) {
  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  if (!user) {
    return res.send("No such user exists");
  }
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, {$set : {age : req.body.age}});
  res.send({ status: updatedUser, data: updatedUser });
};

module.exports.updateUser = updateUser;

//It will show deleted but the data will exist in Database
const deleteUser = async function (req, res){
  
  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  if (!user) {
    return res.send("No such user exists");
  }
  await userModel.findOneAndUpdate({ _id: userId }, {$set: {isDeleted : true}})
  res.send("Your Data is Deleted")
}

module.exports.deleteUser = deleteUser;
