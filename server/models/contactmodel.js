const {Schema,model}=require("mongoose");

   const contactschema=new Schema({
       username:{
            type:String,
            required:false
       },
       email:{
        type:String,
        required:false
       },
       message:{
        type:String,
        required:false
       }
   })
       // create model
        const Contact=new model("Contact",contactschema);

        module.exports=Contact