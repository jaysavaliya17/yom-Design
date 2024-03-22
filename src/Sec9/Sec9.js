import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import './Sec9.css';
const Sec9 = () => {
    return (
        <>
            <section>
                <Container>
                    <Row className='g-5 w-100'>
                        <Col xs={12} md={6} lg={4} xl={4} >
                            <div className='box'>
                                <img src={require('./img/1.jpg')} className='img-fluid w-100 box_img'></img>
                                <h4 className='fs-5 fw-bold mt-2 mb-4'>LORUM IPSUM5</h4>
                                <span className=' jiya'>Syam Kesav / 6 June 2015 / Uncategorized</span>
                                <p className='mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit alis quam est leo, imperdiet eget dictum sed, congue non erosa senean sed ligula hendrerit...</p>
                                <div className='kiya pb-3 '><a href="#" className='text-decoration-none text-uppercase fw-bold'>read more</a></div>
                            </div>
                        </Col>
                        <Col xs={12} md={6} lg={4} xl={4}>
                            <div className='box'>
                                <img src={require('./img/2.jpg')} className='img-fluid w-100 box_img'></img>
                                <h4 className='fs-5 fw-bold mt-2 mb-4'>LORUM IPSUM5</h4>
                                <span className=' jiya'>Syam Kesav / 6 June 2015 / Uncategorized</span>
                                <p className='mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit alis quam est leo, imperdiet eget dictum sed, congue non erosa senean sed ligula hendrerit...</p>
                                <div className='kiya pb-3'><a href="#" className='text-decoration-none text-uppercase fw-bold'>read more</a></div>
                            </div>
                        </Col>
                        <Col xs={12} md={6} lg={4} xl={4}>
                            <div className='box'>
                                <img src={require('./img/3.jpg')} className='img-fluid w-100 box_img'></img>
                                <h4 className='fs-5 fw-bold mt-2 mb-4'>LORUM IPSUM5</h4>
                                <span className=' jiya'>Syam Kesav / 6 June 2015 / Uncategorized</span>
                                <p className='mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit alis quam est leo, imperdiet eget dictum sed, congue non erosa senean sed ligula hendrerit...</p>
                                <div className='kiya pb-3'><a href="#" className='text-decoration-none text-uppercase fw-bold'>read more</a></div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
export default Sec9