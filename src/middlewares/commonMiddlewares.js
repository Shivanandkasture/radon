const currentTimestamp = require("moment");
const requestIp = require('request-ip');

const mid1 = function ( req, res, next) {
   
   console.log("currentTimestamp :- "+currentTimestamp().format("MM/DD/YYYY hh:mm:ss"));
    
   res.send({curretnDate: currentTimestamp().format("MM/DD/YYYY hh:mm:ss")});

   let LocalIpAddress = requestIp.getClientIp(req);

   console.log("LocalIpAddress :- "+LocalIpAddress);

   let Url = req.originalUrl

   console.log("URL :- "+ Url);
   

    next()
}




module.exports.mid1= mid1

