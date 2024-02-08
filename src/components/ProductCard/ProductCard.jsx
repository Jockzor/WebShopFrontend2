import React from 'react';
import { Link } from 'react-router-dom';
import '/src/components/ProductCard/ProductCard.css'

const ProductCard = ({ id, title, image, description, price, quantity }) => {
  return (
    <div className="product-card">
      
      <img src={image} alt={title} /> 
      <h3>{title}</h3>
      <p className="description">{description}</p>
      <p>Pris: SEK {price}</p>
      <p>Lager: {quantity}</p>
      <Link className='detailLink' to={`/product/${id}`}>Se Detaljer</Link>
    </div>
  );
};

export default ProductCard;
