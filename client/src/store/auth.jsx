import {React ,createContext, useContext, useEffect, useState} from "react";

export const AuthContext = createContext() ;

export const AuthProvider =({children}) => {
    const [token ,setToken] = useState(localStorage.getItem("token"));
    const [user ,setUser] = useState("");
    const [services , setServices] = useState([]);
    let isLoggedin =  !!token  ;

    
    const storeTokenLocalstorage= (tokenValue) => {
        return localStorage.setItem("token" ,tokenValue) ;
    }  

  
    const logoutUser = () => {
        setToken("") ;
       return  localStorage.removeItem("token") ;
    }

    //  userData from backend get 
    const userAuthentication = async () => {
       try {
        const response =await  fetch('http://localhost:5000/api/auth/user' , {
            method :"GET",
            headers : {
                Authorization : `Bearer ${token}`
            },
        });

        if(response.ok){
            const data = await  response.json() ;
           
            
            setUser(data.userData);
        }
       } catch (error) {
            console.error("Error while fetching data ")
       }
    }
    

    // -----------------------------------------------------------------------------------------Services GetServices ----------------------

    const getServices = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/data/services', {
        method: "GET",
  
        });
  console.log(response);
  
        if(response){
          const data = await response.json() ;
          console.log("data" , data.response);
          
           setServices(data.response)
        }
      } catch (error) {
        console.log(`services frontend error ${error}`);
        
      }
    }
  
    // -----------------------------------------------------------------------------------------Services End ----------------------


    useEffect(() => {
        userAuthentication()
    } ,[])

    useEffect( () => {
        getServices();
      },[])

    return<AuthContext.Provider value={{storeTokenLocalstorage ,isLoggedin ,logoutUser ,user ,services}}>
        {children}
    </AuthContext.Provider>
}

//customHook   provider to where need 

export const useAuth =() => {
    return useContext(AuthContext)
}