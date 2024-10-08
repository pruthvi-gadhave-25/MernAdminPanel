import React, { useState } from 'react'
import "./Register.css"
import { useAuth } from '../store/auth';
import { toast } from 'react-toastify';

const  Register = () => {
  const  {storeTokenLocalstorage}  = useAuth();

  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });



  

  function handleInput(e) {
    const { name, value } = e.target;

    setUser({
      ...user,
      [name]: value
    },
    );
  }


  async function handleSubmit(e) {
    e.preventDefault();
    try {

      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: "POST",
        body: JSON.stringify(user),
        headers: { "Content-Type": "application/json" },
      
        

      });
      console.log(response);
        
      const res_data = await response.json();
      console.log("res_data" ,res_data);

      console.log(response);
      if (response.ok) {
        storeTokenLocalstorage(res_data.token)
        setUser({
          username: "", email: "", phone: "", password: ""
        })
        toast.success("Reagistration Succfully")
      }
      else {
       
        toast.error(res_data.error.extraDetails ? res_data.error.extraDetails : res_data.error.message );

      
        // throw new Error("error occured in register ", { cause: response });
        
      }

    } catch (error) {
      console.log("error registrtion", error);

    }
  }

  return (
    <section>
      <main>
        <div className='section-registration'>
          <div className='container grid grid-two-cols'>
            <div className="registration-image ">
              <img src="/images/software-development-coding.jpg" alt="registerapp" width={700} height={400} className='hero-image' />
            </div>
            <div className='registration-form'>
              <h1 className='main-heading mb-3'>
                Registration Form
              </h1>
              <br />
              <form onSubmit={handleSubmit} className='form'>
                <div>
                  <label htmlFor='username'>Username</label>
                  <input type="text" name="username" placeholder='Enter your name' id="username" required autoComplete='off' value={user.username} onChange={handleInput} />
                </div>
                <div>
                  <label htmlFor='email'>Email</label>
                  <input type="text" name="email" placeholder='Enter your Email' id="email" required autoComplete='off' value={user.email} onChange={handleInput} />
                </div>
                <div>
                  <label htmlFor='phone'>Phone</label>
                  <input type="number" name="phone" placeholder='Enter your Phone No.' id="phone" required autoComplete='off' value={user.phone} onChange={handleInput} />
                </div>
                <div>
                  <label htmlFor='password'>Password</label>
                  <input type="password" name="password" placeholder='Enter your Password' id="password" required autoComplete='off' value={user.password} onChange={handleInput} />
                </div>
                <br />
                <button type='submit' className='btn btn-submit'> Register Now </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </section>
  )
}

export default Register;