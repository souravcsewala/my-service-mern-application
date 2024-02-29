const {z} =require("zod");


     // creating signup object schema 
        const signupschema=z.object({
            username:z.string({required_error:"name is required you have to must fill it"})
            .trim()
            .min(3,{message:"name minimum at least 3 characters"})
            .max(255,{message:"name maximum at 255 characters"}),
            email:z.string({required_error:"email id is required"})
            .trim()
            .email({message:"invalid mail address"})
            .min(3,{message:'email minimum 3 characters'})
            .max(255,{message:"email maximum 255 characters"}),
            phone:z.string({required_error:"phone number is required you have to fill it"})
            .trim()
            .min(10,{message:'phone number should be 10 digits'})
            .max(20,{message:"phone number should be maximum 20 digits"}),
            password:z.string({required_error:"password is required you have to fill it"})
            .trim()
            .min(7,{message:"password minimum at least 7 characters"})
            .max(255,{message:"password maximum at 255 characters "})

        })
         const loginschema=z.object({
            email:z.string({required_error:"email id is required"})
            .trim()
            .email({message:"invalid mail address"})
            .min(3,{message:'email minimum 3 characters'})
            .max(255,{message:"email maximum 255 characters"}),
            password:z.string({required_error:"password is required you have to fill it"})
            .trim()
            .min(7,{message:"password minimum at least 7 characters"})
            .max(255,{message:"password maximum at 255 characters "})

         })
             module.exports={signupschema,loginschema}