import React, { useState } from 'react'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './Login.css'

function Login (props) {
  const [loginPayload, setLoginPayload] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  })

  const [displaySignIn, setDisplaySignIn] = useState(true)

  const resetState = () => {
    setLoginPayload({
      email: "",
      password: "",
      confirmPassword: ""
    })
  }

  const handleChange = e => {
    const { name, value } = e.target
    setLoginPayload(prevState => ({ ...prevState, [name]: value }))
  }

  const onSignInSubmit = e => {
    const { setNewUser } = props
    e.preventDefault()
    console.log(loginPayload)
    resetState()
    setNewUser(loginPayload)
  }

  const onSignUpSubmit = e => {
    e.preventDefault()
    if (loginPayload.password === loginPayload.confirmPassword) {
      console.log(loginPayload)
    } else {
      console.log('error')
    }
    resetState()
  }

  const loginToggle = e => {
    setDisplaySignIn(!displaySignIn)
  }

  return (
    <div className='login__container'>
      {displaySignIn ? (
        <div className='login__wrapper col-xs-12 col-sm-6'>
          <div className='login__header'>
            <h2>Login</h2>
          </div>
          <Form onSubmit={onSignInSubmit}>
            <Form.Group controlId="email">
              <Form.Control
                required
                type="email"
                name="email"
                value={loginPayload.email}
                placeholder="Enter email"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Control
                required
                name="password"
                value={loginPayload.password}
                type="password"
                placeholder="Password"
                onChange={handleChange}
              />
            </Form.Group>
            <Button block variant="primary" type="submit"> Submit </Button>
          </Form>
          <br />
          <div className='login__footer'>
            <span className='loginToggle'>Forgot Password?</span>
            <span className='loginToggle' onClick={loginToggle}>Create an account</span>

          </div>
        </div>
      ) : (
        <div className='login__wrapper col-xs-12 col-sm-6'>
          <div className='login__header'>
            <h2>Sign Up</h2>
          </div>
          <Form onSubmit={onSignUpSubmit}>
            <Form.Group controlId="firstName">
              <Form.Control
                required
                type="text"
                name="firstName"
                value={loginPayload.firstName}
                placeholder="First Name"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="lastName">
              <Form.Control
                required
                type="text"
                name="lastName"
                value={loginPayload.lastName}
                placeholder="Last Name"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Control
                required
                type="email"
                name="email"
                value={loginPayload.email}
                placeholder="Enter email"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Control
                required
                name="password"
                value={loginPayload.password}
                type="password"
                placeholder="Password"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="confirmPassword">
              <Form.Control
                required
                name="confirmPassword"
                value={loginPayload.confirmPassword}
                type="password"
                placeholder="Confirm Password"
                onChange={handleChange}
              />
            </Form.Group>
            <Button block variant="primary" type="submit"> Submit </Button>
          </Form>
          <br />
          <p className='signUp__footer'>Already have account?<span className='loginToggle' onClick={loginToggle}> Sign In</span></p>
        </div>
      )}
    </div>
  )
}

export default Login
