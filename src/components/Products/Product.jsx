import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';
import { NavLink } from "react-router-dom";

const Product = ({ product, addToCart }) => {
  return (
    <Col xs={6} md={4}>
      <Card>
        <NavLink to={'/products/' + product.id}>
          <Card.Img variant='top' src={'img/' + product.fileName} />
        </NavLink>
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.price}</Card.Text>
          <Button onClick={() => addToCart(product.id)} variant='primary'>Add to Card</Button>
        </Card.Body>
      </Card>
    </Col>
  )
};

export default Product;