import {React ,createContext, useContext, useEffect, useState} from "react";

export const AuthContext = createContext() ;

export const AuthProvider =({children}) => {
    const [token ,setToken] = useState(localStorage.getItem("token"));
    const [user ,setUser] = useState("");
    const [users ,setUsers] = useState([])
    const [services , setServices] = useState([]);
    const authorizationToken  = `Bearer ${token}` ;
    let isLoggedin =  !!token  ;

    
    const storeTokenLocalstorage= (tokenValue) => {
      setToken(tokenValue);
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
  // console.log(response);
  
        if(response){
          const data = await response.json() ;
          // console.log("data" , data.response);getting una
          
           setServices(data.response)
        }
      } catch (error) {
        console.log(`services frontend error ${error}`);  
        
      }
    }
  
    // -----------------------------------------------------------------------------------------Services End ----------------------

//  ----------------------------------------------Users --------------------------------------------------------
const getUsers = async () => {
  try {
    const response = await fetch('http://localhost:5000/api/admin/users', {
    method: "GET",
   
    });
console.log(response); 

    if(response){
      const data = await response.json() ;
      console.log("data" , data.response);
      
        setUsers(data.response)
    }
  } catch (error) {
    console.log(`users frontend error ${error}`);
    
  }
}

//  ----------------------------------------------Users  End--------------------------------------------------------
    useEffect(() => {
        userAuthentication()
    } ,[])

    useEffect( () => {
        getServices();
      },[])
    
      useEffect( () => {
        getUsers()
      },[])
    return<AuthContext.Provider value={{storeTokenLocalstorage ,isLoggedin ,logoutUser ,user ,services ,authorizationToken}}>
        {children}
    </AuthContext.Provider>
}

//customHook   provider to where need 

export const useAuth =() => {
    return useContext(AuthContext)
}