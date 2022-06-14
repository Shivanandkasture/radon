const jwt = require("jsonwebtoken");

const auth = async function (req,res,next) {

    let token = req.headers["x-auth-token"]
   
    if (!token) {
        return res.send({ error: "no token found" })
    }

    let verfiyToken = jwt.verify (token, "functionup-radon");
    
    if (!verfiyToken) 
    {
      return res.send({ status: false, msg: "token is invalid" });
    }

        next ()
}

module.exports.auth = auth;