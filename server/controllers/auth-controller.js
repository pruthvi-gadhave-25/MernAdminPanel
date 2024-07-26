//controlleres are -->>>  process incoming request  
//sepertates concerns / use     

const User = require("../models/user-model");

const home = async (req ,res ) => {
    try{
        res.status(200).json({message : req.body}) 
    }
    catch(error){
        res.status(500).json("Internal sever Error ") ;
    }
} ;



const register = async (req ,res ) => {
    try{    
        const { username , email ,phone ,password } = req.body ;
        const isUserExists = await  User.findOne({email});

        if(isUserExists){
            return res.status(400).json({ msg : "Email already exists"}) ;

        }
      const userCreated  =  await User.create({ username , email ,phone ,password}) ;

        res.status(200).json({ msg : userCreated})   ;  
     }
    catch(error){
        res.status(500).json("Internal server Error ") ;
    }
} ;


module.exports = {home , register } ;

