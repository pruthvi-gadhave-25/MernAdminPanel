const {  z } = require("zod") ;


const signinSchema = z.object( {

  
    email  : z 
     .string({required_error : "Email is required " })
    .trim()
    .email({message : "Invalid  email Address"})
    .min(3, { message : "Email at least 3 characters must be required"})
    .max(255 , { message : "Characters must not more than 255"})  ,

    password : z
    .string({required_error : "Passowrd  is required " })
    .min(7, { message : "Password at least 7 characters must be required"})
    .max(1024 , { message : "Characters must not more than 1024"})  ,
}) ;


const signupSchema = signinSchema.extend( {

    username  : z
    .string({required_error : "Name is required " })
    .trim()
    .min(3, { message : "At least 3 characters must be required"})
    .max(255 , { message : "Characters must not more than 255"})  ,

    

    phone : z 
    .string({required_error : "Phone is required " })
    .trim()
    
    .min(10, { message : "Phone number  at least 10 characters must be required"})
    .max(20 , { message : "Characters must not more than 20"})  ,

   
}) ;

// const loginSchema = z.object( {

  
//     email  : z 
//      .string({required_error : "Email is required " })
//     .trim()
//     .email({message : "Invalid  email Address"})
//     .min(3, { message : "Email at least 3 characters must be required"})
//     .max(255 , { message : "Characters must not more than 255"})  ,

//     password : z
//     .string({required_error : "Passowrd  is required " })
//     .min(7, { message : "Password at least 7 characters must be required"})
//     .max(1024 , { message : "Characters must not more than 1024"})  ,
// }) ;




module.exports = {signupSchema ,signinSchema} ;