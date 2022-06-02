const express = require('express');
const externalModule = require('./logger')
const lodash = require('lodash');
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('The constant in logger route has a value '+externalModule.endpoint)
    console.log('The current batch is '+externalModule.batch)
    externalModule.log()
    res.send('My first ever api!')
});
router.get('/hello', function(req, res){
// assignment 4(a)
const month = ["january","february","march","april","may","june","july","august","september","october","novembe","december"];
console.log(lodash.chunk(month,3));
//assignment 4(b)
const numb = [1,3,5,7,9,11,13,15,17,19];
console.log(lodash.tail(numb))

//assignment 4(c)
const a =[1,1,3,4,5,4];
const b= [3,3,4,6,3,6];
const c= [9,8,9,7,6,5];
const d= [1,5,6,4,5,6];
const e= [3,4,2,5,7,4];
console.log(lodash.union([a,b,c,d,e]));

const  movieGenre= [["horror","The Shining"],["drama","Titanic"],["thriller" , "Shutter Island"],["fantasy","Pans Labyrinth"]]
console.log(lodash.fromPairs(movieGenre));

module.exports = router;
});
router.get('/test-me1', function (req, res) {
    res.send('My second ever api!')
});

router.get('/test-me2', function (req, res) {
    res.send('My third api!')
});

router.get('/test-me3', function (req, res) {
    res.send('My 4th api!')
});

router.get('/test-me4', function (req, res) {
    res.send('My last api!')
});

module.exports = router;
// addin