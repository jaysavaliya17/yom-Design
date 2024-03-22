import { Container, Nav, NavDropdown, Navbar, Dropdown, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

import './Head.css';
const Head = () => {
    return (
        <>
            <Col xs="12" className='sticky-top'>
                <Navbar expand="lg" className="bg-dark yom">
                    <Container>
                        <Navbar.Brand href="/" className='text-white text-uppercase fw-bold fs-3 p-3'>yom</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto px-5">
                                <Nav.Link href="/" className='text-white text-uppercase px-4 com1'>      <Link to="/" className='text-white text-decoration-none'>home</Link>
                                </Nav.Link>
                                <NavDropdown title="pages" className='drop-danger px-3' id="basic-nav-dropdown">
                                    <NavDropdown.Item href="/service" className='items'>      <Link to="/service" className='text-white text-decoration-none'>service</Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.4">
                                        Separated link
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="blog" className='drop-danger px-3' id="basic-nav-dropdown">
                                    <NavDropdown.Item href="/blog" className='items'><Link to="/blog" className='text-white text-decoration-none'>single-blog</Link></NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.4">
                                        Separated link
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="/about" className='text-white text-uppercase px-4'>      <Link to="/about" className='text-white text-decoration-none'>about</Link>
                                </Nav.Link>
                                <NavDropdown title="work" className='drop-danger px-3' id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1" className='items'>Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.4">
                                        Separated link
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="#home" className='text-white text-uppercase px-4'>contact</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Col>
        </>
    )
}
export default Head