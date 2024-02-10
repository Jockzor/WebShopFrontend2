import React from 'react';
import { Link } from 'react-router-dom';
import '/src/components/ProductCard/ProductCard.css'
import { FaBasketShopping } from "react-icons/fa6";

const ProductCard = ({ productId, title, image, description, price, quantity, addToCart }) => {
  return (
    <div className="product-card">
      <img src={image} alt={title} /> 
      <h3>{title}</h3>
      <p className="description">{description}</p>
      <p>Pris: {price} kr.</p>
      <p>Lager: {quantity}</p>
      <div className="product-card-buttons">
        <Link className='detailLink' to={`/product/${productId}`}>Se Detaljer</Link>
        <button className='detailLink' onClick={addToCart}><FaBasketShopping /> Lägg till</button>
      </div>
    </div>
  );
};

export default ProductCard;
