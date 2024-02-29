   const {model,Schema}=require("mongoose");

     const Serviceschema=new Schema({
        service:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:true
        },
        price:{
            type:String,
            required:true
        },
        provider:{
            type:String,
            required:true
        }
     })
        const Servicemodel=new model("Service",Serviceschema);

        module.exports=Servicemodel;