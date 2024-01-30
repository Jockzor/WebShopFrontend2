import React from 'react';
import "/src/pages/Home/Home.css"
import Hoodie from "/src/assets/images/hoodie-slider.jpg"
import Products from '/src/components/Products/Products.jsx';

const Home = () => {
  return (
    <div className='slider'>
      
      <img className='homeImage'src={Hoodie} alt="Hoodie"/>
      <Products/>
    </div>
    
  );
};
  
  export default Home;