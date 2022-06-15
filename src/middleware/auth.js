const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

let verfiyToken;

const auth = async function (req,res,next) {

    let token = req.headers["x-auth-token"]
   
    if (!token) {
        return res.send({ error: "no token found" })
    }

    verfiyToken = jwt.verify (token, "functionup-radon");
    
    if (!verfiyToken) 
    {
      return res.send({ status: false, msg: "token is invalid" });
    }

        next ()
}

// authorisation 

const authorisation = async function(req,res,next){

  

  let UserId = req.params.userId;

  let User = await userModel.findById(UserId);

  let  userLoginToken = verfiyToken.userId;

  if(UserId != userLoginToken ){
    return res.send({status : false, msg : "user not log in"})
  }
 
  if(!User){
    return res.send({status: false, msg: 'No such user exists'})
  }
  else{
    return res.send({status : true, UserData : User });
  }
}

module.exports.auth = auth;
module.exports.authorisation = authorisation;