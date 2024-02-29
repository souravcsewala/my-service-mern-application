const jwt=require("jsonwebtoken");
const user=require('../models/usermodel');

     const Authmiddileware=async (req,res,next)=>{
        const token = req.header("Authorization");

        if (!token) {
          // If you attempt to use an expired token, you'll receive a "401 Unauthorized HTTP" response.
          return res
            .status(401)
            .json({ message: "Unauthorized HTTP, Token not provided" });
        }
      
             console.log("token from authmiddilkeware",token)
             const jwtToken = token.replace("Bearer", "").trim();
                   console.log("without Bearer",jwtToken);
                   try {
                    // Verifying the token
                    const isVerified = jwt.verify(jwtToken, process.env.JWT_TOKEN_KEY);
                    console.log("after token verifyied we get",isVerified);
                    const userData = await user.findOne({ email: isVerified.email }).select({
                        password: 0,
                      });
                          console.log("after fetch from database with verified token",userData)
                      req.token = token;
                      req.user = userData;
                      req.userID = user._id;
                  
                
                next()
                   }catch(error){
                    res
                    .status(401)
                    .json({ message: "Unauthorized HTTP, Token not provided" });
                   }
             
     }
     module.exports =Authmiddileware;