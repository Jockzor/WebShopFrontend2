import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import './App.css'
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";

function App() {
  

  return (
    
    <BrowserRouter>
        <NavBar/> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route/>
      </Routes>
       <Footer/>
    </BrowserRouter>
    
      
  )
}

export default App
