import React, { useContext } from "react";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import HeaderCartButton from "../Cart/HeaderCartButton";
import { NavLink } from "react-router-dom";
import AuthContext from "../../store/auth-context";

import "./Header.css";

const Header = () => {
    const authCtx = useContext(AuthContext);

    return (
        <>
            <Navbar bg='dark' variant='dark' fixed='top'>
                <Container>
                    {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
                    <Nav className='me-auto'>
                        <Nav.Link>
                            <NavLink
                                activeClassName='active'
                                className='test'
                                to='/'
                            >
                                Home
                            </NavLink>
                        </Nav.Link>
                        <Nav.Link>
                            <NavLink
                                activeClassName='active'
                                className='test'
                                to='/store'
                            >
                                Store
                            </NavLink>
                        </Nav.Link>
                        <Nav.Link>
                            <NavLink
                                activeClassName='active'
                                className='test'
                                to='/about'
                            >
                                About
                            </NavLink>
                        </Nav.Link>

                        {!authCtx.isLoggedIn && (
                            <Nav.Link>
                                <NavLink
                                    activeClassName='active'
                                    className='test'
                                    to='/login'
                                >
                                    Login
                                </NavLink>
                            </Nav.Link>
                        )}

                        <Nav.Link>
                            <NavLink
                                activeClassName='active'
                                className='test'
                                to='/contact'
                            >
                                Contact
                            </NavLink>
                        </Nav.Link>
                    </Nav>
                    {authCtx.isLoggedIn && (
                        <Button variant='info' className='logout' onClick={authCtx.logout}>
                            Logout
                        </Button>
                    )}
                    {authCtx.isLoggedIn && <HeaderCartButton />}
                </Container>
            </Navbar>
            <div className='title'>
                <h1>The Generics</h1>
            </div>
        </>
    );
};

export default Header;
