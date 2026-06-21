import { useState } from 'react'


import {Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'

// import Login from './Pages/Login'

import CardDetails from './Pages/CardDetails'

import Register from './Pages/Register'
// import ShowData from './Pages/ShowData'
function App() {
 

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      {/* <Route path='/login' element={<Login/>}/> */}
  
      {/* <Route path='/cards/:id' element={<CardDetails/>}/> */}
       <Route path="/card/:id" element={<CardDetails />} />
      <Route path='/register' element={<Register/>}/>
      {/* <Route path='/showdata' element={<ShowData/>}/> */}
    </Routes>

     
                            
              
    </>
  )
}

export default App
