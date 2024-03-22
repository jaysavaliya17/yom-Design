import { Container, Row, Col } from 'react-bootstrap';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import './css/Sec6.css';

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
const Sec6 = () => {
    return (
        <>
            <section className='sec6'>
                <h1 className='text-uppercase fw-light text-white'>recent photos</h1>
                <div class="section-dec"></div>
                <OwlCarousel className='owl-theme' margin={10} nav navText={['prev', 'next']} loop {...options} >
                    <div class='item'>
                        <h4 className='position-relative'>
                            <img src={require('./img/1.jpg')}></img>
                            <div className='layer'> </div>
                        </h4>
                    </div>
                    <div class='item'>
                        <h4 className='position-relative'>
                            <img src={require('./img/2.jpg')}></img>
                            <div className='layer'> </div>
                        </h4>
                    </div>
                    <div class='item'>
                        <h4 className='position-relative'>
                            <img src={require('./img/3.jpg')}></img>
                            <div className='layer'> </div>
                        </h4>
                    </div>
                    <div class='item'>
                        <h4 className='position-relative'>
                            <img src={require('./img/4.jpg')}></img>
                            <div className='layer'> </div>
                        </h4>
                    </div>
                    <div class='item'>
                        <h4 className='position-relative'>
                            <img src={require('./img/5.jpg')}></img>
                            <div className='layer'> </div>


                        </h4>
                    </div>
                    <div class='item'>
                        <h4 className='position-relative'>
                            <img src={require('./img/6.jpg')}></img>
                            <div className='layer'> </div>


                        </h4>
                    </div>
                    <div class='item'>
                        <h4 className='position-relative'>
                            <img src={require('./img/7.jpg')}></img>
                            <div className='layer'> </div>


                        </h4>
                    </div>
                    <div class='item'>
                        <h4 className='position-relative'>
                            <img src={require('./img/5.jpg')}></img>
                            <div className='layer'> </div>


                        </h4>
                    </div>

                </OwlCarousel>
            </section>


        </>
    )
}
export default Sec6