import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../../Home/Banner/Logo.png';
import { Link } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar collapseOnSelect expand="lg" sticky="top" variant="dark">
                        <Container>
                            <Navbar.Brand as={Link} to="/">
                                <img height="70" src={logo} alt="" />
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link as={Link} to="home">Home</Nav.Link>
                                    <Nav.Link as={Link} to="home#services">Services</Nav.Link>
                                </Nav>
                                <Nav>
                                    <Nav.Link as={Link} to="blogs">Blogs</Nav.Link>
                                    <Nav.Link as={Link} to="about">About</Nav.Link>
                                    {
                                        user ?
                                            <button className='btn btn-link text-secondary text-decoration-none' onClick={handleSignOut}>Sign Out</button>
                                            :
                                            <Nav.Link as={Link} to="login">
                                                Login
                                            </Nav.Link>}
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;