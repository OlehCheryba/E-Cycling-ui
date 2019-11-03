import React, { Component } from 'react';
import { Form, FormGroup, Col, FormControl, Button } from 'react-bootstrap';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: ''
    };
  }
  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  submitHandler = (event) => {
    event.preventDefault();
    fetch(API_URL + 'auth/login', {
      method: 'POST',
      headers: {
        'Content-type': 'Application/json'
      },
      body: JSON.stringify(this.state)
    })
  }
  render() {
    return (
      <>
        <Form>
          <FormGroup>
            <Col sm={4}>
              <FormControl
                size={50}
                name="login"
                value={this.state.login}
                onChange={this.onChange}
              />
            </Col>
            <Col sm={4}>
              <FormControl
                size={50}
                name="password"
                value={this.state.password}
                onChange={this.onChange}
              />
            </Col>
            <Col sm={4}>
              <Button onClick={this.submitHandler} type="submit">Submit</Button>
            </Col>
          </FormGroup>
        </Form>
      </>
    )
  }
}

export default SignIn