import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './Footer.css'

const Footer = props => {
  return (
    <Navbar className="Footer">
      <Nav className="Footer_c">© Company 2021</Nav>
    </Navbar>
  )
}

export default Footer
