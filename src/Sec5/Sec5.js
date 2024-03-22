import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Sec5.css';
const Sec5 = (props) => {
    return (
        <>
            <section className=''>
                {/* <Row className='w-100 kop'>
                        <Col xs="12" sm="12" md="12" lg="6" xl="6" xxl="6" className='left '>
                            <h3 className='fw-bold op mb-4'>TO KNOW ABOUT THIS THEME READ THIS</h3>
                            <h6 className='fs-5 mb-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi ut explicabo magni sapiente.</h6>
                            <h6 className='fs-5 io'>Inventore at quia, vel in repellendus, cumque dolorem autem ad quidem mollitia porro blanditiis atque rerum debitis eveniet nostrum aliquam. Sint aperiam expedita sapiente amet officia quis perspiciatis adipisci, iure dolorem esse exercitationem!</h6>
                        </Col>
                        <Col xs="12" sm="12" md="12" lg="6" xl="6" xxl="6" className='p-0'>
                            <img src={require('./img/1.jpg')} className='w-100 img-fluid h-100'></img>
                        </Col>
                    </Row> */}
                {
                    props.title3.map((val) => {
                        return (
                            <>
                                <Row className='w-100 kop'>
                                    <Col xs="12" sm="12" md="12" lg="6" xl="6" xxl="6" className='left '>
                                        <h3 className='fw-bold op mb-4'>{val.main}</h3>
                                        <h6 className='fs-5 mb-3'>{val.main2}</h6>
                                        <h6 className='fs-5 io'>{val.para}</h6>
                                    </Col>
                                    <Col xs="12" sm="12" md="12" lg="6" xl="6" xxl="6" className='p-0'>
                                        <img src={val.img} className='w-100 img-fluid h-100'></img>
                                    </Col>
                                </Row>
                            </>
                        )
                    })
                }
            </section>
        </>
    )
}
export default Sec5