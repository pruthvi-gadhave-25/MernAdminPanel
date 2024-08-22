import React, { useEffect, useState } from 'react'
import { useAuth } from '../store/auth';
import { Link } from 'react-router-dom';

function AdminUsers() {
  
  const {authorizationToken} = useAuth() ;
 const[adminUsers , setAdminUsers] = useState([]) ;

  const getAllUsers  =async () => {
    try {
      const response = await fetch('http://localhost:5000/api/admin/users', {
        method: "GET",
        headers : {
          Authorization:authorizationToken,
         
        }      
        });
      
         const data = await response.json();
         setAdminUsers(data.response) ;
    } catch (error) {
      console.log(error);
      
    }
      
    }

    const deleteUser  =async (id) => {
      try {
        const response = await fetch(`http://localhost:5000/api/admin/users/delete/${id}`, {
          method: "DELETE",
          headers : {
            Authorization:authorizationToken,           
          }      
          });
        
           const data = await response.json();
          //  setAdminUsers(data.response) ;
          console.log("data after delete " , data.respone);
          if(response.ok){
            getAllUsers() ;
          }
      } catch (error) {
        console.log(error);
        
      }
        
      }

      const getUserById  =async (id) => {
        try {
          const response = await fetch(`http://localhost:5000/api/admin/${id}`, {
            method: "GET",
            headers : {
              Authorization:authorizationToken,           
            }      
            });
          
             const data = await response.json();
            //  setAdminUsers(data.response) ;
            console.log("data " , data.respone);
            // if(response.ok){
            //   getAllUsers() ;
            // }
        } catch (error) {
          console.log(error);
          
        }
          
        }

  useEffect( () => {
    getAllUsers();
  } ,[]);


  return (
    <>
    <table>
      <thead>
        <th>Name</th>
        <th>Emamil</th>
        <th>Phone</th>
        <th>Update</th>
        <th>Delete</th>
      </thead>
      <tbody>
     {
       adminUsers.map( (user,index ) => {
        return(
         <tr className='center' key={index}>
          <td>{user.username}</td>
          <td>{user.email}</td>
          <td>{user.phone}</td>
          <td >
            <Link to={`admin/users/${user._id}/edit`}>Edit</Link>
          </td>
          <td>
           <button onClick={() => deleteUser(user._id)}>Delete</button>
          </td>
         </tr>
        )
       })
     }
      </tbody>
    </table>
   </>
  )
}

export default AdminUsers ;