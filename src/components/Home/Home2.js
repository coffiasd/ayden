import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTelegram, FaMailBulk } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I graduated from college in <b className="purple">2011</b> with a bachelor's degree and worked in <b className="purple">PHP</b> web development for about 5 years. After that, I worked as a <b className="purple">Go</b> developer for over 3 years at a game company. In the past year or so, I have been working full-time on web3 development, mainly in full-stack development for hackathon projects. I have used technologies such as <b className="purple">Solidity, Next.js,Tailwindcss DaisyUI, Python</b>.  In the future, I plan to further specialize in Solidity auditing work. 🤷‍♂️

            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p style={{ justifyContent: "left" }}>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul >
              <li><FaMailBulk /> coiiasd88@gmail.com</li>
              <li><FaTelegram /> coffiasd</li>
            </ul>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/coffiasd"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/@coffiasse"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container >
  );
}
export default Home2;
