const express = require('express');
const lodash = require('lodash');
const externalModule = require('./logger')

const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('The constant in logger route has a value '+externalModule.endpoint)
    console.log('The current batch is '+externalModule.batch)
    externalModule.log()
    res.send('My first ever api!')
});

router.get('/hello', function (req, res) {
    //Chunk Function
    const month=["Januray", 'February', 'March', 'April', 'May', 'June', 'July', "August", 'September', "October", "November", "December"]
    console.log(lodash.chunk(month,3))
    //Tail Function
    const oddNumber = [ 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 ]
    console.log(lodash.tail(oddNumber))
    //Union Function
    const a=[1,3,4,5,3]
    const b=[1,4,3,3,2]
    const c=[2,5,4,1,2]
    const d=[5,4,3,3,3]
    const e=[2,2,1,1,1]
    console.log(lodash.union(a,b,c,d,e))
    //FromPairs Functions
    const movieGenre=[["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]
    console.log(lodash.fromPairs(movieGenre))
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
// adding this comment for no reason