const mongoose = require("mongoose" );
const bcrypt = require('bcrypt');

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


const User =  new mongoose.model("User" ,userSchema) ;

module.exports = User ;