import {
  Container,
  Nav,
  NavDropdown,
  Navbar,
  Dropdown,
  Row,
  Col,
  useState,
  Carousel,
  ExampleCarouselImage,
  Card,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Offer.css";

const Offer = () => {
  return (
    <>
      <section className="services py-5">
        <div className="container">
          <div className="container my-5">
            <h1 className="text-center text-light">WHAT WE OFFER</h1>
            <hr className="w-25 m-auto"></hr>
          </div>
          <div className="row">
            <div className="card col-sm-12 col-md-4 col-lg-4 col-12">
              <Card
                style={{ width: "26rem", height: "15rem" }}
                className="border-0 rounded-0"
              >
                {/* <Card.Header>STYLISH DESIGN</Card.Header> */}
                <Card.Body>
                  <Card.Title className="text-light text-center">
                    FULLY SUPPORT
                  </Card.Title>
                  <Card.Text className="text-light text-center">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Nostrum nam numquam voluptates cumque inventore, quibusdam
                    corporis consequatur amet.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="card col-sm-12 col-md-4 col-lg-4 col-12">
              <Card
                style={{ width: "26rem", height: "15rem" }}
                className="border-0 rounded-0"
              >
                {/* <Card.Header className='text-light'>Header</Card.Header> */}
                <Card.Body>
                  <Card.Title className="text-light text-center">
                    CREATED USING HTML5
                  </Card.Title>
                  <Card.Text className="text-light text-center">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Nostrum nam numquam voluptates cumque inventore, quibusdam
                    corporis consequatur amet.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="card col-sm-12 col-md-4 col-lg-4 col-12">
              <Card
                style={{ width: "26rem", height: "15rem" }}
                className="border-0 rounded-0 bg-"
              >
                {/* <Card.Header>Header</Card.Header> */}
                <Card.Body>
                  <Card.Title className="text-light text-center">
                    CREATED USING CSS3
                  </Card.Title>
                  <Card.Text className="text-light text-center">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Nostrum nam numquam voluptates cumque inventore, quibusdam
                    corporis consequatur amet.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="card col-sm-12 col-md-4 col-lg-4 col-12">
              <Card
                style={{ width: "26rem", height: "15rem" }}
                className="border-0 rounded-0"
              >
                {/* <Card.Header>STYLISH DESIGN</Card.Header> */}
                <Card.Body>
                  <Card.Title className="text-light text-center">
                    FULLY RESPONSIVE
                  </Card.Title>
                  <Card.Text className="text-light text-center">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Nostrum nam numquam voluptates cumque inventore, quibusdam
                    corporis consequatur amet.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="card col-sm-12 col-md-4 col-lg-4 col-12">
              <Card
                style={{ width: "26rem", height: "15rem" }}
                className="border-0 rounded-0"
              >
                {/* <Card.Header>STYLISH DESIGN</Card.Header> */}
                <Card.Body>
                  <Card.Title className="text-light text-center">
                    RETINA READY
                  </Card.Title>
                  <Card.Text className="text-light text-center">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Nostrum nam numquam voluptates cumque inventore, quibusdam
                    corporis consequatur amet.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="card col-sm-12 col-md-4 col-lg-4 col-12">
              <Card
                style={{ width: "26rem", height: "15rem" }}
                className="border-0 rounded-0"
              >
                {/* <Card.Header>STYLISH DESIGN</Card.Header> */}
                <Card.Body>
                  <Card.Title className="text-light text-center">
                    DOCUMENTATION READY
                  </Card.Title>
                  <Card.Text className="text-light text-center">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Nostrum nam numquam voluptates cumque inventore, quibusdam
                    corporis consequatur amet.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Offer;
