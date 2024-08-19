import {React ,createContext, useContext, useEffect, useState} from "react";

export const AuthContext = createContext() ;

export const AuthProvider =({children}) => {
    const [token ,setToken] = useState(localStorage.getItem("token"));
    const [user ,setUser] = useState("");

    debugger ;
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


    useEffect(() => {
        userAuthentication()
    } ,[])

    return<AuthContext.Provider value={{storeTokenLocalstorage ,isLoggedin ,logoutUser ,user}}>
        {children}
    </AuthContext.Provider>
}

//customHook   provider to where need 

export const useAuth =() => {
    return useContext(AuthContext)
}