import React from 'react';
import Products from '../../components/Products/Products';
import { hoodiesData } from "/src/Data/hoodiesData.js"

const Hoodies = () => {
    return (
      <div>
        <h2>Hoodies</h2>
        <Products data={hoodiesData} />
      </div>
    );
  };
  
  export default Hoodies;