import React, {Fragment} from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import './Header.css'

const Header = props => {
  return (
<<<<<<< HEAD

    <Navbar>
      <Navbar.Brand href='#'>Logo</Navbar.Brand>
      <div className="Nav_group">
=======
    <Navbar className="Navbar_bg" expand="md">
      <Navbar.Brand className="logo" href="/">
      Connect <br /> The Dots
      </Navbar.Brand>
      <Navbar.Toggle className="Navbar_Toggle" aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="Nav_group">
>>>>>>> 70c1f92... Header, Footer, and Landing Page Components
        <Nav className="Nav">
        About
        </Nav>
        <Nav.Link className="Nav" href='#student-info'>
        Schools
        </Nav.Link>
        <Nav.Link className="Nav" href='#tutors'>
        Tutors
<<<<<<< HEAD
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
=======
        </Nav>
        <Button className="Nav_button">Find a Tutor</Button>
        <Nav className="Nav">
        Login/Sign in
        </Nav>
      </Navbar.Collapse>
>>>>>>> 70c1f92... Header, Footer, and Landing Page Components
    </Navbar>
  )
}

export default Header
