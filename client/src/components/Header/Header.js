import React, {Fragment} from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './Header.css'

const Header = props => {
  return (

    <Navbar>
      <Navbar.Brand href='#'>Logo</Navbar.Brand>
      <div className="Nav_group">
        <Nav className="Nav">
        About
        </Nav>
        <Nav.Link className="Nav" href='#student-info'>
        Schools
        </Nav.Link>
        <Nav.Link className="Nav" href='#tutors'>
        Tutors
        </Nav.Link>
        <Nav.Link className="Nav" href='#change-password'>
        Change Password
        </Nav.Link>
        <Nav.Link className="Nav" href='#'>
        Login/Sign in
        </Nav.Link>
        <Nav.Link className="Nav" href='#sign-out'>
        Sign Out
        </Nav.Link>
      </div>
    </Navbar>
  )
}

export default Header
