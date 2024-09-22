import React, { useEffect, useState } from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import { useAuth } from '../store/auth';
import { toast } from 'react-toastify';

function EditUser() {

  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
  });


  const params =  useParams() ;
  const {authorizationToken} = useAuth() ;
  const navigate = useNavigate() ;
 const  handleSubmit= async (e) => {
  e.preventDefault();

  console.log(user);
  try {
    const response = await fetch(`http://localhost:5000/api/admin/users/update/${params.id}`, {
      method: "PATCH",
      body: JSON.stringify(user),
      headers: { "Content-Type": "application/json" ,

                Authorization : authorizationToken
       },
    });
    if (!response.ok) {
      throw new Error("Data not send succefully", { cause: response });
    }

    navigate("/admin/users");
     toast.success(" Updated Succefully ")
  
  } catch (error) {
    console.log("Error while Update", error);
  }
  }

  const handleInput = (e) => {
    const { value, name } = e.target;

    setUser({
      ...user,
      [name]: value
    });
  }

  
  const singleUserdata  =async () => {
    console.log(params.id , authorizationToken);

    
    try {
      const response = await fetch(`http://localhost:5000/api/admin/users/${params.id}`, {
        method: "GET",
        headers : {
          Authorization:authorizationToken,           
        }      
        });
      
        const data = await response.json();
        console.log("datain Edit  " , data);
       setUser(data.data);
    } catch (error) {
      console.log(error);
      
    }
      
    }
  useEffect(() => {
    singleUserdata() ;
  } ,   [] )
  return (
    <>
    <section className="section-contact">
      <div className="contact-content ">
        <h1 className="main-heading">Edit User</h1>
      </div>
      {/* contact page main  */}
      <div className="container grid grid-two-cols">
       

        {/* contact form content actual  */}
        <section className="section-form">
          <form onSubmit={handleSubmit} className='form'>
            <div>
              <label htmlFor="username">username</label>
              <input
                type="text"
                name="username"
                id="username"
                autoComplete="off"
                value={user.username}
                onChange={handleInput}
                required
              />
            </div>

            <div>
              <label htmlFor="email">email</label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="off"
                value={user.email}
                onChange={handleInput}
                required
              />
            </div>
            <div>
              <label htmlFor="phone">Phone</label>
              <input
                type="phone"
                name="phone"
                id="phone"
                autoComplete="off"
                value={user.phone}
                onChange={handleInput}
                required
              />
            </div>
        

            <div>
              <button type="submit">Update</button>
            </div>
          </form>
        </section>
      </div>

     
    </section>
  </>
  )
}

export default EditUser