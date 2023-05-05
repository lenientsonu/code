import React, { useContext } from "react";
import { Link } from "react-router-dom";

import CartContext from "../../store/cart-context";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";



const Product = (props) => {
    const cartCtx = useContext(CartContext);

    const addProduct = (event) => {
        cartCtx.addItem({ ...props.product, quantity: 1 });
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
