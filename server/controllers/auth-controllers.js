  const user=require('../models/usermodel')
  const bcrypt=require("bcrypt")
  const authmiddileware=require("../middliwares/auth-middileware")
// home logic
// auth-controllers.js

const home = async (req, res) => {
    try {
        res.status(200).send("Hello, this side from using route");
    } catch (error) {
        console.log(error);
    }
}    
   // register logic
   const register=async (req,res) =>{
       try{
            const {username,email,phone,password}=req.body;
              const userExist= await user.findOne({email:email})
                   if(userExist){
                    return res.status(400).json({message:"email is already exist"})
                   }
                   // hashing the user password 1st way easy way 
                //    const hashround=10;
                //    const hash_password= await bcrypt.hash(password,hashround)
                    const usercreated=  await user.create({username,email,phone,password})

          res.status(200).json({message:usercreated,msg:"user succesfully created",usertoken:await usercreated.generatetoken(),userid:usercreated._id.toString()})
               
       }catch(error){
        //   res.status(400).send({msg:"page can not found"})
              next(error)
       }
   }
           // user login logic 
          const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const userExistsForLogin = await user.findOne({ email: email });
        if (!userExistsForLogin) {
            return res.status(400).json({ message: "Invalid email ID" });
        }
        const passwordValid = await bcrypt.compare(password, userExistsForLogin.password);
        if (passwordValid) {
            return res.status(200).json({
                msg: "User logged in successfully",
                usertoken:await userExistsForLogin.generatetoken(),
                userid:userExistsForLogin._id.toString()
            });
        } else {
            return res.status(400).json({ message: "Invalid password" });
        }
    } catch (error) {
        console.error("Error during login:", error);
        // return res.status(500).json({ message: "Internal Server Error" });
        next(error)
    }
};
   // userdetails logic

       const userdetails=async(req,res)=>{
             try{
                     const userData=req.user
                    res.status(201).json({userData})
             }catch(error){
                res.status(401).json({msg:"get user details failed"})
             }
       }

module.exports ={home,register,login,userdetails}
