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
import AdminUsers from './components/AdminUsers'
import AdminLayout from './components/AdminLayout'
import AdminContacts from './components/AdminContacts'
import EditUser from './components/EditUser'

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
      <Route path='/formData' element={<ReactFunctionDemo/>} />
      <Route path='*' element={<Error/>} />
      <Route path='/admin' element={<AdminLayout />}>
            <Route path='users' element={<AdminUsers />} />
            <Route path='contacts' element={<AdminContacts />} />
            <Route path='/admin/users/:id/edit' element={<EditUser />} />
          </Route>
     </Routes>      
      <Footer/>
    </>
  )
}

export default App
