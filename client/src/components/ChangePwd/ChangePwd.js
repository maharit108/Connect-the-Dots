
import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'

import { changePassword } from '../../api/auth.js'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function ChangePassword(props) {
  const [pwdData, setpwdData] = useState({
    oldPassword: '',
    newPassword: ''
  })
      
  const handleChange = e => setpwdData({[e.target.name]: e.target.value})

  const onChangePwd = e => {
    e.preventDefault()
    const { history, user } = props

    changePassword(pwdData, user)
      .then(() => console.log('pwd changed'))
      .then(() => history.push('/'))
      .catch(console.error)
      .finally(setpwdData({ oldPassword: '', newPassword: '' }))
  }

  return (
    <div className="row">
      <div className="col-sm-10 col-md-8 mx-auto mt-5">
        <h3>Change Password</h3>
        <Form onSubmit={onChangePwd}>
          <Form.Group controlId="oldPassword">
            <Form.Label>Old password</Form.Label>
            <Form.Control
              required
              name="oldPassword"
              value={pwdData.oldPassword}
              type="password"
              placeholder="Old Password"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="newPassword">
            <Form.Label>New Password</Form.Label>
            <Form.Control
              required
              name="newPassword"
              value={pwdData.newPassword}
              type="password"
              placeholder="New Password"
              onChange={handleChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit"> Submit</Button>
        </Form>
      </div>
    </div>
  )
}

export default withRouter(ChangePassword)