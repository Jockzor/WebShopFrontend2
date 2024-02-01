import React from 'react';
import { useParams } from 'react-router-dom';
import ProductDetails from '../../components/ProductDetails/ProductDetails.jsx';
import { jacketsData } from '/src/Data/jacketsData.js';
import { tshirtsData } from '/src/Data/tshirtsData.js';
import { hoodiesData } from '/src/Data/hoodiesData.js';

const ProductDetailsPage = () => {
  const { productId, category } = useParams();

  let productData;
  switch (category) {
    case 'jackets':
      productData = jacketsData;
      break;
    case 'tshirts':
      productData = tshirtsData;
      break;
    case 'hoodies':
      productData = hoodiesData;
      break;
    default:
      // Handle other categories or provide a default data source
      break;
  }

  const product = productData.find((product) => product.id === parseInt(productId, 10));

  return (
    <div>
      <h2>Product Details Page</h2>
      <ProductDetails product={product} />
    </div>
  );
};

export default ProductDetailsPage;