import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '/src/Services/Api'; 
import { FaBasketShopping } from "react-icons/fa6";
import '/src/components/ProductDetails/ProductDetails.css'

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

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

  return (
    <div className="detailsContainer">
        <div className='left'>
            <img className='detailsImage' src={uploadURL + image.data.attributes.url} alt={title} /> 
        </div>
        <div className='detailsRight'>
            <h2>{title}</h2>
            <p>{description}</p>
            <p>Pris: SEK {price}</p>
            <p>Lager: {quantity}</p>
            <button className='addToCartBtn'><FaBasketShopping /> Lägg till</button>
        </div>
    </div>
  );
};

export default ProductDetails;
