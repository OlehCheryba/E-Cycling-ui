import React, { Component } from 'react';
import Customers from './Customers.jsx';
import { connect } from 'react-redux';
import { requestCustomers } from '../../redux/reducers/customers-reducer';

class CustomersContainer extends Component {
  componentDidMount() {
    this.props.requestCustomers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
    this.props.requestCustomers(pageNumber, this.props.pageSize);
  }

  render() {
    return (
      <>
        { this.props.isFetching ? <h1>pre</h1> : null }
        <Customers 
          customers={this.props.customers}
          totalCustomersCount={this.props.totalCustomersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  customers: state.customersPage.customers,
  pageSize: state.customersPage.pageSize,
  totalCustomersCount: state.customersPage.totalCustomersCount,
  currentPage: state.customersPage.currentPage,
  isFetching: state.customersPage.isFetching
})

export default connect(
  mapStateToProps, 
  { requestCustomers }
)(CustomersContainer);