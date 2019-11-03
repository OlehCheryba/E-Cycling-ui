import React, { Component } from 'react';
import Products from './Products.jsx';
import { connect } from 'react-redux';
import { setProducts, setCurrentPage } from '../../redux/products-reducer';

class ProductsContainer extends Component {
  componentDidMount() {
    fetch(API_URL + 'products')
      .then(res => res.json())
      .then(res => {
        this.props.setProducts(res);
      });
  }

  render() {
    return <Products products={this.props.products}/>;
  }
}

const mapStateToProps = state => {
  return {
    products: state.productsPage.products
  }
}

export default connect(
  mapStateToProps, 
  { setProducts, setCurrentPage }
)(ProductsContainer);