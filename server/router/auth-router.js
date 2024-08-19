
const express = require("express") ;
const authcontrollers = require("../controllers/auth-controller");
const {signupSchema ,signinSchema} = require("../validators/auth-validator");
const validate = require("../middlewares/validate-middleware");
const bodyParser = require("body-parser");
const { Schema } = require("zod");
const authMiddleware = require("../middlewares/auth-middleware");
const contactForm = require("../controllers/contact-controller");
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

router.route("/user").get(authMiddleware , authcontrollers.user) ;  // for get dta user data on route 


module.exports = router ;