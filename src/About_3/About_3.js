import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './About_3.css';
const About_3 = () => {
    return (
        <>
            <section className='about3'>
                <Container>
                    <h2 className='text-white  text-center text-uppercase ola'>Our Clients</h2>
                    <div className='div'></div>
                    <Row className='w-100'>
                        <Col xs={12} sm={6} md={4} lg={2}><div className='box3'><img src={require('./img/1.png')} className='w-100 img-fluid h-100'></img></div></Col>
                        <Col xs={12} sm={6} md={4} lg={2}><div className='box3'><img src={require('./img/2.png')} className='w-100 img-fluid h-100'></img></div></Col>
                        <Col xs={12} sm={6} md={4} lg={2}><div className='box3'><img src={require('./img/3.png')} className='w-100 img-fluid h-100'></img></div></Col>
                        <Col xs={12} sm={6} md={4} lg={2}><div className='box3'><img src={require('./img/4.png')} className='w-100 img-fluid h-100'></img></div></Col>
                        <Col xs={12} sm={6} md={4} lg={2}><div className='box3'><img src={require('./img/5.png')} className='w-100 img-fluid h-100'></img></div></Col>
                        <Col xs={12} sm={6} md={4} lg={2}><div className='box3'><img src={require('./img/6.png')} className='w-100 img-fluid h-100'></img></div></Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
export default About_3