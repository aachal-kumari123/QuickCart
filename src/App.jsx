import { useState } from 'react'


import {Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import CardDetails from './Pages/CardDetails'
import Register from './Pages/Register'

import ProductDetails from './Pages/ProductDetails'

function App() {
 

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
       <Route path='/product/:id' element={<ProductDetails/>}/>
       <Route path="/card/:id" element={<CardDetails />} />
      <Route path='/register' element={<Register/>}/>
    </Routes>

     
                            
              
    </>
  )
}

export default App
