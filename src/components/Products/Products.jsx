import React from 'react';
import { Row, Container } from 'react-bootstrap';
import Product from './Product.jsx';

const Products = props => {
  return (
    <Container>
      <Row>
        {props.products.map(el => <Product product={el} key={el._id}/>)}
      </Row>
    </Container>
  )
}

export default Products;