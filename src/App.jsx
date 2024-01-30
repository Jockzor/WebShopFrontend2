import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import './App.css'
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Cart from "./pages/Cart";
import { ShopContextProvider } from './components/ShopContext';


function App() {
  

  return (
    
    <BrowserRouter>
        <NavBar/> 
        <ShopContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/cart" element={<Cart />} /> 
        <Route/>
      </Routes>
      </ShopContextProvider>
       <Footer/>
    </BrowserRouter>
    
      
  )
}



export default App
