import React, {useState} from 'react'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './Login.css'

function Login() {
  const [loginPayload, setLoginPayload] = useState({
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
    const {name, value} = e.target
    setLoginPayload(prevState => ({...prevState, [name] : value}))
  }

  const onSignInSubmit = e => {
    e.preventDefault()
    console.log(loginPayload)
    resetState()
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
          <Form onSubmit={onSignInSubmit}>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
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
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                name="password"
                value={loginPayload.password}
                type="password"
                placeholder="Password"
                onChange={handleChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit"> Submit </Button>
          </Form>
          <br />
          <p className='loginMsg' >No Account?<span className='loginToggle' onClick={loginToggle}> Register Now!!!</span></p>
       </div>
      ) : (
        <div className='login__wrapper col-xs-12 col-sm-6'>
          <Form onSubmit={onSignUpSubmit}>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
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
              <Form.Label>Password</Form.Label>
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
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                required
                name="confirmPassword"
                value={loginPayload.confirmPassword}
                type="password"
                placeholder="Confirm Password"
                onChange={handleChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit"> Submit </Button>
          </Form>
          <br />
          <p className='loginMsg'>Already have account?<span className='loginToggle' onClick={loginToggle}> Sign In</span></p>
       </div>
      )}
    </div>
  )
}

export default Login
