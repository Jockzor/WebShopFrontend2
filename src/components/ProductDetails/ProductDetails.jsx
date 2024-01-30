import React from 'react';

const ProductDetails = ({ product }) => {
    console.log('Product in ProductDetails component:', product);
  return (
    <div>
        <img src={product.img} alt={product.title}/>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>Lager: {product.quantity}</p>
      <p>Pris: SEK{product.price}</p>
      
      <h1>DETAILS</h1>
    </div>
    
  );
};

export default ProductDetails;