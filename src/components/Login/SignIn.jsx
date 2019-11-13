import React, { Component } from 'react';
import { Formik } from "formik";
import * as Yup from "yup";
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

class SignIn extends Component {
  submitHandler = (event) => {
    /*event.preventDefault();
    fetch('http://localhost:3000/auth/login', {
      method: 'POST',
      headers: {
        'Content-type': 'Application/json'
      },
      withCredentials: true, 
      credentials: 'include',
      body: JSON.stringify(this.state)
    })*/
  }
  render() {
    return (
      <>
        <Formik
          initialValues={{
            email: "",
            password: ""
          }}
          validationSchema={validationSchema}
          onSubmit={({ email, password }, { setSubmitting, resetForm }) => {
            this.props.login(email, password);
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
              <h2>Login</h2>

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
                  Submit
                </button>
              </div>
            </form>
          )}
        </Formik>
      </>
    )
  }
}

export default SignIn