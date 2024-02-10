import React, { useContext } from 'react';
import { ShopContext } from '../../components/ShopContext';
import { CartItem } from './Cart-item';
import { useNavigate } from 'react-router-dom';

export const ShopContextProvider = (props) => {
};

export const Cart = () => {
    const shopContext = useContext(ShopContext);
    const { cartItems = {}, getTotalCartAmount = () => 0, PRODUCTS = [] } = shopContext || {};
    const totalAmount = getTotalCartAmount();
    const navigate = useNavigate();

    return (
        <div className="cart">
            <div>
                <h1> Kundkorg </h1>
            </div>
            <div className="cartItems">
                {PRODUCTS.map((product) => {
                    if (cartItems[product.id] !== 0) {
                        return <CartItem key={product.id} data={product} />;
                    }
                    return null;
                })}
            </div>
            <div className="checkOut">
                <p> Totalbelopp: ${totalAmount}</p>
                <button onClick={() => navigate("/")}> Fortsätt handla </button>
            </div>
        </div>
    );
};