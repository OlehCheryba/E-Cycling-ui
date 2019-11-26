import React from 'react';

const CustomerPage = ({ login, role, id }) => {
  return (
    <>
      <p>Page for {id}</p>
      <h1>Login {login}</h1>
     <b>Role {role}</b>
    </>
  )
}

export default CustomerPage;