
const express = require("express") ;
const authcontrollers = require("../controllers/auth-controller");

const router = express.Router() ;

router.route("/home").get(authcontrollers.home) ;

//previous logic seperated in controllers 
// router.get("/" ,(req ,res) => {
//      res.status(200)
//      .send("welcome to my world   using router ") ;

// });


//  %---------------% 
//  Registration
//  %---------------%


router.route("/register").get(authcontrollers.register) ; 
router.route("/register").post(authcontrollers.register) ; 



module.exports = router ;