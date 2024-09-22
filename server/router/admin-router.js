const express = require('express');
const adminController = require('../controllers/admin-controller');
const authMiddleware = require("../middlewares/auth-middleware");
const adminMiddleWare = require('../middlewares/admin-middleware');
const router = express.Router() ;

router.route("/users").get(authMiddleware , adminMiddleWare, adminController.getAllUsers) //pass to controller 
router.route("/contacts").get( authMiddleware ,adminMiddleWare ,adminController.getAllContacts) //pass to controller 
router.route("/users/delete/:id").delete( authMiddleware ,adminMiddleWare ,adminController.deleteUserById) //pass to controller 
router.route("/users/:id").get( authMiddleware ,adminMiddleWare ,adminController.getUserById) //pass to controller 
router.route("/users/update/:id").patch( authMiddleware ,adminMiddleWare ,adminController.updateUserById) //pass to controller 

module.exports = router ;