import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ayden Lee </span>
            from <span className="purple"> China.</span>
            <br />
            <br />
            <br />
          </p>

          <p style={{ textAlign: "justify" }}>
            <span className="purple">1.Senior PHP Engineer(2013 ~ 2016) </span>
            <li className="about-activity">
              company : CTI-Cert
            </li>
            <li className="about-activity">
              location : china.Hz
            </li>
            <span>
              Company official website with cms drupal && jquery && php.
              Build http server with php for a mobile app.
              Build Admin Panel that contains daily active user number、front-end display content managerment、announcement managerment etc...
            </span>
          </p>

          <p style={{ textAlign: "justify" }}>
            <span className="purple">2.Senior Golang Engineer(2016 ~ 2021) </span>
            <li className="about-activity">
              company : Wooduan
            </li>
            <li className="about-activity">
              location : china.Hz
            </li>
            <span>
              Golang rpcx gateway server.We use it to handle our front-end request.Forward it to our back-end server.
              News center server.A platform where our manager could add edit delete search articles.
              Pay center server.It's a pay server provide a front-end page where user could create an order, and then pay through mobile app.
              User Anti-addiction server.It's a user's age check system.When a user login our game we need to check if this user is adult or not.
            </span>
          </p>

          <p style={{ textAlign: "justify" }}>
            <span className="purple">3.Freelancer(2021 ~ now) </span>
            <li className="about-activity">
              company : No company,just work for some platforms like <span className="purple">gitcoin,code4rena,dorahacks,ethglobal</span>,etc
            </li>
            <li className="about-activity">
              location : china.Hz
            </li>
            <span>
              Learn some web3 Knowledge like solidity,react.js from learnweb3.io website. Join some hackathon events build lukso society recover tool with my teammates.
              Nfts Mint && Nfts Gallery using solidity to write smart contract and then deploy by hardhat.Build front-end
              use next.js and bootstrap framework.

            </span>
          </p>

          <p style={{ textAlign: "justify" }}>
            What i'm doing ...
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> hackathon
            </li>
            <li className="about-activity">
              <ImPointRight /> auditing
            </li>
            <li className="about-activity">
              <ImPointRight /> trading bot
            </li>
            <li className="about-activity">
              <ImPointRight /> blog
            </li>
          </ul>

          {/* <footer className="blockquote-footer">Ayden</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
