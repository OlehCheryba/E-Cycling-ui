import React from 'react';
import { Row } from 'react-bootstrap';
import Product from './Product.jsx';
import Paginator from '../common/Paginator.jsx';

const Products = ({ totalProductsCount, onPageChanged, currentPage, pageSize, products, addToCart }) => {
  return (
    <>
      <Paginator 
        totalItemsCount={totalProductsCount}
        onPageChanged={onPageChanged} 
        currentPage={currentPage}
        pageSize={pageSize}
      />
      <Row>
        {products.map(el => <Product addToCart={addToCart} product={el} key={el.id}/>)}
      </Row>
    </>
  )
}

export default Products;