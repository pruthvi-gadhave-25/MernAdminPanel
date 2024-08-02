import React from 'react'
import   {NavLink } from "react-router-dom" ;
import "./Navbar.css"

function Navbar() {
  return (
    <header className='d-flex '>
       <div className='container'>
        <div className="logo-brand">
           <h2>Mern App</h2>
        </div>
       
         <nav>
         <ul className=''>
            <li className=''>
              <NavLink to='/' >Home</NavLink>
            </li>
            <li  className=''>
              <NavLink to='/about' >About</NavLink>
            </li>
            <li  className=''>
              <NavLink to='/service' >Service</NavLink>
            </li>
            <li  className=''>
              <NavLink to='/login' >Login</NavLink>
            </li>
            <li  className=''>
              <NavLink to='/register' >Register</NavLink>
            </li>
          </ul>
         </nav>
         </div> 
       
    </header>
  )
}

export default Navbar ;