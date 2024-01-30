import React from 'react';

const Product = ({ id, img, title, description, quantity, price }) => {
  return (
    <div key={id}>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Quantity: {quantity}</p>
      <p>Price: ${price}</p>
    </div>
  );
};

export default Product;
