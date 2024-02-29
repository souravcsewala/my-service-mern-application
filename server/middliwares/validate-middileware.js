

     const validate=(schema)=>async (req,res,next)=>{
           try{
            const parsebody= await schema.parseAsync(req.body)
            req.body=parsebody;
            next()
           }catch(errors){
                 const status=422;
                const extraDetails=errors.issues[0].message;
                const message="input data poperly"
            //  res.status(400).json({message:failedmsg})
            const error={
                  extraDetails,
                  message,
                  status
            }
             console.log(error)
             next(error)
           }
     }
           module.exports=validate;