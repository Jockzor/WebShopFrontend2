import React from 'react';

import { jacketsData } from "/src/Data/jacketsData.js"
import Products from '../../components/Products/Products';
import ProductCard from '../../components/ProductCard/ProductCard.jsx';
import {fetchProductsByCategory} from '/src/Services/Api.js';
import {fetchProductById} from '/src/Services/Api.js';

const jacketsData1 = [fetchProductById(1)];

const Jackets = () => {
    return (
      <div>
        <h2>Jackets</h2>
       <ProductCard product={jacketsData1} />
      </div>
    );
  };
  
  export default Jackets;