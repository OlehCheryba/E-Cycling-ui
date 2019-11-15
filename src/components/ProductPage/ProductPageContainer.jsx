import React, { Component } from 'react';
import ProductPage from './ProductPage';
import { compose } from 'redux';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { requestProductInfo } from '../../redux/reducers/product-reducer';

class ProductPageContainer extends Component {
  refreshProductInfo() {
    this.props.requestProductInfo(this.props.match.params.productId);
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
  connect(mapStateToProps, { requestProductInfo })
)(ProductPageContainer)