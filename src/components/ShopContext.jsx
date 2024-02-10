import React, { createContext, useState} from "react";

export const ShopContext = createContext(null);

// title, description, price, quantity, image,  productId 

const groupById = (array) => {
    return array.reduce((accumulator, currentValue) => {
    // Get the id of the current value
    const id = currentValue.productId;

    // If the accumulator doesn't have an array for this id, create it
    if (!accumulator[id]) {
        accumulator[id] = [];
    }

    // Add the current value to the array for this id
    accumulator[id].push(currentValue);

    return accumulator;
    }, []); // Initial value of the accumulator is an empty object
}

const removeHelper = (cart, itemId) => {
    // Find the index of the first item with the given id
    const index = cart.findIndex(item => item.productId === itemId);

    // If the item is found, remove it from the cart
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