import React, { useContext } from 'react';
import { ShopContext } from '../../components/ShopContext';
import { CartItem } from './Cart-item';
import {} from 'react-router-dom'

import { useNavigate } from 'react-router-dom';

export const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext); 
  const totalAmount = getTotalCartAmount()

  const navigate = useNavigate()

  return (
    <div className='cart'>
      <div>
        <h1> Kundkorg </h1>
      </div>
      <div className='cartItems'>
        {PRODUCTS.map((product) => {
            if (cartItems[product.id] !== 0) {
               return <CartItem data={product} />; 
            }
        })}

      </div>

      <div className="checkOut">
        <p> Totalbelopp: ${totalAmount}</p>
        <button onClick={() => navigate("/")}> Fortsätt handla </button>
      </div>

    </div>
  )
};
