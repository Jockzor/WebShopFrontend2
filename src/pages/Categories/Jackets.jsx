import React from 'react';

import { jacketsData } from "/src/Data/jacketsData.js"
import Products from '../../components/Products/Products';

const Jackets = () => {
    return (
      <div>
        <h2>Jackets</h2>
        <Products data={jacketsData} />
      </div>
    );
  };
  
  export default Jackets;