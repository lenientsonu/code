import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Product from "./Product";

import "./Products.css";

const Products = (props) => {
    return (
        <Container className='products'>
            <h2>Clothes</h2>
            <Row xs={1} md={2} className='g-4'>
                {props.products.map((product) => (
                    <Product key={product.id} product={product} />
                ))}
            </Row>
        </Container>
    );
};

export default Products;
