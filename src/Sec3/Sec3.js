import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Sec3.css';
import { BsXCircleFill, BsPieChartFill, BsPlayCircleFill } from "react-icons/bs";

const Sec3 = (props) => {
    return (
        <>
            <section className='sec3'>
                <Container>
                    <h1 align="center" className='text-white jay'>WHAT WE OFFER</h1>
                    <Row className='w-100'>
                        {/* <Col xs={12} md={6} lg={4}>
                            <div className='set'>
                                <BsXCircleFill className='icon' />
                                <h3 className='text-white pb-3'>STYLISH DESIGN</h3>
                                <h6 className='text-white mee'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum nam numquam voluptates cumque inventore, quibusdam corporis consequatur amet.</h6>
                            </div>
                        </Col>
                        <Col xs={12} md={6} lg={4}>
                            <div className='set'>
                                <BsXCircleFill className='icon' />
                                <h3 className='text-white pb-3'>FULLY RESPONSIVE</h3>
                                <h6 className='text-white mee'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum nam numquam voluptates cumque inventore, quibusdam corporis consequatur amet.</h6>
                            </div>
                        </Col>
                        <Col xs={12} md={6} lg={4}>
                            <div className='set'>
                                <BsPlayCircleFill className='icon' />
                                <h3 className='text-white pb-3'>RETINA READY</h3>
                                <h6 className='text-white mee'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum nam numquam voluptates cumque inventore, quibusdam corporis consequatur amet.</h6>
                            </div>
                        </Col> */}
                        {
                            props.title.map((val) => {
                                return (
                                    <>
                                        <Col xs={12} md={6} lg={4}>
                                            <div className='set'>
                                            <BsPlayCircleFill className='icon' />
                                                <h3 className='text-white pb-3'>{val.title}</h3>
                                                <h6 className='text-white mee'>{val.subtit}</h6>
                                            </div>
                                        </Col>
                                    </>
                                )
                            })
                        }
                    </Row>

                </Container>
            </section>
        </>
    )
}
export default Sec3