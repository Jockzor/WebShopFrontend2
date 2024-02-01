import React from 'react';
import "/src/pages/Home/Home.css"
import Hoodie from "/src/assets/images/hoodie-slider.jpg"



const Home = () => {
  return (
    <div className='slider'>
      
      <img className='homeImage'src={Hoodie} alt="Hoodie"/>
      
    </div>
    
  );
};
  
  export default Home;