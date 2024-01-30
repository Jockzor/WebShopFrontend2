import React from 'react';
import "/src/components/Products/Products.css"
import Product from '/src/components/Product/Product.jsx';

const Products = ({ data }) => {
    return (
      <div className="products-container">
        {data?.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.img} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>Quantity: {product.quantity}</p>
            <p>Price: ${product.price}</p>
            
          </div>
        ))}
      </div>
    );
  };
  
  export default Products;