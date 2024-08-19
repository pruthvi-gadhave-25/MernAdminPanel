import React, { useState } from 'react'
import { useAuth } from '../store/auth'

function Services() {

  const {user ,isLoggedin} = useAuth() ;
  
  const [serviceUser, setServiceUser] = useState({
    username: "",
    email: "",
    message: "",
  });
  return (
   <>
     {
     isLoggedin ? (<h2>Hii  {user.username}</h2>): (<h2>Hii</h2>)
     }
     </>
  )
}

export default Services