const express = require('express');
const Service = require('../models/service-model');
const services = require('../controllers/service-controller');
const router = express.Router() ;

router.route("/services").get(services);


module.exports = router ;
