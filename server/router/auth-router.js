
const express = require("express") ;
const authcontrollers = require("../controllers/auth-controller");
const {signupSchema ,signinSchema} = require("../validators/auth-validator");
const validate = require("../middlewares/validate-middleware");
const bodyParser = require("body-parser");
const { Schema } = require("zod");
const router = express.Router() ;


router.route("/home").get(authcontrollers.home) ;


// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

//previous logic seperated in controllers 
// router.get("/" ,(req ,res) => {
//      res.status(200)
//      .send("welcome to my world   using router ") ;

// });


//  %---------------% 
//  Registrationx
//  %---------------%



 
router.route("/register").post( validate(signupSchema) , authcontrollers.register) ; 
router.route("/login").post( validate(signinSchema) , authcontrollers.login) ; 



module.exports = router ;