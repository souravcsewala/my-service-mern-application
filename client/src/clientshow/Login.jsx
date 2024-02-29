import { useState } from "react";
import loginimage from "../images/login.webp"
import {  useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";

import {  toast } from 'react-toastify';

 const Login = () => {
     const navigate=useNavigate()
     const {storetokeninLS}=useAuth();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  

  // let handle the input field value
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };
  const handelsubmit=async (e)=>{
    e.preventDefault();
    
    try{
        const response=await fetch("http://localhost:4001/api/auth/login",{
          method:"POST",
          headers:{
           "Content-type":"application/json"
          },
          body:JSON.stringify(user),

        })   
        console.log("acknowlegment after login",response)
        const responsedata=await response.json()
        console.log('usertoken after login',responsedata.usertoken)
             console.log("data after login",responsedata)
               if(response.ok){
                const responsedata=await response.json()
                      console.log('usertoken after login',responsedata.usertoken)
                         storetokeninLS(responsedata.usertoken)
                  alert("login succesfully");
                  navigate("/")
               }else{
                 toast.error(responsedata.extraDetails ? responsedata.extraDetails : responsedata.message)
               }
    }catch(error){
       console.log("login page error:",error)
    }
}

  return (
    <>
      
          <div className="section-registration">
            <div className="container-login grid grid-two-cols">
              <div className="registration-image reg-img">
                <img 
                  src={loginimage}
                  alt="login-image"
                  height="300px"
                  width="300px"
                  className="loginimage"
                />
              </div>
               
              <div className="section-form">
                <h2 className="main-heading mb-3">Login form</h2>
                <br /> <br/>
                <form onSubmit={handelsubmit}>
                  <div>
                    <label htmlFor="email">email</label>
                    <br/><br/>
                    <input
                      type="text"
                      name="email"
                      value={user.email}
                      onChange={handleInput}
                      placeholder="email"
                    />
                  </div>

                  <div>
                    <label htmlFor="password">password</label>
                    <br/><br/>
                    <input
                      type="password"
                      name="password"
                      value={user.password}
                      onChange={handleInput}
                      placeholder="password"
                    />
                  </div>
                  <br />
                  <button type="submit" className="btn login-btn btn-submit">
                    login Now
                  </button>
                </form>
              </div>
            </div>
          </div>
          
       
    </>
  );
};       export default Login