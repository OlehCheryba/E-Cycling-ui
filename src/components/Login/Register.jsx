import React from 'react';
import { Formik } from "formik";
import * as Yup from "yup";
import { NavLink, Redirect } from "react-router-dom";

const validationSchema = Yup.object().shape({
  login: Yup.string()
    .max(100, "Too Long!")
    .required("Required"),
  email: Yup.string()
    .email("Must be an email address")
    .max(100, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .max(100, "Too Long!")
    .required("Required"),
  repeatedPassword: Yup.string()
    .max(100, "Too Long!")
    .required("Required")
});

const Register = ({ isAuth, register }) => {
  if (isAuth) {
    return <Redirect to="/"/>
  }
  return (
    <>
      <h2>Register</h2>
      <Formik
        initialValues={{
          login: '',
          email: '',
          password: '',
          repeatedPassword: ''
        }}
        validationSchema={validationSchema}
        onSubmit={({ login, email, password, repeatedPassword }, { setSubmitting, resetForm }) => {
          if (password !== repeatedPassword) {
            return alert('Passwords don\'t matches');
          }
          register(login, email, password);
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
              <label>Login</label>
              <input
                type="login"
                name="login"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.login}
                className={touched.login && errors.login ? "has-error" : null}
              />
            </div>
            
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
            </div>

            <div className="input-row">
              <label>Repeat password</label>
              <input
                type="password"
                name="repeatedPassword"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.repeatedPassword}
                className={touched.repeatedPassword && errors.repeatedPassword ? "has-error" : null}
              />
            </div>

            <div className="input-row">
              <button type="submit">
                REGISTER
              </button>
            </div>
          </form>
        )}
      </Formik>
      <NavLink to='/login'>
        Have an account?
      </NavLink>
    </>
  )
}

export default Register