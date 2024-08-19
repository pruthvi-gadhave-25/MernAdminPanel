import { useState } from 'react'
import './App.css'
import { Routes , Route} from "react-router-dom"
import Home from './components/Home'
import Contacts from './components/Contact'
import Services from './components/Services'
import Login from './components/Login'
import Register from './components/Register'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Error from './components/Error'
import ReactFunctionDemo from './components/ReactFunctionDemo'
import Logout from './components/Logout'

function App() {


  return (
    <>
      <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/contact' element={<Contacts/>} />
      {/* <Route path='/about' element={<About/>} /> */}
      <Route path='/service' element={<Services/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/logout' element={<Logout/>} />
      <Route path='*' element={<Error/>} />
      <Route path='/formData' element={<ReactFunctionDemo/>} />
     </Routes>
      
       <Footer/>
    </>
  )
}

export default App
