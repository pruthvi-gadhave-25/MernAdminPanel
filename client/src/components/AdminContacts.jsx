import React, { useEffect, useState } from 'react'
import { useAuth } from '../store/auth';

function AdminContacts() {
  const {authorizationToken} = useAuth() ;
  const[adminContacts , setAdminContacts] = useState([]) ;

   const getAllContacts  = async () => {
     try {
      const response = await fetch('http://localhost:5000/api/admin/contacts', {
        method: "GET",
        headers : {
          Authorization:authorizationToken,
         
        }      
        });
       
         const data = await response.json();
        
          setAdminContacts(data.contacts) ;
     } catch (error) {
      console.log(error);
      
     }
        
     }

     useEffect(() => {
      getAllContacts();
     } ,[])
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
       adminContacts.map( (contact,index ) => {
        return(
         <tr className='center' key={index}>
          <td>{contact.username}</td>
          <td>{contact.email}</td>
          <td>{contact.message}</td>
          <td>Edit</td>
          <td>Delete</td>
         </tr>
        )
       })
     }
      </tbody>
    </table>
   </>
  )
}

export default AdminContacts ;