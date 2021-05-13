import React from "react";
import Portfolio from "./images/example-portfolio.png";
import MiaWallet from "./images/miaWallet.jpg";
import MatrixGame from "./images/memory-matrix-game.jpg";
import BrainGame from "./images/training-brain-game.jpg";
import TinDog from "./images/TinDog.png";
import WeatherApp from "./images/weather_chartApp.png"
import Citizenship from "./images/Citizenship_quest.png";
import Memento from "./images/MementoApp.png"
import BussinesDirectory from "./images/BussinessCo.png"

import { Card, Row, Col, Container } from "react-bootstrap";

export default function MyWork({ id, color }) {
  return (
    <div id={id} className={`my-work-section ${color}`}>
      <h2 className="title">Some things I've build</h2>
      <Container fluid="md">
        <Row>
          <Col xs={12} md={8} lg={6} className={`my-work-section ${color}`}>
            <Card.Img variant="top" src={BussinesDirectory} />
            <Card.Body>
              <Card.Title>Bussines Directory</Card.Title>
              <Card.Text>
                Bussines directory web app has around of two hundred of companies data, you can search by name, category or description. Once you have found the company you can click in the company name and see all its information and a chart that show all the funding during its operation.
                <i className="tech_used">
                  Technologies Used:‌ ‌Chart.js, Axios, JavaScript, Express.js, Node.js, MongoDB Cluster, Bootstrap, JQuery.‌ ‌  ‌
                </i>
              </Card.Text>
              <a
                className="text-primary"
                href="https://github.com/veroca88/graph_analytics"
              >
                Visit project
              </a>
            </Card.Body>
          </Col>


          <Col xs={12} md={8} lg={6} className={`my-work-section ${color}`}>
            <Card.Img variant="top" src={Memento} />
            <Card.Body>
              <Card.Title>Memento</Card.Title>
              <Card.Text>
                Memento Web App is a tool helps you manage your important links, it has implemented authorization and authentication methods to protect access to your account. You can create, edit, reuse and delete your links. It is deploying using AWS EC2.
                <i className="tech_used">
                  Technologies Used:‌ ‌JavaScript, Express.js, Node.js, MongoDB Cluster, Mongoose, Bootstrap, AWS EC2.‌ ‌  ‌
                </i>
              </Card.Text>
              <a
                className="text-primary"
                href="http://sobretodotech.com/"
              >
                Visit project
              </a>
            </Card.Body>
          </Col>

          <Col xs={12} md={8} lg={6} className={`my-work-section ${color}`}>
            <Card.Img variant="top" src={Portfolio} />
            <Card.Body>
              <Card.Title>Portfolio Client</Card.Title>
              <Card.Text>
                100% responsive using React.js and CSS, Is a portfolio website,
                following needs and specifications of the client, showing
                through the website the field he is involving and presents a
                showcase of their work. Also has a contact me form to receive
                messages directly to his email.
                <i className="tech_used">
                  Technologies Used:‌ ‌React.js, JavaScript, CSS, animation SVG, Express.js, Node.js, Axios, Nodemailer, Mailgun.‌
                </i>
              </Card.Text>
              <a className="text-primary" href="https://example-portfolio2021.herokuapp.com/">
                Visit project
              </a>
            </Card.Body>
          </Col>

          <Col xs={12} md={8} lg={6} className={`my-work-section ${color}`}>
            <Card.Img variant="top" src={MiaWallet} />
            <Card.Body>
              <Card.Title>Budgeting App</Card.Title>
              <Card.Text>
                MiaWallet is a budgeting web application, helps users create and
                manage budgets, to track how much money users are taking in and
                how much they spend.
                <i className="tech_used">
                  Technologies Used:‌ ‌JavaScript, Express.js, Node.js, MongoDB, Mongoose, Bootstrap, SASS, Heroku, Axios, Nodemailer, Moment.js.‌ ‌  ‌
                </i>
              </Card.Text>
              <p>Team Project</p>
              <a
                className="text-primary"
                href="https://github.com/veroca88/Ironhack-Project-2"
              >
                Visit project
              </a>
            </Card.Body>
          </Col>


          <Col xs={12} md={8} lg={6} className={`my-work-section ${color}`}>
            <Card.Img variant="top" src={Citizenship} />
            <Card.Body>
              <Card.Title>Q&A Citizenship App</Card.Title>
              <Card.Text>
                Multi-choice practice test application connected to an end-point
                to fech all the official USCIS questions with multiple answers,
                it shows by color and by score if the answer selected is correct
                or incorrect.
                <i className="tech_used">
                  Technologies Used:‌ ‌Vue.js, Bootstrap-vue, customize Database, JSON.‌
                </i>
              </Card.Text>
              <a className="text-primary" href="https://citizenship-test-practice.netlify.app/">
                Visit project
              </a>
            </Card.Body>
          </Col>
          {/* <Col xs={12} md={8} lg={6} className={`my-work-section ${color}`}>
            <Card.Img variant="top" src={Ecommerce} />
            <Card.Body>
              <Card.Title>E-commerce Site</Card.Title>
              <Card.Text>
                Aware is an ecommerce platform that generates each time a new
                product of your list of products, also you can see the list of
                items, their description and image. Add, delete and change
                quantity in the shopping cart.
              </Card.Text>
              <a
                className="text-primary"
                href="https://aware-ecommerce.netlify.app/"
              >
                Visit project
              </a>
            </Card.Body>
          </Col> */}
          <Col xs={12} md={8} lg={6} className={`my-work-section ${color}`}>
            <Card.Img variant="top" src={WeatherApp} />
            <Card.Body>
              <Card.Title>Weather App</Card.Title>
              <Card.Text>
                Weather app is an application that interacts with the MapBox and
                weatherStack API, using a callback function. Browse for your weather
                location. Future feature is a chart of weekly weather statistics*.
              <i className="tech_used">
                  Technologies Used:‌ ‌JavaScript, Express.js, Node.js, MongoDB, Mongoose, Bootstrap, Axios, Heroku.‌  ‌
                </i>
              </Card.Text>
              <a
                className="text-primary"
                href="https://weather-chart-app.herokuapp.com/"
              >
                Visit project
              </a>
            </Card.Body>
          </Col>
          <Col xs={12} md={8} lg={6} className={`my-work-section ${color}`}>
            <Card.Img variant="top" src={TinDog} />
            <Card.Body>
              <Card.Title>HTML/CSS Responsive Web Page</Card.Title>
              <Card.Text>
                This is an example of static Website with responsive design,
                it is built with plain HTML and CSS.
                <i className="tech_used">
                  Technologies Used:‌ ‌HTML, CSS, media queries.‌ ‌
                </i>
              </Card.Text>
              <a
                className="text-primary"
                href="https://veroca88.github.io/TinDog-webpage-prctc/"
              >
                Visit project
              </a>
            </Card.Body>
          </Col>

          <Col xs={12} md={8} lg={6} className={`my-work-section ${color}`}>
            <Card.Img variant="top" src={BrainGame} />
            <Card.Body>
              <Card.Title>Where did I put my keys?</Card.Title>
              <Card.Text>
                This is a training brain game, the objective is to get the key,
                in your way to get the key you are going to solve some numerical
                reasoning tests.
                <i className="tech_used">
                  Technologies Used:‌ ‌JavaScript, Canvas, Bootstrap, JQuery, HTML, CSS.‌ ‌
                </i>
              </Card.Text>
              <a
                className="text-primary"
                href="https://veroca88.github.io/project_1TheGame/"
              >
                Visit project
              </a>
            </Card.Body>
          </Col>

          {/* <Col xs={12} md={8} lg={6} className={`my-work-section ${color}`}>
            <Card.Img variant="top" src={MatrixGame} />
            <Card.Body>
              <Card.Title>The Matrix Game</Card.Title>
              <Card.Text>
                The Matrix is a memory game. It has the presentation page where
                is the instructions of the game and also where you can chose the
                leves, the design of the computer is pure CSS.
                <i className="tech_used">
                  Technologies Used:‌ ‌JavaScript, HTML, CSS.‌ ‌
                </i>
              </Card.Text>
              <a
                className="text-primary"
                href="https://veroca88.github.io/linux-memory-game/"
              >
                Visit project
              </a>
            </Card.Body>
          </Col> */}

        </Row>
      </Container>
    </div>
  );
}
