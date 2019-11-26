import React, { useEffect } from 'react';
import CustomerPage from './CustomerPage';
import { connect } from 'react-redux';
import { requestCustomerData } from '../../redux/reducers/customer-reducer';

const ProductPageContainer = ({ requestCustomerData, ...props }) => {
  useEffect(() => {
    requestCustomerData();
  });

  return (
    <CustomerPage 
      {...props}
    />
  )
}

const mapStateToProps = (state) => ({
  login: state.customer.login,
  role: state.customer.role,
  id: state.customer.id 
})

export default connect(
  mapStateToProps, { requestCustomerData }
)(ProductPageContainer)