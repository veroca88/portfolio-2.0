import React from "react";
import ClipPortfolio from "./images/portfolio-erick-perez.jpg";
import Ecommerce from "./images/ecommerce.jpg";
import MiaWallet from "./images/miaWallet.jpg";
import MatrixGame from "./images/memory-matrix-game.jpg";
import BrainGame from "./images/training-brain-game.jpg";
import { Card, Row, Col, Container } from "react-bootstrap";

export default function MyWork({ id, color }) {
  return (
    <div id={id} className={`my-work-section ${color}`}>
      <h2 className="title">Some things I've build</h2>
      <Container fluid="md">
        <Row>
          <Col xs={12} md={8} lg={6} className={`my-work-section ${color}`}>
            <Card.Img variant="top" src={ClipPortfolio} />
            <Card.Body>
              <Card.Title>Portfolio Client</Card.Title>
              <Card.Text>
                100% responsive using React.js and CSS, Is a portfolio website,
                following needs and specifications of the client, showing
                through the website the field he is involving and presents a
                showcase of their work. Also has a contact me form to receive
                messages directly to his email.
              </Card.Text>
              <a
                className="text-primary"
                href="https://veroca88.github.io/erick-perez-portfolio"
              >
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
              </Card.Text>
              <p>Team Project</p>
              <a
                className="text-primary"
                href="https://miawallet.herokuapp.com/login"
              >
                Visit project
              </a>
            </Card.Body>
          </Col>
          <Col xs={12} md={8} lg={6} className={`my-work-section ${color}`}>
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
          </Col>
          <Col xs={12} md={8} lg={6} className={`my-work-section ${color}`}>
            <Card.Img variant="top" src={MatrixGame} />
            <Card.Body>
              <Card.Title>The Matrix Game</Card.Title>
              <Card.Text>
                The Matrix is a memory game. It has the presentation page where
                is the instructions of the game and also where you can chose the
                leves, the design of the computer is pure CSS.
              </Card.Text>
              <a
                className="text-primary"
                href="https://veroca88.github.io/linux-memory-game/"
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
                reasoning tests
              </Card.Text>
              <a
                className="text-primary"
                href="https://veroca88.github.io/project_1TheGame/"
              >
                Visit project
              </a>
            </Card.Body>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
