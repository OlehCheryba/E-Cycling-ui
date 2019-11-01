import React, { Component } from 'react';
import { Row, Container, Col } from 'react-bootstrap';

import Product from './Product.jsx';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = { products: [] };
  }
  componentDidMount() {
    fetch(API_URL + 'products')
      .then(res => res.json())
      .then(res => {
        this.setState({ products: res});
      });
  }

  render() {
    const productsList = this.state.products.map(el => <Product product={el} key={el._id}/>);
    return (
      <Container>
        <Row>
          { productsList }
        </Row>
      </Container>
    )
  }
}

export default ProductList;