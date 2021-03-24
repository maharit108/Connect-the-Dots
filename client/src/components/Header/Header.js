import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './Header.css'

const Header = props => {
  return (
    <Navbar>
      <Navbar.Brand>
      Logo
      </Navbar.Brand>
      <div className="Nav_group">
        <Nav className="Nav">
        About
        </Nav>
        <Nav className="Nav">
        Schools
        </Nav>
        <Nav className="Nav">
        Tutors
        </Nav>
        <Nav className="Nav">
        Login/Sign
        </Nav>
      </div>
    </Navbar>
  )
}

export default Header
