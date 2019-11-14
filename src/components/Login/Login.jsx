import React from 'react';
import { Formik } from "formik";
import * as Yup from "yup";
import {Redirect} from "react-router-dom";
//import Error from "./Error";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Must be an email address")
    .max(100, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .max(100, "Too Long!")
    .required("Required")
});

const Login = ({ isAuth, login }) => {
  if (isAuth) {
    return <Redirect to="/"/>
  }
  return (
    <>
      <h2>Login</h2>
      <Formik
        initialValues={{
          email: "",
          password: ""
        }}
        validationSchema={validationSchema}
        onSubmit={({ email, password }, { setSubmitting, resetForm }) => {
          login(email, password);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit
        }) => (
          <form onSubmit={handleSubmit}>
            <div className="input-row">
              <label>Email</label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                className={touched.email && errors.email ? "has-error" : null}
              />
              {/*<Error touched={touched.email} message={errors.email} />*/}
            </div>

            <div className="input-row">
              <label>Password</label>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                className={touched.password && errors.password ? "has-error" : null}
              />
              {/*<Error touched={touched.password} message={errors.password} />*/}
            </div>

            <div className="input-row">
              <button type="submit">
                LOG IN
              </button>
            </div>
          </form>
        )}
      </Formik>
    </>
  )
}

export default Login