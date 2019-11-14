import React, { Component } from 'react';
import ProductPage from './ProductPage';
import { compose } from 'redux';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { getProductInfo } from '../../redux/reducers/product-reducer';

class ProductPageContainer extends Component {
  refreshProductInfo() {
    this.props.getProductInfo(this.props.match.params.productId);
  }
  componentDidMount() {
    this.refreshProductInfo();
  }
  componentDidUpdate() {
    this.refreshProductInfo();
  }
  render() {
    return (
      <ProductPage 
        productId={this.props.match.params.productId}
        productInfo={this.props.productInfo || {}}
      />
    )
  }
}

const mapStateToProps = (state) => ({
  productInfo: state.productPage.productInfo
})

export default compose(
  withRouter,
  connect(mapStateToProps, { getProductInfo })
)(ProductPageContainer)