const mongoose=require("mongoose");
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")

const userschema=new mongoose.Schema({
    username:{
        type:String,
        require:true,

    },
    email:{
        type:String,
        require:true
    },phone:{
        type:Number,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    isAdmain:{
        type:Boolean,
        default:false
    }
})
      //hasing the password 2nd way best way 
         userschema.pre("save", async function(next){
                // console.log('pre method returns the whole usr data in this', this)
                  const user= this;
                  if(!user.isModified("password")){
                       next()
                  }else{
                    try{
                         const hashround=await bcrypt.genSalt(10);
                         const hash_password=await bcrypt.hash(user.password,hashround)
                              user.password=hash_password
                    }catch(error){
                         next(error)
                    }
                  }
         })
         // user webtoken
         userschema.methods.generatetoken=async function (){
                      try{
                       return jwt.sign({
                        userid:this._id.toString(),
                        email:this.email,
                        isAdmain:this.isAdmain
                       },
                         process.env.JWT_TOKEN_KEY,{
                            expiresIn:"30d"
                         }
                       )
                      }catch(error){
                        console.error(error)
                      }
         }
     
    // define the model or collection name 
    const User=new mongoose.model("User",userschema);

    module.exports=User;