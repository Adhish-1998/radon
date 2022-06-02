const formatter = function()
{
    const str = "    FunctionUp     "
    const str1="functionup"
    const str2= "FUNCTIONUP"
    console.log('functionup  without spaces '+str.trim())
    console.log('functionup to upper case '+str1.toUpperCase())
    console.log('FUNCTIONUP to lower case '+str2.toLowerCase())
}
module.exports.formatter = formatter