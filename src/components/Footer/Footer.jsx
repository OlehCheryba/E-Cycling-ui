import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';


function Footer() {
  return (
    <Container>
      <Row>
        <Col>
          <h2>Ми у соцмережах</h2>
          <a href="https://www.instagram.com/" target="_blank">
            <img width={24} src="img/ikon-instagram.png" alt="Інстаграм"/>
            <span> Instagram</span>
          </a>
          <br/>
          <a href="https://www.facebook.com/"  target="_blank">
            <img width={24} src="img/ikon-facebook.png" alt="Фейсбук"/>
            <span> Facebook</span>
          </a>
          <br/>
          <a href="https://www.linkedin.com/" target="_blank">
            <img width={24} src="img/ikon-linkedin.png" alt="ЛінкедІн"/>
            <span> LinkedIn</span>
          </a>
          <br/>
          <a href="https://twitter.com/" target="_blank">
            <img width={24} src="img/ikon-twitter.png" alt="Твіттер"/>
            <span> Twitter</span>
          </a>
        </Col>
        <Col>
          <h2>Кoнтакти</h2>
          <p>
            м. Львів, Україна 98371
          </p>
          <p>
            +380-98-752-69-440
          </p>
          <p>
            Безкоштовний номер:
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