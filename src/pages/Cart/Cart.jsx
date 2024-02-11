import React, { useContext } from 'react';
import { ShopContext } from '../../components/ShopContext';
import { CartItem } from './Cart-item';
import { useNavigate } from 'react-router-dom';
import '/src/pages/Cart/Cart.css'


export const Cart = () => {
  const navigate = useNavigate()

  const { getTotalCartAmount, getGroupedcartItemsByProductId } = useContext(ShopContext); 
  const totalAmount = getTotalCartAmount();

  if (totalAmount === 0)
  return(
      <div className='empty'>
        <h1> Varukorg </h1>
        <h3>Din varukorg är tom!</h3>
      </div>
    )
    else
  return (
    <div className='cart'>
      <div className='headLine'>
        <h1> Varukorg </h1>
      </div>
      <div className="checkOut">
        <p><b> Totalbelopp: {totalAmount} kr. </b></p>
        <button className='checkOutBtn' onClick={() => navigate("/")}><b> Fortsätt handla </b> </button>
        <button className='checkOutBtn' onClick={() => navigate("/checkout")}><b>Gå Till Kassan</b></button>
      </div>
      <div className='cartItems'>
        {getGroupedcartItemsByProductId.map((product) => {
          return <CartItem key={product.productId} data={product} />; 
        })}

      </div>
      
    </div>
  )
};

