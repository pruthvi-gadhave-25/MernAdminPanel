//controlleres are -->>>  process incoming request  
//sepertates concerns / use     

const User = require("../models/user-model");
const bcrypt = require("bcrypt") ;


const home = async (req ,res ) => {
    try{
        res.status(200).json({message : req.body}) 
    }
    catch(error){
        res.status(500).json("Internal sever Error ") ;
    }
} ;


// --------Register---------------------------
const register = async (req ,res ) => {
    try{    
        const { username , email ,phone ,password } = req.body ;
        const isUserExists = await  User.findOne({email});

        if(isUserExists){
            return res.status(400).json({ msg : "Email already exists"}) ;
        }
      const userCreated  =  await User.create({ username , email ,phone ,password}) ;
        res
        .status(200)
        .json({ msg :"Register Successfull ", token : await userCreated.generateToken()}) ;  
     }
    catch(error){ 
        res.status(500).json("Internal server Error ") ;
    }
} ;


///Login---------------------------------
const login = async (req ,res ) => {
    try{    
        const { email , password } = req.body ;
        const userExists = await  User.findOne({email});

        if(!userExists){
            return res.status(400).json({ msg : " Invalid Credentials "}) ;
        }
    
       const user =  await userExists.comparePassword(password) ;

       if(user){
        res.status(200).json({
             msg :"Login Successfull ", 
            token : await userExists.generateToken() ,
            userId : userExists._id.toString(),
        }) ; 
       }else{
        res.status(401).json({
             msg :"Invaid Email or Password  ",  
        }) ;
       }
     }
    catch(error){ 
        res.status(500).json(   "Internal server Error " ) ;
    }
} ;

///get user details ---------------------------------

const user = async (req ,res) => {

    try {
         const userData = req.user ;
        console.log( "from controller data of User ",userData);
        
        res.status(200).json({ userData});

    } catch (error) {
        console.log("error occured", error);
        
    }
}
module.exports = {home , register ,login ,user} ;

