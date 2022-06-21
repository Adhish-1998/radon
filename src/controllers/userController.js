const axios = require('axios')


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
  console.log("End Line")
}

module.exports.createMeme= createMeme


let weatherOfCity = async function (req, res) {
    try {
        let cities =  ["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let cityTemps = []
        for( let city of cities){
        //console.log(`query params are: ${districtId} ${date}`)
        var options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5ae280226f51017d42d9a5d3f8f437bc`
        }
         let result = await axios(options)
         cityTemps.push({City : city, Temperature : result.data.main.temp})
        }
     
        //console.log(result.data)
        cityTemps = cityTemps.sort(function(a,b){ return a.Temperature - b.Temperature})
        res.status(200).send({ msg: cityTemps })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

module.exports.weatherOfCity = weatherOfCity
