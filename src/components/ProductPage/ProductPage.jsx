import React from 'react';

const ProductPage = ({ productId, productInfo, handleOrder }) => {
  return (
    <>
      <p>ProductPage {productId}</p>
      <h1>{productInfo.name}</h1>
      <b>Price {productInfo.price}</b>
      <button onClick={handleOrder}>
        buy
      </button>
    </>
  )
}

export default ProductPage;