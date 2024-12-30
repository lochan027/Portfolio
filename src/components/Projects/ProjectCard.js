import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";

function ProjectCard(props) {
  return (
    <Card className={`project-card-view ${props.isInProgress ? 'in-progress' : ''}`}>
      {props.imgComponent ? (
        props.imgComponent
      ) : props.imgPath ? (
        <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      ) : props.isInProgress && (
        <div className="in-progress-icon">
          <AiOutlineClockCircle size={50} />
        </div>
      )}
      <Card.Body>
        <Card.Title>
          {props.title}
          {props.isInProgress && (
            <span className="in-progress-badge">In Progress</span>
          )}
        </Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <div className="btn-container">
          {props.ghLink && (
            <Button variant="primary" href={props.ghLink} target="_blank">
              <BsGithub /> &nbsp;GitHub
            </Button>
          )}
          {props.demoLink && (
            <Button variant="primary" href={props.demoLink} target="_blank">
              <CgWebsite /> &nbsp;Demo
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard; 