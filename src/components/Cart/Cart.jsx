import React, { useState, useContext, useEffect } from "react";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";
import AuthContext from "../../store/auth-context";

import "./Cart.css";

const Cart = (props) => {
    const [show, setShow] = useState(false);

    const CartCtx = useContext(CartContext);
    const authCtx = useContext(AuthContext);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        const getFromServer = async () => {
            try {
                const response = await fetch(
                    `https://crudcrud.com/api/7cfb1d059bdf4fb294c5165f3f871a6e/cart${authCtx.email.replace(
                        /[@.]/g,
                        ""
                    )}`
                );
                const data = await response.json();
                console.log("Cart data from the server:", data);
                data.forEach((item) => {
                    const existingItemIndex = CartCtx.items.findIndex(
                        (existingItem) => existingItem.id === item.id
                    );
                    if (existingItemIndex !== -1) {
                        const existingItem = CartCtx.items[existingItemIndex];
                        const updatedItem = {
                            ...existingItem,
                            quantity:
                                parseInt(existingItem.quantity) +
                                parseInt(item.quantity),
                        };
                        const updatedItems = [...CartCtx.items];
                        updatedItems[existingItemIndex] = updatedItem;
                        CartCtx.addItem(updatedItem);
                    } else {
                        CartCtx.addItem(item);
                    }
                });
            } catch (error) {
                console.error("Error while getting cart data:", error);
            }
        };

        if (CartCtx.items.length === 0) {
            getFromServer();
        }

        return () => {
            // cleanup function
            console.log("Cleaning up useEffect in Cart.js...");
        };
    }, []);

    return (
        <>
            <Button variant={props.color} onClick={handleShow}>
                {props.title}
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Cart</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='list'>
                        <Stack direction='horizontal' gap={3}>
                            <span>Item</span>
                            <span>Price</span>
                            <span>Quantity</span>
                        </Stack>
                        <hr />
                    </div>
                    {CartCtx.items.map((product) => (
                        <CartItem
                            key={product._id}
                            _id={product._id}
                            id={product.id}
                            title={product.title}
                            price={product.price}
                            quantity={product.quantity}
                        />
                    ))}
                    <div className='total'>
                        <span>Total</span>
                        <span>{CartCtx.totalAmount}</span>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant='primary' onClick={handleClose}>
                        Purchase
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Cart;
