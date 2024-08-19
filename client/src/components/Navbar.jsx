import React from 'react'
import { NavLink } from "react-router-dom";
import "./Navbar.css"
import { useAuth } from '../store/auth';

function Navbar() {
  const {isLoggedin} = useAuth();
  
  return (
   
    <header className='d-flex '>
      <div className='container'>
        <div className="logo-brand">
          <h2>Mern App</h2>
        </div>
        {isLoggedin}
        <nav>
          <ul className=''>
            <li className=''>
              <NavLink to='/' >Home</NavLink>
            </li>

            <li className=''>
              <NavLink to='/service' >Service</NavLink>
            </li>
            <li className=''>
              <NavLink to='/contact' >Contact</NavLink>
            </li>

            {
              isLoggedin ?(
                <li className=''>
                  <NavLink to='/logout' >Logout </NavLink>
                </li>)
                :
                (<>
                  <li className=''>
                    <NavLink to='/login' >Login{isLoggedin}</NavLink>
                  </li>

                  <li className=''>
                    <NavLink to='/register' >Register</NavLink>
                  </li>
                </>)
            } 


          </ul>
        </nav>
      </div>

    </header>
  )
}

export default Navbar;