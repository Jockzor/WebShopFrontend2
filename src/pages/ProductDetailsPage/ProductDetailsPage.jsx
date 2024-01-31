import React from 'react';
import { useParams } from 'react-router-dom'; // Import useParams
import ProductDetails from '../../components/ProductDetails/ProductDetails.jsx';
import { jacketsData } from '/src/Data/jacketsData.js';


const ProductDetailsPage = () => {
  const { productId } = useParams();
  const product = jacketsData.find((product) => product.id === parseInt(productId, 10));

  return (
    <div>
      <h2>Product Details Page</h2>
      <ProductDetails product={product} />
    </div>
  );
};

export default ProductDetailsPage;