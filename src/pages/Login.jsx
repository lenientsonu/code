import React, { useRef, useContext } from "react";
import { useHistory } from "react-router-dom";

import AuthContext from "../store/auth-context";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import "./Login.css";

const LoginPage = () => {
    const authCtx = useContext(AuthContext);
    const emailRef = useRef();
    const passwordRef = useRef();
    const history = useHistory();

    const submitHandler = async (event) => {
        event.preventDefault();
        const emailValue = emailRef.current.value;
        const passwordValue = passwordRef.current.value;
        // console.log(emailValue, passwordValue);

        try {
            const response = await fetch(
                "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDo8WeVbw8UMDXoedtGWVFCJjOBUbwhRog",
                {
                    method: "POST",
                    body: JSON.stringify({
                        email: emailValue,
                        password: passwordValue,
                        returnSecureToken: true,
                    }),
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            if (response.ok) {
                const data = await response.json();
                console.log(data, data.idToken, data.email);
                authCtx.login(data.idToken, data.email);
                history.replace("/store");
            } else {
                const errorData = await response.json();
                if (errorData && errorData.error && errorData.error.message) {
                    console.log(errorData.error.message);
                    throw new Error(errorData.error.message);
                }
            }
        } catch (error) {
            alert(error);
        }
    };

    return (
        <Form className='login-form' onSubmit={submitHandler}>
            <h2>Login</h2>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label>Email</Form.Label>
                <Form.Control type='email' ref={emailRef} />
            </Form.Group>

            <Form.Group className='mb-3' controlId='formBasicPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' ref={passwordRef} />
            </Form.Group>
            <Button variant='info' type='submit'>
                Login
            </Button>
        </Form>
    );
};

export default LoginPage;
