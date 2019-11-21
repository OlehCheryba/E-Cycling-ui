import React, { Component } from 'react';
import Products from './Products.jsx';
import { connect } from 'react-redux';
import { requestProducts } from '../../redux/reducers/products-reducer';
import { addToCart } from '../../redux/reducers/cart-reducer';

class ProductsContainer extends Component {
  componentDidMount() {
    this.props.requestProducts(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
    this.props.requestProducts(pageNumber, this.props.pageSize);
  }

  render() {
    return (
      <>
        { this.props.isFetching ? <h1>pre</h1> : null }
        <Products 
          products={this.props.products}
          totalProductsCount={this.props.totalProductsCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          addToCart={this.props.addToCart}
        />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.productsPage.products,
    pageSize: state.productsPage.pageSize,
    totalProductsCount: state.productsPage.totalProductsCount,
    currentPage: state.productsPage.currentPage,
    isFetching: state.productsPage.isFetching,
  }
}

export default connect(
  mapStateToProps, 
  { requestProducts, addToCart }
)(ProductsContainer);