import React from 'react'
import "../App.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';


function Home() {
  return (
    <Container >
      <Row className='mb-4 mt-5'>
        <Col md={7} >
          <img
            src="/images/MywebImage.png"
            alt="Logo"
            style={{ borderRadius: 5, maxWidth: "90%", height: "auto" }}
          />
        </Col>
        <Col md={5} >
          <h1 style={{ fontSize: '52px', color: 'black',fontWeight: 'bold' }}> Welcome to <br/>My Web </h1>
          <hr />
          <h2 className='mb-1'>News</h2>
          <Carousel data-bs-theme="dark" >
            <Carousel.Item>
              <img
                className="d-block w-100"
                style={{ maxWidth: "100%", height: "auto" }}
                src="./images/MywebImage.png"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                style={{ maxWidth: "100%", height: "auto" }}
                src="./images/MywebImage.png"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                style={{ maxWidth: "100%", height: "auto" }}
                src="./images/MywebImage.png"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel> 

         </Col>
      </Row>
    </Container>

  )
}

export default Home