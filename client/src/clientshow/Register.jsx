import { useState } from 'react';
import regImage from '../images/reg.jpg';
import {  useNavigate } from "react-router-dom";
import {  toast } from 'react-toastify';



const Register=()=>{
   const navigate = useNavigate();
   
     const [user,setuser]=useState({
         username:"",
         email:"",
         phone:"",
         password:""

     })
     const handelinput=(e)=>{
          console.log(e)
      let name=e.target.name;
      let value=e.target.value;
      setuser({
         ...user,
         [name]:value
      })
     }
     const handelsubmit= async (e)=>{
          e.preventDefault();
          
          try{
             const responsefromserver=await fetch("http://localhost:4001/api/auth/register",{
                 method:"POST",
                 headers:{
                  "Content-type":"application/json"
                 },
                 body:JSON.stringify(user),

             })
               console.log("acknowlegment after registration:",responsefromserver)
               const responsedata=await responsefromserver.json();
               console.log("after registration we get response",responsedata)
                  if(responsefromserver.ok){
                      setuser({ name:"",
                      email:"",
                      phone:"",
                      password:""})
                     
                     //  storetokeninLS(responsedata.usertoken)
                      alert("registration successful");
                      navigate("/login")
                     
                      
                  }else{
                      toast.error(responsedata.extraDetails ? responsedata.extraDetails : responsedata.message
                        )
                  }

          }catch(error){
               console.log("register page error:",error)
          }
     }
    return(
       <>
             <section>
               <main>
                  <div className="section-registration">
                     <div className="contrainer grid grid-two-cols">
                            <div className="registration-image">
                              <img src={regImage} className='reg-image' alt="registration-image" width="400" height="500"/>
                            </div>
                            <div className="registration-form">
                              <h2 className='main-heading mb-3'>registration form</h2>
                                <br/>
                                <form onSubmit={handelsubmit}>
                                 <div>
                                    <label htmlFor='user'>
                                         username
                                    </label>
                                    <input type='text' name="username" 
                                    placeholder='enter your name'
                                     value={user.username}
                                     onChange={handelinput}
                                      id="name"
                                       required
                                        autoComplete='off'/>
                                 </div>
                                 <div>
                                    <label htmlFor='email'>
                                         email
                                    </label>
                                    <input type='email' name="email" 
                                    placeholder='enter your email' 
                                    value={user.email}
                                    onChange={handelinput}
                                    id="email" required autoComplete='off'/>
                                 </div>
                                 <div>
                                    <label htmlFor='phone'>
                                         phone
                                    </label>
                                    <input type='number' name="phone" 
                                    placeholder='enter your phone number' 
                                    value={user.phone}
                                    onChange={handelinput}
                                    id="phone" required autoComplete='off'/>
                                 </div>
                                 <div>
                                 <div>
                                    <label htmlFor='password'>
                                         password
                                    </label>
                                    <input type='password'
                                     name="password" 
                                     value={user.password}
                                     onChange={handelinput}
                                    placeholder='give password' id="password" required autoComplete='off'/>
                                 </div>
                                 </div>
                                 <br/>
                                 <button type='submit' className="btn btn-submit">Register now</button>
                                </form>
                            </div>
                     </div>


                     
                  </div>
               </main>
             </section>
       </>
    )
}
export default Register;