import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import AuthContext from "../../store/auth-context";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";

const CartItem = (props) => {
    const cartCtx = useContext(CartContext);
    const authCtx = useContext(AuthContext);

    const deleteFromServer = async (_id) => {
        try {
            const response = await fetch(
                `https://crudcrud.com/api/7cfb1d059bdf4fb294c5165f3f871a6e/cart${authCtx.email.replace(
                    /[@.]/g,
                    ""
                )}/${_id}`,
                {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            console.log("Product deleted on server:");
        } catch (error) {
            console.log("Error In deleting the data", error);
        }
    };

    const ClickHandler = (event) => {
        cartCtx.removeItem(props.id);
        deleteFromServer(props._id);
    };

    return (
        <div>
            <Stack direction='horizontal' gap={3}>
                <span>{props.title}</span>
                <span>{props.price}</span>
                <span>{props.quantity}</span>
                <Button variant='danger' onClick={ClickHandler}>
                    Remove
                </Button>{" "}
            </Stack>
        </div>
    );
};

export default CartItem;
