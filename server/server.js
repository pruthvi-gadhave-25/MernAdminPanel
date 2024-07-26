require("dotenv").config() ;
const express = require("express") ;
const router = require("./router/auth-router");
const connectDb = require("./utils/db");

const app = express() ;
app.use(express.json()) ;   ///actin g as midddeleware parsees incoming requst with json payloads 

app.use("/api/auth" , router) ;
app.get("/" ,(req ,res) => {
     res.status(200).send("welcome to my world ") ;
});
app.get("/register" ,(req ,res) => {
    res.status(200).send("welcome to registration ") ;

});



// if connection succesfull then listen on port 
connectDb().then( () => {

const PORT = 5000 ;
app.listen( PORT ,()=> {
    console.log(`server is running on port : ${PORT}`);
})
    
})