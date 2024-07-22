const express = require("express") ;

const app = express() ;

app.get("/" ,(req ,res) => {
     res.status(200).send("welcome to my world ") ;

});
app.get("/register" ,(req ,res) => {
    res.status(200).send("welcome to registration ") ;

});

const PORT = 5000 ;
app.listen( PORT ,()=> {
    console.log(`server is running on port : ${PORT}`);
})