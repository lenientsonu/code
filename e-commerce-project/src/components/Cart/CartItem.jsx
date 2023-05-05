import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";

const CartItem = (props) => {

    return (
        <div>
            <Stack direction='horizontal' gap={3}>
                <span>{props.title}</span>
                <span>{props.price}</span>
                <span>{props.quantity}</span>
                <Button variant='danger' onClick={props.onRemove}>Remove</Button>{" "}
            </Stack>
        </div>
    );
};

export default CartItem;
