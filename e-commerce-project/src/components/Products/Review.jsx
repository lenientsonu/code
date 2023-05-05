import Badge from "react-bootstrap/Badge";

import "./Review.css";

const Review = (props) => {
    return (
        <section className='review'>
            <h5>
                {props.review.name}{" "}
                <Badge bg='success'>{props.review.rating} ★</Badge>
            </h5>

            <p>{props.review.Comment}</p>
        </section>
    );
};

export default Review;
