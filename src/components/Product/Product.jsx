import React, { useContext } from 'react';
import { ShopContext } from '../ShopContext';


export const Product = (props) => {
  const { id , price, productImage } = props.data;
  const { addToCart } = useContext(ShopContext); 

  const cartItemAmount = cartItems[id]
  return (
    <div className='product'>
      <img src={productImage} />
      <div className='description'>
        <p>
          <b>{productName}</b>
          </p>
          <p> ${price}</p>
        </div>
      <button className='addToCartBtn' onClick={() => addToCart(id)}>
          Lägg i korg {cartItemAmount > 0 && <> ({cartItemAmount})</>}
      </button>    
      </div>    

  );
};

export default Product;


/*
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

*/