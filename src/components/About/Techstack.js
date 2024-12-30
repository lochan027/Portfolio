import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJava,
  DiJavascript1,
  DiPython,
  DiReact,
  DiGit,
  DiMysql,
  DiAngularSimple,
  DiCss3,
  DiSwift,
  DiNodejs,
} from "react-icons/di";
import {
  SiFirebase,
  SiKotlin,
  SiMicrosoftazure,
  SiAmazonaws,
  SiGooglecloud,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
        <div className="tech-name">Java</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <div className="tech-name">JavaScript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <div className="tech-name">Python</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <div className="tech-name">React</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
        <div className="tech-name">Firebase</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKotlin />
        <div className="tech-name">Kotlin</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <div className="tech-name">Git</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftazure />
        <div className="tech-name">Microsoft Azure</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws />
        <div className="tech-name">AWS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
        <div className="tech-name">MySQL</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiAngularSimple />
        <div className="tech-name">Angular</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
        <div className="tech-name">CSS3</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiSwift />
        <div className="tech-name">Swift</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <div className="tech-name">Node.js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGooglecloud />
        <div className="tech-name">Google Cloud</div>
      </Col>
    </Row>
  );
}

export default Techstack;
