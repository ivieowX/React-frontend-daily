import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Home from "./Home";
import Posts from "./Posts";
import Profile from "./Profile";
import Contact from "./Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const Header = () => {
    return (
        <Router>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#">
                        My WebApplication
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav 
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: "100px" }}
                        >
                            <Nav >
                                <Link to="/" style={{ padding: 15, textDecoration: "none" }}>
                                    Home
                                </Link>
                                <Link
                                    to="/Posts"
                                    style={{ padding: 15, textDecoration: "none" }}
                                >
                                    Posts
                                </Link>
                                <Link
                                    to="/Profile"
                                    style={{ padding: 15, textDecoration: "none" }}
                                >
                                    Profile
                                </Link>
                                <Link
                                    to="/Contacts"
                                    style={{ padding: 15, textDecoration: "none" }}
                                >
                                    Contacts
                                </Link>
                            </Nav>
                            <NavDropdown
                                title="Link"
                                id="navbarScrollingDropdown"
                                style={{ padding: 7, textDecoration: "none" }}
                            >
                                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"

                                className="me-2"
                                aria-label="Search"
                            />
                        </Form>
                        <Nav>
                            <img className="App-avartar" src="/images/User.png" alt="Logo" />
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Posts" element={<Posts />} />
                    <Route path="/Profile" element={<Profile />} />
                    <Route exact path="/Home" element={<Home />} />
                    <Route path="/Contacts" element={<Contact />} />
                </Routes>
            </div>
            
        </Router>
    );
};
export default Header;