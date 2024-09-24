import React, { useEffect } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { useAuth } from '../store/auth' ;
import { IoMdContact  } from "react-icons/io";
import { FaUser } from "react-icons/fa";


function AdminLayout() {
    // const {users} =  useAuth() ;

    // useEffect( () => {
    //     console.log("usecd", users);
        
    //     // getAllUsers();
    // }, [])
    
  return (
 <>
  <header>
   <div className="container">       
        <nav>
            <ul>
                <li> 
                    <NavLink to="/admin/users"><FaUser/>Users</NavLink>
                </li>
                <li>
                <NavLink to="/admin/contacts"><IoMdContact/>Contacts</NavLink>
                </li>                       
            </ul>
        </nav>        
    </div> 
    </header>
 <Outlet/>
 </>
  )
}

export default AdminLayout