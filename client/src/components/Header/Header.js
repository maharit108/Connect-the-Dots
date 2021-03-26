import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import "./Header.css";

const Header = (props) => {
  const { user } = props;
  return (
    <Navbar expand="lg" className="Navbar_bg">
      <Navbar.Brand className="logo" href="#">
        Connect <br /> The Dots
      </Navbar.Brand>
      <Navbar.Toggle
        expand="md"
        className="Navbar_Toggle"
        aria-controls="basic-navbar-nav"
      />
      <Navbar.Collapse className="Nav_group">
        <Button className="Nav_button N1">Find a Tutor</Button>
        <Nav.Link className="Nav N2">About</Nav.Link>
        <Nav.Link className="Nav N3" href="#student-info">
          Schools
        </Nav.Link>

        {!user ? (
          <Nav.Link className="Nav N6" href="#sign-in">
            Sign in
          </Nav.Link>
        ) : (
          <>
            <Nav.Link className="Nav N4" href="#tutors">
              Tutors
            </Nav.Link>
            <Nav.Link className="Nav N5" href="#change-password">
              Change Password
            </Nav.Link>
            <Nav.Link className="Nav N7" href="#sign-out">
              Sign Out
            </Nav.Link>
          </>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
