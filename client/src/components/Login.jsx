import React, { useState } from 'react'
import "./Login.css" ;

import {Navigate, useNavigate} from "react-router-dom" ;
import { useAuth } from '../store/auth';
import { toast } from 'react-toastify';

 function Login() {

  const navigate = useNavigate() ;
  const {storeTokenLocalstorage} =useAuth() ;

  const [user, setUser] = useState({
    email: "",  
    password: "",
  });

  function handleInput(e) {
    const {name ,value} = e.target ;
   
      setUser({
        ...user ,
        [name] : value 
      } ,
    );
  }




  ///handlesubmit 
  async function handleSubmit(e){

  e.preventDefault();

    console.log(user);
    e.preventDefault();
 try {

  const response = await fetch('http://localhost:5000/api/auth/login', {
    method: "POST",
    body: JSON.stringify(user),
    headers: {"Content-Type" : "application/json" },
  });
    
  const res_data = await response.json()
  // console.log(res_data);
  
  // console.log("from login");

  if(response.ok){   
   
     await storeTokenLocalstorage(res_data.token);

      setUser({
        email: "" ,  password :""  ,
      }) ;
    
      navigate("/") ;
      toast.success("Loggedin  Succfully")
    
  }
  else{
   //throw new Error("Error Occured in Login "  , {cause : response});
   toast.error(res_data.error.extraDetails ? res_data.error.extraDetails : res_data.error.message );
  
  }
  
 } catch (error) {
    console.log("error registrtion" , error);
    
 } 
  }
  return (
    <section>
      <main>
        <div className='section-login'>
          <div className='container grid grid-two-cols'>
            <div className="login-image">
              <img src="/images/login-image.png" alt="registerApp" width={600} height={400} />
            </div>
            <div className='login-form'>
              <h1 className='main-heading mb-3'>
                Login Form
              </h1>
              <br />
              <form onSubmit={handleSubmit} className='form'>
                <div>
                  <label htmlFor='email'>Email</label>
                  <input type="text" name="email" placeholder='Enter your Email' id="email" required autoComplete='off' value={user.email} onChange={handleInput} />
                </div>
                <div>
                  <label htmlFor='password'>Password</label>
                  <input type="password" name="password" placeholder='Enter your Password' id="password" required autoComplete='off' value={user.password} onChange={handleInput} />
                </div>
                <br />
                <button type='submit' className='btn btn-submit'>Login Now </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </section>
  )
}

export default Login