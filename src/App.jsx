import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import Home from "./pages/Home/Home";
import Returns from "./pages/ReturnsPage/Returns.jsx"
import { Cart } from './pages/Cart/Cart.jsx';
import AboutUs from "./pages/AboutUs/AboutUs";
import Delivery from "./pages/DeliveryPage/Delivery.jsx"
import { ShopContextProvider } from './components/ShopContext';
import PurchaseTerm from './pages/PurchaseTerms/PurchaseTerms.jsx';
import CategoryPage from '/src/components/CategoryPage/CategoryPage.jsx';
import ProductDetails1 from './components/ProductDetails/ProductDetails1.jsx';

function App() {
  return (
    <ShopContextProvider>
      <BrowserRouter>
        <NavBar/> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/cart" element={<Cart />} /> 
          <Route path="/returns" element={<Returns />}/>
          <Route path="/delivery" element={<Delivery />}/>
          <Route path="/purchase" element={<PurchaseTerm />}/>
        
          <Route path="/jackets" element={<CategoryPage categoryId="1" />} />
          <Route path="/hoodies" element={<CategoryPage categoryId="2" />} />
          <Route path="/tshirts" element={<CategoryPage categoryId="3" />} />
          <Route path="/product/:productId" element={<ProductDetails1/>} />

          <Route/>
        </Routes>
        <Footer/>
      </BrowserRouter>
   </ShopContextProvider>
  )
}

export default App;
