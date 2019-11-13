import React from 'react';
import { Row } from 'react-bootstrap';
import Product from './Product.jsx';

const Products = props => {
  let pagesCount = Math.ceil(props.totalProductsCount / props.pageSize);
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
        {props.products.map(el => <Product product={el} key={el._id}/>)}
      </Row>
    </>
  )
}

export default Products;