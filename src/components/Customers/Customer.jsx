import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';
import { NavLink } from "react-router-dom";

const Customer = ({ customer }) => {
  return (
    <Col xs={6} md={4}>
      <Card>
        <NavLink to={'/customers/' + customer._id}>
          <Card.Img variant='top' src={'img/' + customer.fileName} />
        </NavLink>
        <Card.Body>
          <Card.Title>{customer.login}</Card.Title>
          <Card.Text>{customer.role}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  )
};

export default Customer;