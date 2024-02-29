const mongoose= require("mongoose")

const URI=process.env.mongodburi;

//    mongoose.connect(URI)
const mongodbconnect= async ()=>{
     try{
          await mongoose.connect(URI)
          console.log("connection is ok with database")
     }catch(error){
        console.error("connection failed")
        process.exit(0)
     }
}
   module.exports={mongodbconnect}