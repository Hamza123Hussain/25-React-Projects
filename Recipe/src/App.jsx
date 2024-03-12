import { useState } from 'react'

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home/Home'
import { Favs } from './Pages/Favs/Favs'
import Details from './Pages/Home/Details/Details'

function App() {


  return (
    <>

    <Navbar/>

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Favs' element={<Favs/>}/>
      <Route path='/details/:id' element={<Details/>}/>
    </Routes>
  
    </>
  )
}

export default App
