const express = require('express');
const myHelper = require('../util/helper')
const underscore = require('underscore')

const router = express.Router();

router.get('/test-me', function (req, res) {
    myHelper.printDate()
    myHelper.getCurrentMonth()
    myHelper.getCohortData()
    let firstElement = underscore.first(['Sabiha','Akash','Pritesh'])
    console.log('The first element received from underscope function is '+firstElement)
    res.send('My first ever api!')
});

router.get('/hello', function (req, res) {
   
    res.send('Hello there!')
});

//-------Movies-1--------
router.get('/movies', function (req, res) {
    const movies=['Rang de basanti', 'The shining', 'Lord of the rings','Batman begins']
    res.send(movies)
});

router.get('/movies/:indexNumber', function (req, res) {
    const movies=['Rang de basanti', 'The shining', 'Lord of the rings','Batman begins']
    JSON.stringify(req.params)
    let len = movies.length
    let item = movies[req.params.indexNumber]
    if(req.params.indexNumber < len){
        res.send(item)
    }else{
        res.send('Error: There is no movie.')
    }
    
    //console.log(req.params.indexNumber)
});

router.get('/films', function (req, res) {
    const film = [{
           id: 1,
           name: "The Shining"
          },
          {
           id: 2,
           name: "Incendies"
          },
          {
            id: 3,
            name: "Rang de Basanti"
          },
          {
           id: 4,
           name: "Finding Nemo"
          }];
       
       res.send(film)
});

router.get('/film/:filmId', function (req, res) {
    const films = [{
        id: 1,
        name: "The Shining"
       },
       {
        id: 2,
        name: "Incendies"
       },
       {
         id: 3,
         name: "Rang de Basanti"
       },
       {
        id: 4,
        name: "Finding Nemo"
       }
    ]
   // console.log(films[0])
       JSON.stringify(req.params)
       const len = films.length
       const item = films[req.params.filmId]
       if(req.params.filmId < len){
          res.send(item)
       }else{
        res.send('Error: There is no movie.')
      }
      //res.send("adfdfa")
});


router.get('/candidates', function(req, res){
    console.log('Query paramters for this request are '+JSON.stringify(req.query))
    let gender = req.query.gender
    let state = req.query.state
    let district = req.query.district
    console.log('State is '+state)
    console.log('Gender is '+gender)
    console.log('District is '+district)
    let candidates = ['Akash','Suman']
    res.send(candidates)
})

router.get('/candidates/:canidatesName', function(req, res){
    console.log('The request objects is '+ JSON.stringify(req.params))
    console.log('Candidates name is '+req.params.canidatesName)
    res.send('Done')
})


module.exports = router;
// adding this comment for no reason