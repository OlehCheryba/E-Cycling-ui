import React from 'react';
import { Row } from 'react-bootstrap';
import Product from './Product.jsx';
import Paginator from '../common/Paginator.jsx';

const Products = ({ totalProductsCount, onPageChanged, currentPage, pageSize, products, putCartProduct }) => {
  return (
    <>
      <Paginator 
        totalItemsCount={totalProductsCount}
        onPageChanged={onPageChanged} 
        currentPage={currentPage}
        pageSize={pageSize}
      />
      <Row>
        {products.map(el => <Product putCartProduct={putCartProduct} product={el} key={el.id}/>)}
      </Row>
    </>
  )
}

export default Products;