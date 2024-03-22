import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { FaTwitter, FaFacebookF, FaDribbble, FaTumblr } from "react-icons/fa";
import Form from 'react-bootstrap/Form';
import './Foot.css';
const Foot = () => {
    return (
        <>
            <section className='pintu'>
                <Container>
                    <Row className='g-5 piya w-100'>
                        <Col xs={12} md={4} lg={3} xl={3}>
                            <h1 className='text-uppercase love fs-1 fw-bold'><span className='hate'>yom</span></h1>
                            <p className='p1' >©2015 Yom. All rights reserved.</p>
                            <ul className='d-flex list-unstyled aui'>
                                <li><FaFacebookF /></li>
                                <li><FaTwitter /></li>
                                <li><FaDribbble /></li>
                                <li><FaTumblr /></li>
                            </ul>
                        </Col>
                        <Col xs={12} md={4} lg={3} xl={3}>
                            <h4 className='fs-2 topo'>Some pages</h4>
                            <ul className='hero list-unstyled'>
                                <li>Home</li>
                                <li>View some works here</li>
                                <li>Follow our blog</li>
                                <li>Contact us</li>
                                <li>Our services </li>
                            </ul>
                        </Col>
                        <Col xs={12} md={4} lg={3} xl={3}>
                        <h4 className='fs-2 topo'>Recent posts</h4>
                        <ul className='hero list-unstyled'>
                                <li>Hello World!</li>
                                <li>This is the post title here</li>
                                <li>Our happy day</li>
                                <li>The first works done</li>
                                <li>The cats and dogs</li>
                            </ul>
                        </Col>
                        <Col xs={12} md={4} lg={3} xl={3}>
                        <h4 className='fs-2 topo'>Email updats</h4>
                        <p className='kite'>We want to share our latest trends, news and insights with you.</p>
                        <Form.Control type="email" className='food rounded-0' placeholder="Enter email" />
                        <div className='btn btn-success text-white  text-capitalize px-4 py-1 merit rounded-0'>submit</div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
export default Foot