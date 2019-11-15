import React from 'react';
import AddProductForm from './Forms/AddProductForm';

const AdminPanel = ({ addProduct }) => {
  return (
    <>
      <p>AdminPanel</p>
      Add product:
      <AddProductForm addProduct={addProduct}/>
    </>
  )
}

export default AdminPanel