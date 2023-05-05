import { useParams } from "react-router-dom";

import Carousel from "react-bootstrap/Carousel";

import "./ProductDetail.css";
import Review from "../components/Products/Review";

const ProductPage = (props) => {
    const params = useParams();

    const product = props.products.find(
        (product) => product.id === params.productId
    );

    if(!product){
       return <h1>No Product Found</h1>
    }

    const reviews = product.reviews;
    console.log(reviews);

    return (
        <>
            <h1>Product details</h1>
            <div className='container'>
                <div className='images'>
                    <Carousel variant='dark'>
                        <Carousel.Item>
                            <img
                                className='d-block w-100'
                                src={product.imageUrl}
                                alt='First slide'
                            />
                            <Carousel.Caption>
                                <h3>{product.title}</h3>
                                <p>₹{product.price}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className='d-block w-100'
                                src={product.images[0]}
                                alt='Second slide'
                            />

                            <Carousel.Caption>
                                <h3>{product.title}</h3>
                                <p>₹{product.price}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className='d-block w-100'
                                src={product.images[1]}
                                alt='Third slide'
                            />

                            <Carousel.Caption>
                                <h3>{product.title}</h3>
                                <p>₹{product.price}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className='d-block w-100'
                                src={product.images[2]}
                                alt='Fourth slide'
                            />

                            <Carousel.Caption>
                                <h3>{product.title}</h3>
                                <p>₹{product.price}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div class='details'>
                    <h2>{product.title}</h2>
                    <h3>₹{product.price}</h3>
                    <div className='review'>
                        <h4>Customer Reviews</h4>
                        <section>
                            {reviews.map((review) => {
                                return <Review review={review} />;
                            })}
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductPage;
