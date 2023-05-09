import React, { useContext } from "react";
import { Link } from "react-router-dom";

import CartContext from "../../store/cart-context";
import AuthContext from "../../store/auth-context";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const Product = (props) => {
    const cartCtx = useContext(CartContext);
    const authCtx = useContext(AuthContext);

    const saveToServer = async (item) => {
        try {
            const itemData = {
                id: item.id,
                title: item.title,
                price: item.price,
                quantity: 1,
            };
            console.log(JSON.stringify(itemData));
            const response = await fetch(
                `https://crudcrud.com/api/7cfb1d059bdf4fb294c5165f3f871a6e/cart${authCtx.email.replace(
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
    };

    const addProduct = (event) => {
        cartCtx.addItem({ ...props.product, quantity: 1 });
        saveToServer(props.product);
    };

    return (
        <Col>
            <Card style={{ width: "18rem" }}>
                <Link to={`/store/${props.product.id}`}>
                    <Card.Title>{props.product.title}</Card.Title>
                    <Card.Img variant='top' src={props.product.imageUrl} />
                </Link>
                <Card.Body>
                    <Card.Text>${props.product.price}</Card.Text>
                    <Button variant='info' onClick={addProduct}>
                        Add to Cart
                    </Button>{" "}
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Product;
