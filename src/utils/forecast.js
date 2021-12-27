const request = require('request')
//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

const forecast=(lat,log,callback)=>{
    const url="http://api.weatherstack.com/current?access_key=ed0a46d0fdf017eb0e943fc76a5e686e&query="+log+","+lat
    
    request({url:url,json:true},(error,res)=>{
        if(error){
            callback("Unable to connect services")
        }
        else if(res.body.error){
            callback("Unable to find the location try to find the other")
        }
        else{
            callback(undefined,{
                data:`temperature is ${res.body.current.temperature} but it feel like ${res.body.current.feelslike}`,
            })
        }
    })
}


module.exports=forecast