const express = require('express');
const router = express.Router();
const serviceController=require("../controllers/service-controllers")

router.route("/services").get(serviceController)
module.exports = router;