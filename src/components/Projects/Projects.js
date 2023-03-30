import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="realtime-notifications-frontend"
              description="This is gitcoin hackathon project.We built an algoland blockchain realtime notifications server."
              ghLink="https://github.com/coffiasd/realtime-notifications-frontend"
              demoLink="http://realtime-notifications-frontend.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="StorageWizard"
              description="This is a gitcoin hackathon NFTs project based on web3.storage and other dependencies above.User can mint a NFT which is generate by themself."
              ghLink="https://github.com/coffiasd/hackathon-web3-storage"
              demoLink="http://hackathon-web3-storage.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="hackathon-rss3"
              description="this is a project for hackathon Social Hour based on rss3 protocal.We use rss3 protocal to collection some data like transactions and social posts"
              ghLink="https://github.com/coffiasd/hackathon-rss3"
              demoLink="https://hackathon-rss3-ayden-lee.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Hyperlane defi"
              description="This is a project for hyperlane gitcoin hackathon.We build a project to help exchange tokens on different remote chains without deploying smart contract on remote chains.The swap process is based on uniswap v3 protocol.We get the pool address from the two choose tokens"
              ghLink="https://github.com/coffiasd/hyperlane-defi"
              demoLink="http://hyperlane-defi.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="airdrop-hunters-killer"
              description="This is OpenData-Community hackathon project build for identify sybil attackers on blockchains. As we know it's easy for sybil attackers to isolation addresses.Advanced sybil attackers usually cut off the connection between their addresses"
              ghLink="https://github.com/coffiasd/airdrop-hunters-killer"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="algo-bridge-aggregator"
              description="This is Greenhouse Hacks 3 project. I build a front-end UI to help user transfer their assets to wherever network they want. This project is built with wormhole bridge SDK, i originally planned to gather glitter as well"
              ghLink="https://github.com/coffiasd/algo-bridge-aggregator"
              demoLink="https://algo-bridge-aggregator.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="highway-nfts"
              description="Our project is a unique application of the Hyperlane ERC721 technology, which enables the creation and transfer of non-fungible tokens (NFTs) across multiple blockchain networks. With this technology, users can mint and transfer their custom-designed avatar NFTs to any supported blockchain network in just one simple step"
              ghLink="https://github.com/coffiasd/highway-nfts"
              demoLink="https://highway-nfts.vercel.app/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
