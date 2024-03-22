import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { FaInfo } from "react-icons/fa";
import { FaTwitter, FaFacebookF, FaInstagramSquare, FaRss, FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { TiSocialGooglePlus } from "react-icons/ti";

import './Blog.css';
const Blog = () => {
    return (
        <>
            <section className='blog'>
                <Container>
                    <Row className='g-5 w-100'>
                        <Col xs={12} md={12} lg={8} xl={8} xxl={8}>
                            <div className='boxsize'>
                                <img src={require('./img/1.jpg')} className='w-100 img-fluid object-fit-cover' ></img>
                                <div className='content w-100 p-5'>
                                    <h3 className='fw-bold mb-4'>LORUM IPSUM5</h3>
                                    <span className='mall'><a href="#">Manohar Raj</a><em>/</em><a href="#">6 June 2015</a><em>/</em><a href="#">Uncategorized</a></span>
                                    <p className='korea'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis cupiditate cumque vitae necessitatibus recusandae suscipit ipsum a harum illo odit, facilis optio aspernatur, accusantium mollitia aut incidunt quasi earum libero possimus quaerat iste blanditiis assumenda dolorum ducimus ab.<br></br><br></br><em className='hello'><FaInfo className='led fs-6' /></em><span className='fst-italic fs-5 fw-bolder '>Quis, sequi illo nobis velit. Quas minima corporis quis laborum, ex odit natus.</span><br></br><br></br>Blanditiis possimus voluptas similique numquam consequatur dolorem labore veritatis quaerat laboriosam, porro tenetur vel exercitationem laborum aperiam repellat expedita ipsum corrupti perspiciatis! Quia necessitatibus totam repudiandae ipsam aut repellendus, aspernatur soluta consectetur aperiam accusantium aliquid beatae nihil magni nulla, similique minus perspiciatis provident qui veritatis dolorum quasi sint. Quam impedit in eos illum sint officiis reiciendis repellendus quia, similique ipsa porro accusantium dolores sunt error, ex, tempora et voluptatibus eveniet.<br></br><br></br>Voluptatibus libero laboriosam tempore rerum error non. Perspiciatis deleniti iste a. Illo ipsum, commodi vel necessitatibus assumenda veritatis a velit possimus sint!</p>
                                    <div className='kite'>
                                        <span className='goli'>Share on:<a href="#" className='ms-2'>facebook</a><em>,</em><a href="#">twitter</a><em>,</em><a href="#">linkedin</a><em>,</em><a href="#">instagram</a></span>
                                    </div>
                                </div>
                                <div className='row gy-3'>
                                    <div className='col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 prev d-flex justify-content-center'>
                                        <a href="#" className='btn btn-secondary text-uppercase rounded-0 '><FaAngleLeft className='me-2' />Previous</a>
                                    </div>
                                    <div className='col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 next d-flex justify-content-center '>
                                        <a href="#" className='btn btn-secondary text-uppercase rounded-0'><FaAngleRight className='me-2' />next</a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={12} lg={4} xl={4} xxl={4}>
                            <div className='boxsize'>
                                <h1 className='xd text-uppercase fw-medium '>Search here</h1>
                                <div className='line'></div>
                                <Form.Control type="email" className='food rounded-0' placeholder="Type Keyword" />
                                <div className='inner1'>
                                    <h2 className='xd text-uppercase fw-medium'>About Us</h2>
                                    <div className='line'></div>
                                    <p className='korea'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique earum quod iste, natus quaerat facere a rem dolor sit amet, et placeat nemo.</p>
                                    <ul className='d-flex list-unstyled milo'>
                                        <li><a href="#"><FaFacebookF /></a></li>
                                        <li><a href="#"><FaTwitter /></a></li>
                                        <li><a href="#" ><TiSocialGooglePlus className='hhh' /></a></li>
                                        <li><a href="#"><FaInstagramSquare /></a></li>
                                        <li><a href="#"><FaRss /></a></li>
                                    </ul>
                                </div>
                                <div className='inner2'>
                                    <h2 className='xd text-uppercase fw-medium mt-5'>Recent Posts</h2>
                                    <div className='line'></div>
                                    <ul className='ttt'>
                                        <li>
                                            <em className='ggg '>
                                                <img src={require('./img/2.jpg')}></img>
                                                <span className='fw-medium'>Jhony Sebastian</span>
                                            </em>
                                            <span class="post-info">10 June 2015</span>
                                        </li>
                                        <li>
                                            <em className='ggg '>
                                                <img src={require('./img/4.jpg')}></img>
                                                <span className='fw-medium'>Ramshad Padinjarayil</span>
                                            </em>
                                            <span class="post-info">9 June 2015</span>
                                        </li>
                                        <li>
                                            <em className='ggg '>
                                                <img src={require('./img/3.jpg')}></img>
                                                <span className='fw-medium'>Akil Raj</span>
                                            </em>
                                            <span class="post-info">7 June 2015</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className='inner3'>
                                    <h1 className='xd text-uppercase fw-medium '>FROM FLICKR</h1>
                                    <div className='line'></div>
                                    <Row className='g-0 gy-4 ooo'>
                                        <Col xs={2} sm={2} md={3} lg={4} xl={4} xxl={4}>
                                            <a href="#">
                                                <img src={require('./img/5.jpg')}></img>
                                            </a>
                                        </Col>
                                        <Col xs={2} sm={2} md={3} lg={4} xl={4} xxl={4}>
                                            <a href="#">
                                                <img src={require('./img/6.jpg')}></img>
                                            </a>
                                        </Col>
                                        <Col xs={2} sm={2} md={3} lg={4} xl={4} xxl={4}>
                                            <a href="#">
                                                <img src={require('./img/7.jpg')}></img>
                                            </a>
                                        </Col>
                                        <Col xs={2} sm={2} md={3} lg={4} xl={4} xxl={4}>
                                            <a href="#">
                                                <img src={require('./img/8.jpg')}></img>
                                            </a>
                                        </Col>
                                        <Col xs={2} sm={2} md={3} lg={4} xl={4} xxl={4}>
                                            <a href="#">
                                                <img src={require('./img/9.jpg')}></img>
                                            </a>
                                        </Col>
                                        <Col xs={2} sm={2} md={3} lg={4} xl={4} xxl={4}>
                                            <a href="#">
                                                <img src={require('./img/10.jpg')}></img>
                                            </a>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
export default Blog