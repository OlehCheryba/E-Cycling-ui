import React from 'react';
import { Button } from '@material-ui/core';

const ProductPage = ({ productId, productInfo, handleOrder }) => {
  return (
    <>
      <p>ProductPage {productId}</p>
      <h1>{productInfo.name}</h1>
      <b>Price {productInfo.price}</b>
      {productInfo.inCart || <Button onClick={handleOrder} variant='primary'>Add to Card</Button>}
      {productInfo.inCart && <b>Already in cart</b>}
    </>
  )
}

export default ProductPage;