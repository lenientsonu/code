import React, { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
    const [items, setItems] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);

    const addItemToCartHandler = (item) => {
        // Check if item already exists in the cart
        const existingItemIndex = items.findIndex(
            (existingItem) => existingItem.id === item.id
        );

        // If item exists, update its quantity
        if (existingItemIndex !== -1) {
            const existingItem = items[existingItemIndex];
            const updatedItem = {
                ...existingItem,
                quantity:
                    parseInt(existingItem.quantity) + parseInt(item.quantity),
            };
            const updatedItems = [...items];
            updatedItems[existingItemIndex] = updatedItem;
            setItems(updatedItems);
        } else {
            // Otherwise, add the item to the cart
            setItems((prevItems) => [...prevItems, item]);
        }

        // Update the total amount
        setTotalAmount(
            (prevTotalAmount) =>
                prevTotalAmount + parseInt(item.quantity) * item.price
        );
    };

    const removeItemToCartHandler = (id) => {
        // Find the item with the given ID
        const existingItemIndex = items.findIndex((item) => item.id === id);
        console.log(id, items);

        if (existingItemIndex === -1) {
            return;
        }

        // If item quantity is greater than 1, update its quantity
        if (items[existingItemIndex].quantity > 1) {
            const existingItem = items[existingItemIndex];
            const updatedItem = {
                ...existingItem,
                quantity: existingItem.quantity - 1,
            };
            const updatedItems = [...items];
            updatedItems[existingItemIndex] = updatedItem;
            setItems(updatedItems);
        } else {
            // Otherwise, remove the item from the cart
            const updatedItems = items.filter((item) => item.id !== id);
            setItems(updatedItems);
        }

        // Update the total amount
        setTotalAmount(
            (prevTotalAmount) =>
                prevTotalAmount - items[existingItemIndex].price
        );
    };

    const clearCartHandler = () => {
        console.log("Clearing cart...");
        setItems([]);
        setTotalAmount(0);
        console.log("cart cleared");
    };

    const cartContext = {
        items: items,
        totalAmount: totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemToCartHandler,
        clearCart: clearCartHandler,
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;
