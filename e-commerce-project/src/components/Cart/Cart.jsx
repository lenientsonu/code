import React, { useState, useContext, useEffect, useCallback } from "react";
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

    const getFromServer = useCallback(async () => {
        try {
            const response = await fetch(
                `https://crudcrud.com/api/f83d1247719c4137b0123579122c5274/cart${authCtx.email.replace(
                    /[@.]/g,
                    ""
                )}`
            );
            const data = await response.json();
            console.log("Cart data from the server:", data);
            data.map((item) => CartCtx.addItem(item));
        } catch (error) {
            console.error("Error while getting cart data:", error);
        }
    }, [authCtx.email, CartCtx]);

    useEffect(() => {
        getFromServer();
    }, [getFromServer]);

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
