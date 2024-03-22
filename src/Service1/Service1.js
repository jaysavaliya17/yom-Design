import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaShieldHalved, FaRegFutbol, FaRenren, FaSafari, FaSquareGithub, FaSquareTwitter } from "react-icons/fa6";
import './Ser.css';
const Service1 = () => {
    return (
        <>
            <section className='ser1'>
                <Container>
                    <Row className='g-5 w-100'>
                        <Col className='p-2 ' xs={12} sm={6} md={6} lg={4} xl={4} xxl={4}>
                            <span className='text-white text-center fs-1 d-flex justify-content-center '><FaShieldHalved /></span>
                            <h3 className='text-white text-center mb-4 mt-2 text-uppercase'>Fully Support</h3>
                            <p className='text-white text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum nam numquam voluptates cumque inventore, quibusdam corporis consequatur amet.</p>
                        </Col>
                        <Col xs={12} sm={6} md={6} lg={4} xl={4} xxl={4} className="p-2 ">
                            <span className='text-white text-center fs-1 d-flex justify-content-center'><FaRegFutbol /></span>
                            <h3 className='text-white text-center mb-4 mt-2 text-uppercase'>CREATED USING HTML5</h3>
                            <p className='text-white text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum nam numquam voluptates cumque inventore, quibusdam corporis consequatur amet.</p>
                        </Col>
                        <Col xs={12} sm={6} md={6} lg={4} xl={4} xxl={4} className="p-2 ">
                            <span className='text-white text-center fs-1 d-flex justify-content-center'><FaRenren /></span>
                            <h3 className='text-white text-center mb-4 mt-2 text-uppercase'>CREATED USING CSS3</h3>
                            <p className='text-white text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum nam numquam voluptates cumque inventore, quibusdam corporis consequatur amet.</p>
                        </Col>
                        <Col xs={12} sm={6} md={6} lg={4} xl={4} xxl={4} className="p-2 ">
                            <span className='text-white text-center fs-1 d-flex justify-content-center'><FaSafari /></span>
                            <h3 className='text-white text-center mb-4 mt-2 text-uppercase'>FULLY RESPONSIVE</h3>
                            <p className='text-white text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum nam numquam voluptates cumque inventore, quibusdam corporis consequatur amet.</p>
                        </Col>
                        <Col xs={12} sm={6} md={6} lg={4} xl={4} xxl={4} className="p-2 ">
                            <span className='text-white text-center fs-1 d-flex justify-content-center'><FaSquareGithub /></span>
                            <h3 className='text-white text-center mb-4 mt-2 text-uppercase'>RETINA READY</h3>
                            <p className='text-white text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum nam numquam voluptates cumque inventore, quibusdam corporis consequatur amet.</p>
                        </Col>
                        <Col xs={12} sm={6} md={6} lg={4} xl={4} xxl={4} className="p-2 ">
                            <span className='text-white text-center fs-1 d-flex justify-content-center'><FaSquareTwitter /></span>
                            <h3 className='text-white text-center mb-4 mt-2 text-uppercase'>DOCUMENTATION READY</h3>
                            <p className='text-white text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum nam numquam voluptates cumque inventore, quibusdam corporis consequatur amet.</p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
export default Service1