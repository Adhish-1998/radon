
const checkFreeAppUser = function ( req, res, next) {
    let freeAppUser= req.headers["isFreeAppUser"]
    if(!freeAppUser) freeAppUser = req.headers["isfreeappuser"]
    if(!freeAppUser) {res.send("isFreeAppUser is Missing !!!")}
    next()  
}

module.exports.checkFreeAppUser = checkFreeAppUser

