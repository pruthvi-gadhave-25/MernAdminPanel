const express = require("express") ;
const router = express.Router() ;
const contactController = require("../controllers/contact-controller");
const authMiddleWare = require("../middlewares/auth-middleware");
const adminMiddleWare = require("../middlewares/admin-middleware");


router.route("/contact").post(contactController.contactForm) ;
 router.route("/contacts/:id").get( authMiddleWare ,adminMiddleWare ,contactController.getContactById) //pass to controller 
 router.route("/contacts/delete/:id").delete( authMiddleWare ,adminMiddleWare ,contactController.deleteContactById) //pass to controller 
 router.route("/contacts/update/:id").patch( authMiddleWare ,adminMiddleWare ,contactController.updateContactById) //pass to controller 



module.exports =   router ;