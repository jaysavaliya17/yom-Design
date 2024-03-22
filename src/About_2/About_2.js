import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaTwitter, FaFacebookF, FaInstagramSquare, FaRss } from "react-icons/fa";
import { TiSocialGooglePlus } from "react-icons/ti";
import './About_2.css';
const About_2 = () => {
    return (
        <>
            <section>
                <Container>
                    <Row className='g-5 w-100'>
                        <Col xs={12} md={6} lg={4} xl={4} >
                            <div className='box box1'>
                                <img src={require('./img/1.jpg')} className='img-fluid w-100 box_img'></img>
                                <h4 className='fs-4 fw-bold mt-2  text-center'>Robert Imeri</h4>
                                <h6 className=' jiya text-center'>Loretta Johnson</h6>
                                <p className='mt-3 text-center px-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit alis quam est leo, imperdiet eget dictum sed, congue non erosa senean sed ligula hendrerit...</p>
                                <div className='simbol d-flex bg-white list-unstyled'>
                                    <li><a href="#"><FaFacebookF /></a></li>
                                    <li><a href="#"><FaTwitter /></a></li>
                                    <li><a href="#"><TiSocialGooglePlus /></a></li>
                                    <li><a href="#"><FaInstagramSquare /></a></li>
                                    <li><a href="#"><FaRss /></a></li>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={6} lg={4} xl={4}>
                            <div className='box box1'>
                                <img src={require('./img/2.jpg')} className='img-fluid w-100 box_img'></img>
                                <h4 className='fs-4 fw-bold mt-2  text-center'>Elizabeth Tharp</h4>
                                <h6 className=' jiya text-center'>Manager</h6>
                                <p className='mt-3 text-center px-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit alis quam est leo, imperdiet eget dictum sed, congue non erosa senean sed ligula hendrerit...</p>
                                <div className='simbol d-flex bg-white list-unstyled'>
                                    <li><a href="#"><FaFacebookF /></a></li>
                                    <li><a href="#"><FaTwitter /></a></li>
                                    <li><a href="#"><TiSocialGooglePlus /></a></li>
                                    <li><a href="#"><FaInstagramSquare /></a></li>
                                    <li><a href="#"><FaRss /></a></li>
                                </div>                          
                             </div>
                        </Col>
                        <Col xs={12} md={6} lg={4} xl={4}>
                            <div className='box box1'>
                                <img src={require('./img/3.jpg')} className='img-fluid w-100 box_img'></img>
                                <h4 className='fs-4 fw-bold mt-2  text-center'>Loretta Johnson</h4>
                                <h6 className=' jiya text-center'>Marketing Agent</h6>
                                <p className='mt-3 text-center px-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit alis quam est leo, imperdiet eget dictum sed, congue non erosa senean sed ligula hendrerit...</p>
                                <div className='simbol d-flex bg-white list-unstyled'>
                                    <li><a href="#"><FaFacebookF /></a></li>
                                    <li><a href="#"><FaTwitter /></a></li>
                                    <li><a href="#"><TiSocialGooglePlus /></a></li>
                                    <li><a href="#"><FaInstagramSquare /></a></li>
                                    <li><a href="#"><FaRss /></a></li>
                                </div>  
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
export default About_2