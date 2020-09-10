import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-scroll";

export default function Navig() {
  return (
    <>
      <Navbar className="nav" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="aboutMe"
              className="text-secondary"
            >
              About me!
            </Link>
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="myWork"
              className="text-secondary"
            >
              My Work
            </Link>
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="contactMe"
              className="text-secondary"
            >
              Keep in Touch
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
