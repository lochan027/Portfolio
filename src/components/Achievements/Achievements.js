import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Background3D from "../About/About3D";

function AnimatedSection({ children, delay = 0 }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  );
}

function Achievements() {
  const certifications = [
    {
      title: "AWS Cloud Practitioner",
      organization: "Amazon Web Services",
      logo: "https://images.credly.com/size/680x680/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png",
      link: "https://www.credly.com/badges/b39ab5b7-3ad3-41b0-94b6-452171d63d37/public_url"
    },
    {
      title: "Cisco EndPoint Security",
      organization: "Cisco",
      logo: "https://images.credly.com/size/680x680/images/0ca5f542-fb5e-4a22-9b7a-c1a1ce4c3db7/EndpointSecurity.png",
      link: "https://www.credly.com/badges/d4dbfd70-96e2-4af4-b6f5-cc5ca9772578/public_url"
    },
    {
      title: "Agile Foundation",
      organization: "Agile Alliance",
      logo: "https://cdn-icons-png.flaticon.com/512/9752/9752051.png",
      link: "https://www.linkedin.com/learning/certificates/46db3a989cfa84bf6d2db89b3fd96af0d85c1ab8038c85fe6f00eeda37dda854"
    },
    {
      title: "React.js Certification",
      organization: "Meta",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      link: "https://www.linkedin.com/learning/certificates/271d9c7a51d513f1ac9bd2fd971e81f7e41feda0c45c9ac95592b0bf779bb95c"
    }
  ];

  const extracurricular = [
    {
      title: "Google Developer Student Club (GDSC)",
      position: "Tech Lead",
      duration: "2022 - present",
      logo: "https://media.licdn.com/dms/image/v2/C5603AQG_S0Xe8XOO3Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1662868939491?e=1741219200&v=beta&t=sivmWSek5w8h7gFYtp_Z_8029qVYnGF5qRS7arFD7qE"
    },
    {
      title: "Nepalese Student Association (NSA)",
      position: "Web Master",
      duration: "2024 - present",
      logo: "https://scontent.fmem1-1.fna.fbcdn.net/v/t39.30808-6/305755121_566636868567990_1648574012111341901_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=2N2vmVFhTAAQ7kNvgHOzujp&_nc_zt=23&_nc_ht=scontent.fmem1-1.fna&_nc_gid=A-bwVp0Ph-Gkl13yimAm-BR&oh=00_AYAwWSuVliIiP8AfqvoiGaR4FhzTn6dyqn9uUzxIS0gkhw&oe=67785780"
    },
    {
      title: "Teaching Assistant",
      position: "CSCI 2001",
      duration: "2024 (one semester)",
      logo: "https://cdn-icons-png.flaticon.com/512/1995/1995574.png"
    }
  ];

  return (
    <section className="achievement-wrapper">
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
        <Background3D />
      </div>
      <Container fluid className="achievement-section">
        <Container>
          <h1 className="achievement-heading">
            My <strong>Achievements</strong>
          </h1>
          
          {/* Certifications Section */}
          <h2 className="achievement-subheading">
            Professional Certifications
          </h2>
          <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            {certifications.map((cert, index) => (
              <Col md={4} className="achievement-card-col" key={index}>
                <AnimatedSection delay={index * 0.2}>
                  <Card className="achievement-card">
                    <div className="achievement-logo-container">
                      <img src={cert.logo} alt={cert.title} className="achievement-logo" />
                    </div>
                    <Card.Body>
                      <Card.Title>{cert.title}</Card.Title>
                      <Card.Text>{cert.organization}</Card.Text>
                      <Button
                        variant="primary"
                        href={cert.link}
                        target="_blank"
                        className="view-button"
                      >
                        View Certificate
                      </Button>
                    </Card.Body>
                  </Card>
                </AnimatedSection>
              </Col>
            ))}
          </Row>

          {/* Extracurricular Section */}
          <h2 className="achievement-subheading">
            Extracurricular Achievements
          </h2>
          <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            {extracurricular.map((activity, index) => (
              <Col md={4} className="achievement-card-col" key={index}>
                <AnimatedSection delay={index * 0.2}>
                  <Card className="achievement-card">
                    <div className="achievement-logo-container">
                      <img src={activity.logo} alt={activity.title} className="achievement-logo" />
                    </div>
                    <Card.Body>
                      <Card.Title>{activity.title}</Card.Title>
                      <Card.Text>
                        <strong>{activity.position}</strong>
                        <br />
                        {activity.duration}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </AnimatedSection>
              </Col>
            ))}
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Achievements; 
