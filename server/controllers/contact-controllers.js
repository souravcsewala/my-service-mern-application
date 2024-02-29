const contactuser=require('../models/contactmodel')

     const contact= async(req,res)=>{
           const response= req.body;
           try{
           const contactshow= await contactuser.create(response)
            return res.status(200).json({message:"message send succesfully",contactshow})
           }catch(error){
                console.log(error)
              return res.status(500).json({message:"message not deliverd"})
           }
          
     }

        module.exports=contact