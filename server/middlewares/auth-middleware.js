
const jwt = require("jsonwebtoken");
const { user } = require("../controllers/auth-controller");
const User = require("../models/user-model");


const authMiddleWare = async ( req, res , next) => {

    const token = req.header("Authorization")

    if(!token){
    return res.status(401).json({message : "Unauthorized HTTP ,Token not provided"});

    }
    const jwtToken = token.replace("Bearer" ,"").trim() 
    try {
        const isVerified = jwt.verify(jwtToken , process.env.JWT_SECRET_KEY)       
        const userData = await User.findOne({email : isVerified.email}).select({password : 0 ,})
     
        req.user = userData ;
        req.token = token ;
        req.userId = userData._id     
    next() ;
    } catch (error) {
    return res.status(401).json({msg : "unauthorized token "});        
    }    
    // next() ; //    dont call it again 
}

module.exports = authMiddleWare ;