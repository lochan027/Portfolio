import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";
import About3D from "./About3D";

function AnimatedCard({ children, delay = 0 }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay }}
      className="about-card"
    >
      {children}
    </motion.div>
  );
}

function About() {
  const techStack = [
    { name: "Java", icon: "DiJava" },
    { name: "JavaScript", icon: "DiJavascript1" },
    { name: "Python", icon: "DiPython" },
    { name: "React", icon: "DiReact" },
    { name: "Firebase", icon: "SiFirebase" },
    { name: "Kotlin", icon: "SiKotlin" },
    { name: "Git", icon: "DiGit" },
    { name: "Microsoft Azure", icon: "SiMicrosoftazure" },
    { name: "AWS", icon: "DiAws" },
    { name: "MySQL", icon: "DiMysql" },
    { name: "Angular", icon: "DiAngularSimple" },
    { name: "CSS3", icon: "DiCss3" },
    { name: "Swift", icon: "DiSwift" },
    { name: "Node.js", icon: "DiNodejs" },
    { name: "Google Cloud", icon: "SiGooglecloud" }
  ];

  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col md={12} className="about-header">
            <AnimatedCard>
              <h1 className="project-heading">
                My <strong className="purple">Story</strong>
              </h1>
              <div className="about-story">
                <p>
                  Welcome to my digital workshop! I'm <span className="highlight">Lochan Acharya</span>, 
                  a full-stack developer and software engineer who transforms complex challenges into elegant solutions.
                </p>
                <p>
                  My journey began with a fascination for technology and has evolved into a passion for crafting 
                  innovative digital experiences. Each line of code I write is a step towards building something 
                  extraordinary.
                </p>
                <div className="about-3d-container">
                  <About3D />
                </div>
                <p>
                  What drives me is the endless possibility of technology to transform ideas into reality. 
                  I specialize in:
                </p>
                <ul className="about-list">
  <li>🎨 Designing intuitive and engaging user interfaces</li>
  <li>⚡ Building robust and efficient backend systems</li>
  <li>🔗 Developing full-stack applications with seamless integration</li>
  <li>☁️ Managing and optimizing cloud-based databases</li>
  <li>🚀 Architecting scalable and secure cloud solutions</li>
</ul>
                  
               
              </div>
            </AnimatedCard>
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <AnimatedCard delay={0.2}>
              <h1 className="project-heading">
                Professional <strong className="purple">Arsenal</strong>
              </h1>
              <p className="tech-description">
                These are the tools and technologies I've mastered in my journey:
              </p>
              <Techstack />
            </AnimatedCard>
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <AnimatedCard delay={0.4}>
              <h1 className="project-heading">
                <strong className="purple">Development</strong> Toolkit
              </h1>
              <p className="tech-description">
                The essential tools that power my development workflow:
              </p>
              <Toolstack />
            </AnimatedCard>
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <AnimatedCard delay={0.6}>
              <h1 className="project-heading">
                My Digital <strong className="purple">Footprint</strong>
              </h1>
              <p className="contribution-text">
                Every commit, every line of code, every project is a step forward in my journey of continuous learning 
                and improvement. Here's a glimpse of my contribution to the developer community:
              </p>
              <div className="github-stats">
                <img
                  src="https://github-readme-stats.vercel.app/api?username=lochan027&show_icons=true&theme=radical"
                  alt="github stats"
                  className="img-fluid"
                />
              </div>
            </AnimatedCard>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;
