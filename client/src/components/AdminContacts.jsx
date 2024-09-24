import React, { useEffect, useState } from 'react'
import { useAuth } from '../store/auth';
import {Link   } from 'react-router-dom';
import {toast} from "react-toastify" ;

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


   const   deleteContactById = async (id) => {
      try {
        const repsonse = await  fetch(`http://localhost:5000/api/form/contacts/delete/${id}`, {
          method : 'DELETE',
          headers: {
        Authorization : authorizationToken ,  
      }
        }) ;

        if(repsonse.ok){
          getAllContacts() ;
           toast.success("Deleted Succesfully ");

        }else{
           toast.error("Not Delted");
        }
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
         <Link to={`${contact._id}/edit`}>Edit</Link>
         {/* <td>Edit</td> */}
          <td onClick={() => deleteContactById(contact._id)} >Delete</td>
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