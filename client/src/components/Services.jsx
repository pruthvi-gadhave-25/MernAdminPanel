import React, { useEffect, useState } from 'react'
import { useAuth } from '../store/auth'
import "./Service.css"

function Services() {

  const {user ,isLoggedin ,services} = useAuth() ;   
 
  const [serviceUser, setServiceUser] = useState({ 
    username: "",
    email: "",
    message: "",
  });

  
  return (
   <>
     {/* { isLoggedin ? (<h2>Hii  {user.username}</h2>): (<h2>Hii</h2>)} */}

 

    <div className="card-container">
     {
      services.map( (currentService , index) => {
        const {service,description,price, provider } = currentService 
        return (
          <div className="card" key={index  }>
          <h3>{service}</h3>
          <p>{description}</p>
          <p className="price">{price}</p>
          <p className="provider">Provider:{provider}</p>
      </div>
        )
      
      })
     }
    </div>
     </>
  )
}

export default Services ;


// description
// : 
// "Building mobile applications for iOS and Android platforms"
// price
// : 
// "$600"
// provider
// : 
// "AppMasters"
// service
// : 
// "Mobile App Development"