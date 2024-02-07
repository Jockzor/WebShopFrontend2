import React from 'react';

import { jacketsData } from "/src/Data/jacketsData.js"
import Products from '../../components/Products/Products';
import {fetchProductsByCategory} from '/src/Services/Api.js';

const jacketsData1 = [fetchProductsByCategory()];

const Jackets = () => {
    return (
      <div>
        <h2>Jackets</h2>
        <Products data={jacketsData1} category="jackets" />
      </div>
    );
  };
  
  export default Jackets;