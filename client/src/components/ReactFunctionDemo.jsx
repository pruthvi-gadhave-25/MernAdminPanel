import React from 'react'

function ReactFunctionDemo() {

  const handleFormData = (e) => {
e.preventDefault() ;
    const formData = new FormData(e.target);
  
    console.log( "formData.entries() is function" ,typeof formData.entries === 'function');
    console.log(formData.entries());
    
    const obj = Object.fromEntries(formData.entries()) ;

    console.log(obj);
    

  }
  return (

    <div className='container'>
      <form  onSubmit={handleFormData}>
        <div>
       
        <input type='text' name="name" />
        </div>
        <div>
       
        <input type='number' name="phnumber"/>
        </div>
       <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default ReactFunctionDemo ;