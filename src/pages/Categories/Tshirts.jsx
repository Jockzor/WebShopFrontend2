import React from 'react';
import Products from '../../components/Products/Products';
import { tshirtsData } from "/src/Data/tshirtsData.js"


const TShirts = () => {
    return (
      <div>
        <h2>T-Shirts</h2>
        <Products data={tshirtsData} category="tshirts" />
      </div>
    );
  };
  
  export default TShirts;