let date = new Date()
let printDate = date.getDate()
let printMonth = date.getMonth()

const batchInfo = function(){
    console.log("Radon, Week3 Day3, The topic for today is NodeJs Module System.")
}

module.exports.printDate = printDate
module.exports.printMonth = printMonth
module.exports.getBatchInfo = batchInfo