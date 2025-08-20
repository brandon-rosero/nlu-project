import { useState } from 'react'
import './App.css'
import { Navbar } from './components/Navbar'
import {Route, Routes} from "react-router-dom"
import Home from './components/Home'
import Capabilities from './components/Capabilities'
import Flavor from './components/Flavor'
import FlavorInfo from './components/FlavorInfo'
import NotFound from './components/NotFound'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/capabilities/:capability" element={<Capabilities />}/>
        <Route path="/capabilities" element={<Capabilities />}/>
        <Route path="/flavors/:category" element={<FlavorInfo />}/>
        <Route path="/flavors" element={<Flavor />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </>
  )
}

export default App
