import { createContext, useContext, useState,useEffect } from "react";

  export const AuthContext=createContext();

     export const AuthProvider=({children})=>{
        const [token,settoken]=useState(localStorage.getItem("token"))
        const [user, setUser] = useState("");
        const [services,setservices]=useState("");
         // function to check the user Authentication or not
  const userAuthentication = async () => {
    try {
      const response = await fetch("http://localhost:4001/api/auth/userdetails", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
            console.log("data after user authentication",data)
             console.log("can we find that",data.userData)
        // our main goal is to get the user data 👇
        setUser(data.userData);
      } else {
        console.error("Error fetching user data");
      }
    } catch (error) {
      console.log(error);
    }
  };
     // fetch services information 
      const getserviceinfo=async ()=>{
          try{
             const response= await fetch("http://localhost:4001/api/data-services-provide/services",{
               method:"GET"
             })
                   if(response.ok){
                     const servicedata=await response.json();
                      
                       console.log("service data after response ",servicedata)
                         console.log("can we find that",servicedata.data)
                        setservices(servicedata.data)
                   }else{
                      console.log("response error from service fetch data")
                   }
          }catch(error){
             console.log(`getserviceinfo error ${error}`)
          }
      }

  useEffect(() => {
    getserviceinfo()
    userAuthentication();
  }, []);

        

      
          const storetokeninLS=(servertoken)=>{
                   settoken(servertoken)
                 return  localStorage.setItem('token',servertoken)
          }
           const  LogoutUser=()=>{
            settoken("");
            return localStorage.removeItem("token");
           }
           let isLoggedIn = !!token;
           console.log("token", token);
           console.log("isLoggedin ", isLoggedIn);
           
      
           return  <AuthContext.Provider value={{storetokeninLS,LogoutUser,isLoggedIn,user,services}}>
                {children}
             </AuthContext.Provider>
     }

     export const useAuth = () => {
        const authContextValue = useContext(AuthContext);
        if (!authContextValue) {
          throw new Error("useAuth used outside of the Provider");
        }
        return authContextValue;
      };