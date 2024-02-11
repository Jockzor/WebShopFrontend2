import React, { createContext, useState} from "react";
export const ShopContext = createContext(null);

const groupById = (array) => {
    return array.reduce((accumulator, currentValue) => {
   
    const id = currentValue.productId;

    if (!accumulator[id]) {
        accumulator[id] = [];
    }

    accumulator[id].push(currentValue);

    return accumulator;
    }, []); 
}

const removeHelper = (cart, itemId) => {
    
    const index = cart.findIndex(item => item.productId === itemId);

    if (index !== -1) {
        cart.splice(index, 1);
    }

    return cart;
}

export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (cartItem) => {
        setCartItems((prev) => ([...prev, cartItem]));
    };

    const getTotalCartAmount = () => {
        const mappedNumbers = cartItems.map(({price}) => price);
        const totalAmount = mappedNumbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        
        return totalAmount;
    };

    const removeFromCart = (itemId) => {
        setCartItems([...removeHelper(cartItems, itemId)]);
    };
    
    const updateCartItemCount = (newAmount, itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
    };
    
    const getGroupedcartItemsByProductId = React.useMemo(() => {
        return groupById(cartItems);
    }, [cartItems]);

    const contextValue = {cartItems, addToCart, removeFromCart, updateCartItemCount, getTotalCartAmount, getGroupedcartItemsByProductId};

    return (   
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};