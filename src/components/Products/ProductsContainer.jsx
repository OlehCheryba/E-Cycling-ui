import React, { Component } from 'react';
import Products from './Products.jsx';
import { connect } from 'react-redux';
import { getProducts } from '../../redux/products-reducer';

class ProductsContainer extends Component {
  componentDidMount() {
    this.props.getProducts(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
    this.props.getProducts(pageNumber, this.props.pageSize);
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
  { getProducts }
)(ProductsContainer);