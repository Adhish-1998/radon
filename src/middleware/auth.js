const jwt = require('jsonwebtoken')
let decodedToken

const authenticate = function(req, res, next) {
    try{
    let token = req.headers["x-Auth-token"];
    if(!token) token = req.headers["x-auth-token"];
    if(!token) return res.status(400).send({ status: false, msg: "token must be present" }); 
    decodedToken = jwt.verify(token, "functionup-radon");
    if(!decodedToken) return res.status(500).send({ status: false, msg: "token is invalid" });
    next()
    }catch(error){
        res.send({Msg : "Error"})
    }
}


const authorise = function(req, res, next) {
    try{
    let userToBeModified = req.params.userId
    let userLoggedIn = decodedToken.userId
    if(userToBeModified != userLoggedIn) return res.status(401).send({status : false, msg: 'Unauthorized Access'})
    next()
    }catch(error){
    res.send({Msg : "Error"})
} 
}


module.exports.authenticate = authenticate
module.exports.authorise = authorise