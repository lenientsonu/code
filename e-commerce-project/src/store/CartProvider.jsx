import React, { useState, useEffect, useContext, useCallback } from "react";
import CartContext from "./cart-context";
import AuthContext from "./auth-context";

const CartProvider = (props) => {
    const [items, setItems] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);
    const authCtx = useContext(AuthContext);

    const saveToServer = useCallback(async () => {
        try {
            const itemData = {
                id: items[items.length - 1].id,
                title: items[items.length - 1].title,
                price: items[items.length - 1].price,
                quantity: items[items.length - 1].quantity,
            };
            console.log(JSON.stringify(itemData));
            const response = await fetch(
                `https://crudcrud.com/api/f83d1247719c4137b0123579122c5274/cart${authCtx.email.replace(
                    /[@.]/g,
                    ""
                )}`,
                {
                    method: "POST",
                    body: JSON.stringify(itemData),
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            const data = await response.json();
            console.log("Cart data updated on server:", data);
        } catch (error) {
            console.error("Error updating cart data:", error);
        }
    }, [authCtx.email, items]);

    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        saveToServer();
    }, [items, saveToServer]);

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

    const cartContext = {
        items: items,
        totalAmount: totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemToCartHandler,
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;
