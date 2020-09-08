import React from "react";
import { Navbar, Nav } from "react-bootstrap";

import ContactMe from "./ContactMe";
import MyWork from "./MyWork";
import AboutMe from "./AboutMe";
import MainPage from "./MainPage";

export default function Navig() {
  let page = undefined;
  const navigation = (e) => {
    e.preventDefault();
    const path = e.target.title;
    console.log(path);
    path === "/aboutMe"
      ? (page = <AboutMe />)
      : path === "/myWork"
      ? (page = <MyWork />)
      : path === "/contactMe"
      ? (page = <ContactMe />)
      : (page = <MainPage />);
  };
  return (
    <>
      <Navbar className="nav" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link
              onClick={navigation}
              href="/aboutMe"
              title="/aboutMe"
              className="text-secondary"
            >
              About me!
            </Nav.Link>
            <Nav.Link
              onClick={navigation}
              href="/myWork"
              title="/myWork"
              className="text-secondary"
            >
              My Work
            </Nav.Link>
            <Nav.Link
              onClick={navigation}
              className="text-secondary"
              href="/contactMe"
              title="/contactMe"
            >
              Keep in Touch
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
