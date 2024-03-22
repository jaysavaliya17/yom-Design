// import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import './Slider.css';
// import ExampleCarouselImage from 'react-bootstrap/ExampleCarouselImage';
// import {Col} from 'react-bootstrap';


const Slider = () => {
    return (
        <>
            {/* <section>
                <Col xs="12">
                <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={require(`./img/1.jpg`)} class="d-block w-100" alt="..."></img>
                        </div>
                        <div class="carousel-item">
                            <img src={require(`./img/2.jpg`)} class="d-block w-100" alt="..."></img>
                        </div>
                        <div class="carousel-item">
                            <img src={require(`./img/3.jpg`)} class="d-block w-100" alt="..."></img>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
                </Col>
            </section> */}
            <Carousel>
                <Carousel.Item interval={1000} className='gigo'>
                    <img src={require('./img/1.jpg')}></img>
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500} className='gigo'>
                    <img src={require('./img/2.jpg')}></img>
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='gigo'>
                    <img src={require('./img/3.jpg')}></img>
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}
export default Slider