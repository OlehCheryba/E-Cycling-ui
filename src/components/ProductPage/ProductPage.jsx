import React from 'react';

const ProductPage = ({ productId, productInfo }) => {
  return (
    <>
      <p>ProductPage {productId}</p>
      <h1>{productInfo.name}</h1>
     <b>Price {productInfo.price}</b>
    </>
  )
}

export default ProductPage;