import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../store/auth';

function EditContact() {

  const [contact, setContact] = useState({
    username: "",
    email: "",
    message: "",
  });

  const params = useParams();
  const { authorizationToken } = useAuth();
const navigate = useNavigate() ;
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/api/form/contacts/update/${params.id}`, {
        method: "PATCH",
        body: JSON.stringify(contact),
        headers: { "Content-Type": "application/json" ,
  
                  Authorization : authorizationToken
         },
      });
      if (!response.ok) {
        throw new Error("Data not send succefully", { cause: response });
      }
  
      navigate("/admin/contacts");
       toast.success(" Updated Succefully ")
    
    } catch (error) {
      console.log("Error while Update", error);
    }
  }

  const handleInput = (e) => {
    const { value, name } = e.target;

    setContact({
      ...contact,
      [name]: value
    });
  }


  const getSingleContact = async () => {
    console.log("params ", params.id);
    console.log("authorizationToken ", authorizationToken);


    try {
      const response = await fetch(`http://localhost:5000/api/form/contacts/${params.id}`, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        }
      });
      // debugger ;
      const data = await response.json();
      console.log(data);

      setContact(data.data);
    } catch (error) {
      console.log(error);

    }

  }

  useEffect(() => {
    getSingleContact();
  }, [])

  return (
    <section className="section-contact">
      <form onSubmit={handleSubmit} className='form'>
        <div>
          <label htmlFor="username">username</label>
          <input
            type="text"
            name="username"
            id="username"
            autoComplete="off"
            value={contact.username}
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
            value={contact.email}
            onChange={handleInput}
            required
          />
        </div>

        <div>
          <label htmlFor="message">message</label>
          <textarea
            name="message"
            id="message"
            autoComplete="off"
            value={contact.message}
            onChange={handleInput}
            required
            cols="30"
            rows="6"
          ></textarea>
        </div>

        <div>
          <button type="submit">submit</button>
        </div>
      </form>
    </section>
  )
}

export default EditContact