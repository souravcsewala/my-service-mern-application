   const servicemodel=require("../models/servicemodel");

       const service=async (req,res)=>{
           try{
               const response= await servicemodel.find();
                  if(!response || response.length === 0){
                     return res.status(401).json({msg:"service server error"})
                  }
                      console.log("data from service",response)
              return res.status(201).json({data:response}) 
                  

                  
           }catch(error){
               console.log(`service error from server: ${error}`)
           }
       }

          module.exports=service;