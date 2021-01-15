import React from "react";

export default function AboutMe({ id, color }) {
  return (
    <div className={color} id={id}>
      <div className="terminal">
        <div className="head">
          <h3> veronica:~/About-me</h3>
        </div>
        <p className="about-me">
          Software programming is so fascinating, how we can take an idea, and
          transform it into a solution to our daily living, or find some bug and fix it.
          That is what I enjoy doing everyday, creating new projects, debugging and learning new paths.
        </p>
        <p className="about-me">
          I'm a well organized person, problem solver, independent professional
          with high attention to detail. I also love teamwork or pair programming, 
          the communication is key.
        </p>
        <p className="about-me">
          <i>Specialties:</i> JavaScript, Node.js, React.js, Express.js, MongoDB, 
          jQuery, HTML, CSS, Bootstrap, Responsive‌ ‌Design,‌ Heroku,‌ ‌AJAX,‌ ‌Git,‌ ‌GitHub, 
          Linux, Vim, Visual Studio Code.
        </p>
        <div>
          <a href="https://github.com/veroca88">
            <i className="fab fa-github fa-3x icon-skill"></i>
          </a>

          <a href="https://www.linkedin.com/in/veroca/">
            <i className="fab fa-linkedin-in fa-3x icon-skill"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
