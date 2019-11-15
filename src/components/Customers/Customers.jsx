import React from 'react';
import { Row } from 'react-bootstrap';
import Customer from './Customer.jsx';

const Customers = (props) => {
  let pagesCount = Math.ceil(props.totalCustomersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <>
      {pages.map(p => (
        <span key={p} onClick={() => {props.onPageChanged(p)}}>
          {p}
        </span>
      ))}
      <Row>
        {props.customers.map(el => <Customer customer={el} key={el._id}/>)}
      </Row>
    </>
  )
}

export default Customers;