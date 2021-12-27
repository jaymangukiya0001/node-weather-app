const request = require('request')
const geocode=(address,callback)=>{
    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoiamF5bWFuZ3VraXlhMDAwMSIsImEiOiJja3hpaG1tZXUxZGVvMnducDYwdWFlMHN4In0.hQ5XVZ5HyKKpSzRQfqOxLA&limit=1'
    request({url:url,json:true},(err,res)=>{
        if(err){
            callback('Unable to connect weather services',undefined)
        }
        else if(res.body.features.length===0){
            callback('Could not find location',undefined)
        }
        else{
            callback(undefined,{
                latitude:res.body.features[0].center[1],
                longitude:res.body.features[0].center[1],
                location:res.body.features[0].place_name
            })
        }
    })
}   
module.exports=geocode