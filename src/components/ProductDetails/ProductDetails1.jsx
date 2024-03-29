import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '/src/Services/Api'; 
import { FaBasketShopping } from "react-icons/fa6";
import '/src/components/ProductDetails/ProductDetails.css'

import { ShopContext } from '../../components/ShopContext';

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(ShopContext); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProductById(productId);
        setProduct(data); 
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchData();
  }, [productId]);

  if (!product) {
    return <p>Loading...</p>;
  }

  
  const { attributes } = product.data;

  const { title, description, price, quantity, image } = attributes;

  const uploadURL = 'http://localhost:1337';

  const handleOnAddToCart = () => {
    addToCart({ title, description, price, quantity, image, productId } )
  }

  return (
    <div className="detailsContainer">
        <div className='left'>
            <img className='detailsImage' src={uploadURL + image.data.attributes.url} alt={title} /> 
        </div>
        <div className='detailsRight'>
            <h2>{title}</h2>
            <p>{description}</p>
            <p>Pris: {price} kr.</p>
            <p>Lager: {quantity}</p>
            <button onClick={handleOnAddToCart} className='addToCartBtn'><FaBasketShopping /> Lägg till</button>
        </div>
    </div>
  );
};

export default ProductDetails;
