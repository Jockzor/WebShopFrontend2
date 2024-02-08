// components/pages/CategoryPage.js
import React, { useState, useEffect } from 'react';
import { fetchProductsByCategory } from '/src/Services/Api'; // Import your API service function
import ProductCard from '/src/components/ProductCard/ProductCard.jsx';
import '/src/components/CategoryPage/CategoryPage.css'


const CategoryPage = ({ categoryId }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProductsByCategory(categoryId);
        setProducts(data.data.attributes.products.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, [categoryId]);

  const uploadURL = 'http://localhost:1337';

  return (
    <div className="category-page">
      <h2>{categoryId}</h2>
      <div className="products-container">
        {products.map(product => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.attributes.title}
            image={uploadURL + product.attributes.image.data.attributes.url} 
            description={product.attributes.description}
            price={product.attributes.price}
            quantity={product.attributes.quantity}
            isNew={product.attributes.isNew}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
