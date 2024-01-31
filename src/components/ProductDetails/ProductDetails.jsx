import React from 'react';
import '/src/components/ProductDetails/ProductDetails.css'
import { FaBasketShopping } from "react-icons/fa6";

const ProductDetails = ({ product }) => {
    console.log('Product in ProductDetails component:', product);
  return (
    <div className='detailsContainer'>
      <div className='left'>
        <img className='detailsImage' src={product.img} alt={product.title}/>
        </div>
        <div className='detailsRight'>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>Lager: {product.quantity}</p>
        <p>Pris: SEK{product.price}</p>
         <button className='addToCartBtn'><FaBasketShopping /> Lägg till</button>
      </div>
    </div>
  );
};

export default ProductDetails;