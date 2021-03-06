import React, { Component } from 'react';
import ProductPage from './ProductPage';
import { compose } from 'redux';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { requestProductInfo } from '../../redux/reducers/product-reducer';
import { putCartProduct } from '../../redux/reducers/cart-reducer';

class ProductPageContainer extends Component {
  refreshProductInfo() {
    this.props.requestProductInfo(this.props.match.params.productId);
  }
  componentDidMount() {
    this.refreshProductInfo();
  }
  componentDidUpdate(prevProps) {
    if (this.props.match.params.productId !== prevProps.match.params.productId ) {
      this.refreshProductInfo();
    }
  }
  handleOrder = () => {
    this.props.putCartProduct({ id: this.props.productInfo.id, amount: 1 });
  }
  render() {
    return (
      <ProductPage
        productId={this.props.match.params.productId}
        productInfo={this.props.productInfo || {}}
        handleOrder={this.handleOrder}
      />
    )
  }
}

const mapStateToProps = (state) => ({
  productInfo: state.productPage.productInfo
})

export default compose(
  withRouter,
  connect(mapStateToProps, { requestProductInfo, putCartProduct })
)(ProductPageContainer)