import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container } from 'react-bootstrap';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { FaQuoteLeft } from "react-icons/fa";
import './Sec7.css';

const options={
    responsive:{
        0:{
            items: 1,
        },
        600:{
            items: 2,
        },
        1000:{
            items: 3,
        }
    }
}

const Sec7 = () => {
    return (
        <>
            <section className='oyo'>
                <Container>
                    <h2 className='text-white fw-semibold fs-2 text-center'>WHAT OTHERS SAYING</h2>
                    <div className='pop'></div>
                    <div className='ipo'>
                        <OwlCarousel className='owl-theme' loop margin={10} autoplay {...options}>
                            <div class='item'>
                                <div className='a1'>
                                    <span className='ji'>
                                        <FaQuoteLeft />
                                    </span>
                                    <p>“ At vero eos et accusamus et iusto odio dignissimos ducimus qui molestias excepturi blanditis ”</p>
                                    <h6 className='fw-bold ko'>Ramshad Imeri - <em className='fw-light'>India,Malappura</em></h6>
                                </div>
                            </div>
                            <div class='item'>
                                <div className='a1'>
                                    <span className='ji'>
                                        <FaQuoteLeft />
                                    </span>
                                    <p>“ At vero eos et accusamus et iusto odio dignissimos ducimus qui molestias excepturi blanditis ”</p>
                                    <h6 className='fw-bold ko'>Ramshad Imeri - <em className='fw-light'>India,Malappura</em></h6>
                                </div>
                            </div>
                            <div class='item'>
                                <div className='a1'>
                                    <span className='ji'>
                                        <FaQuoteLeft />
                                    </span>
                                    <p>“ At vero eos et accusamus et iusto odio dignissimos ducimus qui molestias excepturi blanditis ”</p>
                                    <h6 className='fw-bold ko'>Ramshad Imeri - <em className='fw-light'>India,Malappura</em></h6>
                                </div>
                            </div>
                            <div class='item'>
                                <div className='a1'>
                                    <span className='ji'>
                                        <FaQuoteLeft />
                                    </span>
                                    <p>“ At vero eos et accusamus et iusto odio dignissimos ducimus qui molestias excepturi blanditis ”</p>
                                    <h6 className='fw-bold ko'>Ramshad Imeri - <em className='fw-light'>India,Malappura</em></h6>
                                </div>
                            </div>
                            <div class='item'>
                                <div className='a1'>
                                    <span className='ji'>
                                        <FaQuoteLeft />
                                    </span>
                                    <p>“ At vero eos et accusamus et iusto odio dignissimos ducimus qui molestias excepturi blanditis ”</p>
                                    <h6 className='fw-bold ko'>Ramshad Imeri - <em className='fw-light'>India,Malappura</em></h6>
                                </div>
                            </div>
                            <div class='item'>
                                <div className='a1'>
                                    <span className='ji'>
                                        <FaQuoteLeft />
                                    </span>
                                    <p>“ At vero eos et accusamus et iusto odio dignissimos ducimus qui molestias excepturi blanditis ”</p>
                                    <h6 className='fw-bold ko'>Ramshad Imeri - <em className='fw-light'>India,Malappura</em></h6>
                                </div>
                            </div>
                            <div class='item'>
                                <div className='a1'>
                                    <span className='ji'>
                                        <FaQuoteLeft />
                                    </span>
                                    <p>“ At vero eos et accusamus et iusto odio dignissimos ducimus qui molestias excepturi blanditis ”</p>
                                    <h6 className='fw-bold ko'>Ramshad Imeri - <em className='fw-light'>India,Malappura</em></h6>
                                </div>
                            </div>
                            <div class='item'>
                                <div className='a1'>
                                    <span className='ji'>
                                        <FaQuoteLeft />
                                    </span>
                                    <p>“ At vero eos et accusamus et iusto odio dignissimos ducimus qui molestias excepturi blanditis ”</p>
                                    <h6 className='fw-bold ko'>Ramshad Imeri - <em className='fw-light'>India,Malappura</em></h6>
                                </div>
                            </div>
                            <div class='item'>
                                <div className='a1'>
                                    <span className='ji'>
                                        <FaQuoteLeft />
                                    </span>
                                    <p>“ At vero eos et accusamus et iusto odio dignissimos ducimus qui molestias excepturi blanditis ”</p>
                                    <h6 className='fw-bold ko'>Ramshad Imeri - <em className='fw-light'>India,Malappura</em></h6>
                                </div>
                            </div>
                            <div class='item'>
                                <div className='a1'>
                                    <span className='ji'>
                                        <FaQuoteLeft />
                                    </span>
                                    <p>“ At vero eos et accusamus et iusto odio dignissimos ducimus qui molestias excepturi blanditis ”</p>
                                    <h6 className='fw-bold ko'>Ramshad Imeri - <em className='fw-light'>India,Malappura</em></h6>
                                </div>
                            </div>
                            <div class='item'>
                                <div className='a1'><span className='ji'>
                                    <FaQuoteLeft />
                                </span>
                                    <p>“ At vero eos et accusamus et iusto odio dignissimos ducimus qui molestias excepturi blanditis ”</p>
                                    <h6 className='fw-bold ko'>Ramshad Imeri - <em className='fw-light'>India,Malappura</em></h6></div>
                            </div>
                            <div class='item'>
                                <div className='a1'>
                                    <span className='ji'>
                                        <FaQuoteLeft />
                                    </span>
                                    <p>“ At vero eos et accusamus et iusto odio dignissimos ducimus qui molestias excepturi blanditis ”</p>
                                    <h6 className='fw-bold ko'>Ramshad Imeri - <em className='fw-light'>India,Malappura</em></h6>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                </Container>
            </section>
        </>
    )
}
export default Sec7;