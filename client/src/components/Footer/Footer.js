import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import './Footer.css'

const Footer = props => {
  return (
    <Navbar expand="md" className="Footer">
    <Navbar.Brand className="footer_logo" href="/">
    Connect <br /> The Dots
    </Navbar.Brand>
      <Button href='#student-info'className="Footer_button F1">Find a Tutor</Button>
      <ListGroup.Item className="Footer_Nav F2">
      About
      </ListGroup.Item>
      <ListGroup.Item className="Footer_Nav F3">
      Schools
      </ListGroup.Item>
      <ListGroup.Item className="Footer_Nav F4">
      Tutors
      </ListGroup.Item>
      <ListGroup.Item className="Footer_Nav F5">
      FAQ
      </ListGroup.Item>
      <ListGroup.Item className="Footer_c">© Connect The Dots 2021</ListGroup.Item>
    </Navbar>
  )
}

export default Footer
