import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import Cart from "./pages/Cart/Cart";
import Jackets from './pages/Categories/Jackets';
import Hoodies from './pages/Categories/Hoodies';
import TShirts from './pages/Categories/Tshirts';
import ProductDetails from './components/ProductDetails/ProductDetails.jsx';
import { ShopContextProvider } from './components/ShopContext';

function App() {

  fetch("").then

  return (
    
    <BrowserRouter>
        <NavBar/> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/cart" element={<Cart />} /> 
        <Route path="/jackets" element={<Jackets/>}/>
        <Route path="/hoodies" element={<Hoodies/>}/>
        <Route path="/tshirts" element={<TShirts/>}/>
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route/>
      </Routes>
       <Footer/>
    </BrowserRouter>
    
      
  )
}



export default App
