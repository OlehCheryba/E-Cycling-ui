import React, { createRef } from 'react';
import { Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .max(100, "Too Long!"),
  price: Yup.string()
    .max(100, "Too Long!")
});

const AddProductForm = ({ addProduct }) => {
  const fileNodeRef = createRef();
  return (
    <>
      <Formik
        initialValues={{
          name: '',
          price: ''
        }}
        validationSchema={validationSchema}
        onSubmit={({ name, price }, { setSubmitting, resetForm }) => {
          addProduct(name, price, fileNodeRef.current.files[0]);
        }}
      >
        {({
          values,
          handleChange,
          handleSubmit
        }) => (
          <form onSubmit={handleSubmit}>
            <div className="input-row">
              <label>Name</label>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                value={values.name}
              />
            </div>

            <div className="input-row">
              <label>Price</label>
              <input
                type="text"
                name="price"
                onChange={handleChange}
                value={values.price}
              />
            </div>

            <div className="input-row">
              <label> Product image</label>
              <input 
                type='file' 
                name='fileNode'
                ref={fileNodeRef}
              />
            </div>

            <div className="input-row">
              <button type="submit">
                ADD PRODUCT
              </button>
            </div>
          </form>
        )}
      </Formik>
    </>
  )
} 

export default AddProductForm