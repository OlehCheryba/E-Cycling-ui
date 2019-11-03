import React, { Component } from 'react';
import { Card, Button, Col } from 'react-bootstrap';

const Product = ({ product }) => {
  return (
    <Col xs={4}>
      <Card>
        <Card.Img variant='top' src={'img/' + product.fileName} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.price}</Card.Text>
          <Button variant='primary'>Add to Card</Button>
        </Card.Body>
      </Card>
    </Col>
  )
};

export default Product;