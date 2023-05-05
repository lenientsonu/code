import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import HeaderCartButton from "../Cart/HeaderCartButton";
import { NavLink } from "react-router-dom";

import "./Header.css";

const Header = () => {
    return (
        <>
            <Navbar bg='dark' variant='dark' sticky='top'>
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

                        <Nav.Link>
                            <NavLink
                                activeClassName='active'
                                className='test'
                                to='/login'
                            >
                                Login
                            </NavLink>
                        </Nav.Link>

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
                    <HeaderCartButton />
                </Container>
            </Navbar>
            <div className='title'>
                <h1>The Generics</h1>
            </div>
        </>
    );
};

export default Header;
