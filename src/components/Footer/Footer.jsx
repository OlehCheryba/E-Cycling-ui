import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';


const Footer = (props) => {
  return (
    <Container>
      <Row>
        <Col>
          <h2>Social networks</h2>
          <a href="https://www.instagram.com/" rel="noopener noreferrer" target="_blank">
            <img width={24} src="img/ikon-instagram.png" alt="Instagram"/>
            <span> Instagram</span>
          </a>
          <br/>
          <a href="https://www.facebook.com/" rel="noopener noreferrer" target="_blank">
            <img width={24} src="img/ikon-facebook.png" alt="Facebook"/>
            <span> Facebook</span>
          </a>
          <br/>
          <a href="https://www.linkedin.com/" rel="noopener noreferrer" target="_blank">
            <img width={24} src="img/ikon-linkedin.png" alt="LinkedIn"/>
            <span> LinkedIn</span>
          </a>
          <br/>
          <a href="https://twitter.com/" rel="noopener noreferrer" target="_blank">
            <img width={24} src="img/ikon-twitter.png" alt="Twitter"/>
            <span> Twitter</span>
          </a>
        </Col>
        <Col>
          <h2>Contacts</h2>
          <p>
            Lviv, Ukraine 98371
          </p>
          <p>
            +380-98-752-69-440
          </p>
          <p>
            Free number:
            <br/>
            0-800-690-0900
          </p>
        </Col>
      </Row>
      <span>© Copyright 2019 Oleg Cheryba</span>
    </Container>
  )
}

export default Footer