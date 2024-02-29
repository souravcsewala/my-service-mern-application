const express = require('express');
const router = express.Router();
const {home,register,login,userdetails}=require("../controllers/auth-controllers")
const userschema=require("../validators/auth-validator")
const validate=require("../middliwares/validate-middileware")
const authmiddileware=require("../middliwares/auth-middileware")
//first method
// router.get('/', (req, res) => {
//     res.status(200).send("Hello this side from using route");
// });
// second method 
 router.route("/").get(home)
 router.route("/register").post(validate(userschema.signupschema),register)
 router.route("/login").post(validate(userschema.loginschema),login)
 router.route("/userdetails").get(authmiddileware,userdetails)
module.exports = router;
