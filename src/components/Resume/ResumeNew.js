import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Button from "react-bootstrap/Button";
import pdf from "../../Assets/Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import Background3D from "../Background3D";

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

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="resume-wrapper">
      <Background3D />
      <Container fluid className="resume-section">
        <Container>
          <Row style={{ justifyContent: "center", position: "relative" }}>
            <AnimatedSection>
              <Button
                variant="primary"
                href={pdf}
                target="_blank"
                className="download-button"
              >
                <AiOutlineDownload />
                &nbsp;Download CV
              </Button>
            </AnimatedSection>
          </Row>

          <Row className="resume-content">
            <AnimatedSection delay={0.2}>
              <div className="pdf-container">
                <iframe
                  src={pdf}
                  title="Resume"
                  width="100%"
                  height={width > 786 ? "800px" : "500px"}
                  style={{
                    border: "none",
                    borderRadius: "8px",
                    boxShadow: "0 0 20px rgba(0, 0, 0, 0.3)"
                  }}
                />
              </div>
            </AnimatedSection>
          </Row>

          <Row style={{ justifyContent: "center", position: "relative" }}>
            <AnimatedSection delay={0.4}>
              <Button
                variant="primary"
                href={pdf}
                target="_blank"
                className="download-button"
              >
                <AiOutlineDownload />
                &nbsp;Download CV
              </Button>
            </AnimatedSection>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default ResumeNew;
