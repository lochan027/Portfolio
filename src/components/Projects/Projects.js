import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import Carousel from 'react-bootstrap/Carousel';
import Googlecalculator1 from "../../Assets/Projects/Googlecalculator.png";
import Googlecalculator2 from "../../Assets/Projects/Googlecalculator (2).png";
import bob from "../../Assets/Projects/bob.png";
import adls from "../../Assets/Projects/Adls.png";
import repo from "../../Assets/Projects/repo.png";
import palindrome from "../../Assets/Projects/palindrome.png";
import Background3D from "../Background3D";

function Projects() {
  return (
    <section className="project-wrapper">
      <Background3D />
      <Container fluid className="project-section">
        <Container>
          <h1 className="project-heading">
            My Recent <strong>Works</strong>
          </h1>
          <p className="project-subtitle">
            Here are a few projects I've worked on recently
          </p>
          <Row className="project-row">
            <Col md={4} className="project-card-col">
              <ProjectCard
                imgComponent={
                  <Carousel interval={3000}>
                    <Carousel.Item>
                      <img
                        src={Googlecalculator1}
                        alt="Google Calculator"
                        className="d-block w-100"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        src={Googlecalculator2}
                        alt="Google Calculator"
                        className="d-block w-100"
                      />
                    </Carousel.Item>
                  </Carousel>
                }
                title="Google Calculator"
                description="A clone of the Google Calculator with all its functionalities. Built using React and styled with CSS, it features a responsive design and supports keyboard input."
                ghLink="https://github.com/lochanaeg/Google-Calculator"
                demoLink="https://lochanaeg.github.io/Google-Calculator/"
              />
            </Col>

            <Col md={4} className="project-card-col">
              <ProjectCard
                imgPath={palindrome}
                title="Palindrome Checker"
                description="A web application that checks if a given string is a palindrome. Built with React and features a clean, user-friendly interface."
                ghLink="https://github.com/lochanaeg/palindrome-checker"
                demoLink="https://lochanaeg.github.io/palindrome-checker/"
              />
            </Col>

            <Col md={4} className="project-card-col">
              <ProjectCard
                imgPath={adls}
                title="ADLS Connection Code"
                description="A Python script that establishes a secure connection to Azure Data Lake Storage (ADLS). Features error handling and authentication."
                ghLink="https://github.com/lochanaeg/ADLS-Connection-Code"
              />
            </Col>

            <Col md={4} className="project-card-col">
              <ProjectCard
                imgPath={bob}
                title="Bob Marley Game"
                description="An interactive game built with Python and Pygame. Features animations, sound effects, and score tracking."
                demoLink="https://github.com/lochanaeg/Bob-Marley-Game"
              />
            </Col>

            <Col md={4} className="project-card-col">
              <ProjectCard
                imgPath={repo}
                title="Personalized Repo"
                description="A collection of my personal projects and code snippets. Includes various programming languages and frameworks."
                ghLink="https://github.com/lochanaeg/Personalized-Repo"
              />
            </Col>
          </Row>

          <h1 className="project-heading" style={{ marginTop: "80px" }}>
            Current <strong>Projects</strong>
          </h1>
          <p className="project-subtitle">
            What I'm currently working on
          </p>
          <Row className="project-row">
            <Col md={4} className="project-card-col">
              <ProjectCard
                title="Soil Testing and AI Prediction for Crop Yielding"
                description="A system that uses soil sensor data to analyze soil conditions and predict crop yield. It suggests the best crops based on soil and weather data."
                isInProgress={true}
              />
            </Col>

            <Col md={4} className="project-card-col">
              <ProjectCard
                title="Live Car Parking Application"
                description="An app that provides live updates on parking availability using sensors to detect occupied spots, saving users time in finding parking."
                isInProgress={true}
              />
            </Col>

            <Col md={4} className="project-card-col">
              <ProjectCard
                title="NSA (Nepalese Student Association Website)"
                description="A platform to connect with the Nepalese Student Association, offering event updates, resources, and community activities."
                isInProgress={true}
              />
            </Col>

            <Col md={4} className="project-card-col">
              <ProjectCard
                title="Autonomous Trash Bin System"
                description="A smart trash bin system that detects waste levels and sends alerts when bins are full, improving waste management efficiency."
                isInProgress={true}
              />
            </Col>

            <Col md={4} className="project-card-col">
              <ProjectCard
                title="Food Auto Shopping and AI Food Management App"
                description="An AI-powered app that streamlines grocery shopping and kitchen management, ensuring efficient food planning and reducing waste."
                isInProgress={true}
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Projects;
