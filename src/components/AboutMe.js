import React from "react";
import Terminal from "./images/terminal.png";

export default function AboutMe({ id, color }) {
  return (
    <div className={color} id={id}>
      <div className="terminal">
        <div className="head">
          <i class="fas fa-times fa-2x"></i>
          <h3> veronica:~/About-me</h3>
          <i class="fas fa-bars fa-2x"></i>
        </div>
        {/* <h3> veronica:~/About-me$</h3> */}
        <p className="about-me">
          Software programming is fascinating, how we can take an idea, and
          transformed in a solution to our daily living, that is what I enjoy
          doing everyday, creating new projects and learning new paths.
        </p>
        <p className="about-me">
          I'm a well organized person, problem solver, independent professional
          with high attention to detail.
        </p>
        <p className="about-me">
          <i>Specialties:</i> JavaScript, Node.js, React.js, Express.js,
          MongoDB, jQuery, HTML, CSS, Bootstrap, GitHub, Linux, Vim, Visual
          Studio Code.
        </p>
        <div>
          <a href="https://github.com/veroca88">
            <i class="fab fa-github fa-3x icon-skill"></i>
          </a>

          <a href="https://github.com/veroca88">
            <i class="fab fa-linkedin-in fa-3x icon-skill"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
