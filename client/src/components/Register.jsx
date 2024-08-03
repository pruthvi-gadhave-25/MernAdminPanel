import React, { useState } from 'react'
import "./Register.css"

function Register() {

  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  function handleInput(e) {
    const {name ,value} = e.target ;
   
      setUser( {
        ...user ,
        [name] : value 
      } ,
    );
  }

  function handleSubmit(e){
  e.preventDefault();
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