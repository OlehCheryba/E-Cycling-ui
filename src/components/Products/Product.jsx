import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';
import { NavLink } from "react-router-dom";

const Product = ({ product, putCartProduct }) => {
  return (
    <Col xs={12} md={4} lg={3} sm={6}>
      <Card>
        <NavLink to={'/products/' + product.id}>
          <Card.Img 
            variant='top' 
            src={`http://localhost:3000/images/${product.photoSrc || 'product-default.jpg'}`} 
          />
        </NavLink>
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.price}</Card.Text>
          <Button onClick={() => putCartProduct({ id: product.id, amount: 1 })} variant='primary'>Add to Card</Button>
        </Card.Body>
      </Card>
    </Col>
  )
};

export default Product;