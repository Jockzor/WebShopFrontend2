import React, { useContext } from 'react';
import { ShopContext } from '../../components/ShopContext';
import { CartItem } from './Cart-item';
import { useNavigate } from 'react-router-dom';

export const Cart = () => {
  const navigate = useNavigate()

  const { getTotalCartAmount, getGroupedcartItemsByProductId } = useContext(ShopContext); 
  const totalAmount = getTotalCartAmount();

  return (
    <div className='cart'>
      <div>
        <h1> Kundkorg </h1>
      </div>
      <div className='cartItems'>
        {getGroupedcartItemsByProductId.map((product) => {
          return <CartItem key={product.productId} data={product} />; 
        })}

      </div>
      <div className="checkOut">
        <p> Totalbelopp: ${totalAmount}</p>
        <button onClick={() => navigate("/")}> Fortsätt handla </button>
      </div>
    </div>
  )
};

