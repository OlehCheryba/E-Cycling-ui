import React, { Component } from 'react';
import CustomerPage from './CustomerPage';
import { compose } from 'redux';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { requestCustomerInfo } from '../../redux/reducers/customer-reducer';

class ProductPageContainer extends Component {
  refreshCustomerInfo() {
    this.props.requestCustomerInfo(this.props.match.params.customerId);
  }
  componentDidMount() {
    this.refreshCustomerInfo();
  }
  componentDidUpdate() {
    this.refreshCustomerInfo();
  }
  render() {
    return (
      <CustomerPage 
        customerId={this.props.match.params.customerId}
        customerInfo={this.props.customerInfo || {}}
      />
    )
  }
}

const mapStateToProps = (state) => ({
  customerInfo: state.customerPage.customerInfo
})

export default compose(
  withRouter,
  connect(mapStateToProps, { requestCustomerInfo })
)(ProductPageContainer)