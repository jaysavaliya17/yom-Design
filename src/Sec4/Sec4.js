import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Sec4.css';

const Sec4 = (props) => {
    return (
        <>
            <section className="sec4">
                <Container>
                    {/* <h4 align="center" className='fw-bold fs-3 pb-5'>OVER 3000 PEOPLE ALREADY DOWNLOADED YOM</h4>
                    <h6 align="center" className='jay'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat quod voluptate consequuntur ad quasi, dolores obcaecati ex aliquid, dolor provident accusamus omnis dolorum ipsam. Voluptatem ipsum expedita, corporis facilis laborum asperiores nostrum! Amet porro numquam ratione temporibus quia dolorem sint lorem voluptates quasi mollitia.</h6>
                    <Row className='op'>
                        <Col xs="12" sm="12" md="6" lg="6" xl="6" className='lol'>
                            <Button variant="outline-dark" className='rounded-0 btn1'>learn more</Button>
                        </Col >
                        <Col xs="12" sm="12" md="6" lg="6" xl="6" className='lol1'>
                            <Button variant="outline-dark" className='rounded-0 btn1'>read more</Button></Col>
                    </Row> */}
                    {
                        props.title2.map((val) => {
                            return (
                                <>
                                    <h4 align="center" className='fw-bold fs-3 pb-5'>{val.title}</h4>
                                    <h6 align="center" className='jay'>{val.sub}</h6>
                                    <Row className='op w-100'>
                                        <Col xs="12" sm="12" md="6" lg="6" xl="6" className='lol'>
                                            <Button variant="outline-dark" className='rounded-0 btn1'>{val.btnprev}</Button>
                                        </Col >
                                        <Col xs="12" sm="12" md="6" lg="6" xl="6" className='lol1'>
                                            <Button variant="outline-dark" className='rounded-0 btn1'>{val.btnnext}</Button></Col>
                                    </Row> 
                                </>
                            )
                        })
                    }
                </Container>
            </section>
        </>
    )
}
export default Sec4