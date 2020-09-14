import React, { useState } from "react";
import { Link } from "react-scroll";

export default function Navig({ color }) {
  const [navOpen, setNavOpen] = useState(false);

  function closeNav() {
    setNavOpen(!navOpen);
  }

  return (
    <nav className={`responsive-nav ${color}`}>
      <figure onClick={() => setNavOpen(!navOpen)}>
        <i className="fas fa-server fa-2x logo-nav"></i>
      </figure>
      <ul
        style={{
          backgroundColor: color === "dark-mode mode" ? "#2a2c31" : " #fffff7",
        }}
      >
        <li className={navOpen ? "" : "li-desactive"}>
          <Link
            onClick={closeNav}
            // activeClass="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            to="aboutMe"
            className="navbar-link"
          >
            About me!
          </Link>
        </li>
        <li className={navOpen ? "" : "li-desactive"}>
          <Link
            onClick={closeNav}
            // activeClass="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            to="myWork"
            className="navbar-link"
          >
            My Work
          </Link>
        </li>
        <li className={navOpen ? "" : "li-desactive"}>
          <Link
            onClick={closeNav}
            // activeClass="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            to="contactMe"
            className="navbar-link"
          >
            Keep in Touch
          </Link>
        </li>
      </ul>
    </nav>
  );
}
