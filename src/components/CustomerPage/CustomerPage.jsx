import React from 'react';

const CustomerPage = ({ customerId, customerInfo }) => {
  return (
    <>
      <p>CustomerPage {customerId}</p>
      <h1>{customerInfo.login}</h1>
     <b>Role {customerInfo.role}</b>
    </>
  )
}

export default CustomerPage;