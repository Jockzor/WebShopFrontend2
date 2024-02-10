import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { ShopContext } from "../../components/ShopContext";
import { FaRegTrashAlt } from "react-icons/fa";
import '/src/components/ProductDetails/ProductDetails.css'
import '/src/pages/Cart/CartItem.css'

export const CartItem = (props) => {
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);

    const { title, description, price, quantity, image, productId } = props.data[0];
    const count = props.data.length;

    // title, description, price, quantity, image, productId

    const uploadURL = 'http://localhost:1337';

    return (
        <div className="cartItem detailsContainer">
            
         <Link className='detailLink' to={`/product/${productId}`}><img src={uploadURL + image.data.attributes.url} /></Link>
            <div className="description">
                <p>  
                    <b> {title} </b>
                </p>
                <p> {price} kr.</p>
                <div className="countHandler">
                    <button className='addToCartBtn' onClick={() => removeFromCart(productId)}> - </button>
                    <input value={count} onChange={(e) => updateCartItemCount(Number(e.target.value))}/>
                    <button className='addToCartBtn' onClick={() => addToCart(props.data[0])}> + </button>
                    <button className="removeBtn" onClick={() => removeFromCart(productId)}>Ta Bort <FaRegTrashAlt/></button>
                </div>
            </div>
        </div>
    ); 
};