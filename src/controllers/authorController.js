const AuthorModel= require("../models/authorModel")
const publisherModel= require("../models/publisherModel")


const createAuthor= async function (req, res) {
    let author = req.body
    let authorCreated = await AuthorModel.create(author)
    res.send({data: authorCreated})
}

const getAuthorsData= async function (req, res) {
    let authors = await AuthorModel.find()
    res.send({data: authors})
}

const createPublisher= async function (req, res) {
    let publisher = req.body
    let publisherCreated = await publisherModel.create(publisher)
    res.send({data: publisherCreated})
}


module.exports.createPublisher= createPublisher
module.exports.createAuthor= createAuthor
module.exports.getAuthorsData= getAuthorsData