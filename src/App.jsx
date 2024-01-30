import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import Jackets from './pages/Categories/Jackets';
import Hoodies from './pages/Categories/Hoodies';
import TShirts from './pages/Categories/Tshirts';

function App() {
  

  return (
    
    <BrowserRouter>
        <NavBar/> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/jackets" element={<Jackets/>}/>
        <Route path="/hoodies" element={<Hoodies/>}/>
        <Route path="/tshirts" element={<TShirts/>}/>
      </Routes>
       <Footer/>
    </BrowserRouter>
    
      
  )
}

export default App
