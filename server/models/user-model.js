const mongoose = require("mongoose" );
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken") ;
const userSchema = new  mongoose.Schema({
    username :{
        type :String ,
        required : true ,
    }
    ,
    email :{
        type :String ,
        required : true ,
    },
    phone :{
        type :String ,
        required : true ,
    },
    password :{
        type :String ,
        required : true ,
    },
    isAdmin : {
        type : Boolean  , 
        required :false ,
    }

}) ;


userSchema.methods.generateToken = async  function(){
        try {

            return jwt.sign({
                userId : this._id.toString() ,
                email : this.email,
                isAdmin : this.isAdmin,
            } ,
            process.env.JWT_SECRET_KEY ,
            {
                expiresIn: "30d" ,
            }
        )
            
        } catch (error) {
            console.log("error" ,error);
        }
}

userSchema.pre("save" , async function( next){
    const user = this ;

    if(!user.isModified("password")){
        console.log("data " , this );
        next() ;
    }

    try {
        const saltRound = await bcrypt.genSalt(10) ;
        const hash_password = await bcrypt.hash(user.password,saltRound) ;
        user.password =hash_password ;
    } catch (error) {
        console.log( "error" , error);
    }

}) 

userSchema.methods.comparePassword = async function( password) {
    return await bcrypt.compare(password , this.password)  
}


const User =  new mongoose.model("User" ,userSchema) ;

module.exports = User ;