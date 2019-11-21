import React from 'react';
import { Row } from 'react-bootstrap';
import Customer from './Customer.jsx';
import Paginator from '../common/Paginator.jsx';

const Customers = ({ totalCustomersCount, onPageChanged, currentPage, pageSize, customers }) => {
  return (
    <>
      <Paginator 
        totalItemsCount={totalCustomersCount}
        onPageChanged={onPageChanged} 
        currentPage={currentPage}
        pageSize={pageSize}
      />
      <Row> 
        {customers.map(el => <Customer customer={el} key={el.id}/>)}
      </Row>
    </>
  )
}

export default Customers;