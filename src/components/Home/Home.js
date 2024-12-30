import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Type from "./Type";
import {
  DiJava,
  DiJavascript1,
  DiPython,
  DiReact,
  DiNodejs,
  DiGit,
  DiMysql,
  DiAngularSimple,
  DiCss3,
  DiSwift,
} from "react-icons/di";
import {
  SiFirebase,
  SiKotlin,
  SiMicrosoftazure,
  SiAmazonaws,
  SiGooglecloud,
} from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";
import Background3D from "../Background3D";

function StickmanCharacter() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [action, setAction] = useState("idle");
  const [direction, setDirection] = useState(1);
  const [legAngle, setLegAngle] = useState(0);
  const [armAngle, setArmAngle] = useState(0);
  const [boxWidth, setBoxWidth] = useState(0);
  const [boxHeight, setBoxHeight] = useState(0);
  const [emoji, setEmoji] = useState(null);
  const [targetPosition, setTargetPosition] = useState(null);
  const [isMoving, setIsMoving] = useState(false);
  const [lastMovement, setLastMovement] = useState(null);

  const emojis = ["⭐", "💫", "🌟", "✨", "💡", "🎯", "🎨", "🎮", "💻", "🚀"];

  // Get the welcome box dimensions
  useEffect(() => {
    const updateDimensions = () => {
      const welcomeBox = document.querySelector('.welcome-box');
      if (welcomeBox) {
        setBoxWidth(welcomeBox.offsetWidth - 60);
        setBoxHeight(welcomeBox.offsetHeight - 60);
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // AI movement decision maker
  useEffect(() => {
    const movements = ["run", "jump", "walk", "sit", "throw"];
    let movementTimer;

    const decideNextMovement = () => {
      if (isMoving && !["run", "walk"].includes(action)) return;
      
      // Filter out the last movement to avoid repetition
      const availableMovements = movements.filter(move => move !== lastMovement);
      const randomMovement = availableMovements[Math.floor(Math.random() * availableMovements.length)];
      
      // Only set new movement if not currently jumping or if it's a run/walk
      if (!isMoving || ["run", "walk"].includes(action)) {
        if (randomMovement === "run" || randomMovement === "walk") {
          setIsMoving(true);
          const newX = Math.random() * (boxWidth - 80);
          setTargetPosition({ x: newX, y: 0 });
          setDirection(newX > position.x ? 1 : -1);
          setTimeout(() => {
            setIsMoving(false);
            setAction("idle");
          }, 3000);
        } else if (randomMovement === "jump") {
          setIsMoving(true);
          const jumpHeight = -Math.random() * 30 - 20;
          setTargetPosition({ x: position.x, y: jumpHeight });
          setTimeout(() => {
            setPosition(prev => ({ ...prev, y: 0 }));
            setTargetPosition(null);
            setIsMoving(false);
            setAction("idle");
          }, 3000);
        } else if (randomMovement === "sit") {
          setIsMoving(true);
          setPosition(prev => ({ ...prev, y: 20 }));
          setTimeout(() => {
            setPosition(prev => ({ ...prev, y: 0 }));
            setIsMoving(false);
            setAction("idle");
          }, 3000);
        } else if (randomMovement === "throw") {
          setIsMoving(true);
          const numberOfEmojis = Math.floor(Math.random() * 2) + 3;
          const emojiGroup = Array(numberOfEmojis).fill().map(() => ({
            symbol: emojis[Math.floor(Math.random() * emojis.length)],
            offset: {
              x: Math.random() * 40 - 20,
              y: Math.random() * 40 - 20
            }
          }));
          
          setEmoji({
            emojis: emojiGroup,
            position: { ...position },
            direction: direction
          });
          setTimeout(() => {
            setEmoji(null);
            setIsMoving(false);
            setAction("idle");
          }, 3000);
        }

        setAction(randomMovement);
        setLastMovement(randomMovement);
      }
    };

    movementTimer = setInterval(decideNextMovement, 3000);
    return () => clearInterval(movementTimer);
  }, [boxWidth, boxHeight, position, direction, isMoving, lastMovement, action]);

  // Animation loop
  useEffect(() => {
    let animationFrame;
    let currentTime = 0;
    
    const animate = () => {
      currentTime += 0.1;
      
      if (action === "run" || action === "walk") {
        const speed = action === "run" ? 4 : 2;
        const legSpeed = action === "run" ? 4 : 2;
        
        setLegAngle(Math.sin(currentTime * legSpeed) * (action === "run" ? 30 : 15));
        setArmAngle(Math.sin(currentTime * legSpeed) * (action === "run" ? 45 : 15));
        
        if (targetPosition) {
          setPosition(prev => {
            const newX = prev.x + (speed * direction);
            if (newX < 0) {
              setDirection(1);
              return { ...prev, x: 0 };
            }
            if (newX > boxWidth - 40) {
              setDirection(-1);
              return { ...prev, x: boxWidth - 40 };
            }
            return { ...prev, x: newX };
          });
        }
      } else if (action === "jump") {
        const jumpDuration = 3; // 3 seconds
        const jumpProgress = (currentTime % jumpDuration) / jumpDuration;
        const jumpCurve = Math.sin(Math.PI * jumpProgress);
        
        if (jumpProgress >= 0.95) {
          setLegAngle(30); // Landing pose
        } else {
          setLegAngle(-20 + (jumpCurve * 40));
          setArmAngle(-45 + (jumpCurve * 90));
        }
        
        if (targetPosition) {
          setPosition(prev => ({
            x: prev.x,
            y: targetPosition.y * jumpCurve
          }));
        }
      } else if (action === "sit") {
        setLegAngle(90);
        setArmAngle(0);
      }
      
      animationFrame = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, [action, direction, targetPosition, boxWidth]);

  return (
    <>
      <motion.div
        className="stickman"
        style={{
          transform: `
            translate(${position.x}px, ${position.y}px) 
            scale(${direction}, 1)
          `,
          display: "inline-block",
          position: "absolute",
          top: "50%",
          left: "20px"
        }}
      >
        <svg width="40" height="40" viewBox="0 0 40 40">
          <circle cx="20" cy="10" r="6" fill="none" stroke="white" strokeWidth="2" />
          <line x1="20" y1="16" x2="20" y2="30" stroke="white" strokeWidth="2" />
          <line 
            x1="20" y1="20" x2="10" y2="25" 
            stroke="white" strokeWidth="2" 
            transform={`rotate(${armAngle}, 20, 20)`}
          />
          <line 
            x1="20" y1="20" x2="30" y2="25" 
            stroke="white" strokeWidth="2" 
            transform={`rotate(${-armAngle}, 20, 20)`}
          />
          <line 
            x1="20" y1="30" x2="10" y2="38" 
            stroke="white" strokeWidth="2" 
            transform={`rotate(${legAngle}, 20, 30)`}
          />
          <line 
            x1="20" y1="30" x2="30" y2="38" 
            stroke="white" strokeWidth="2" 
            transform={`rotate(${-legAngle}, 20, 30)`}
          />
        </svg>
      </motion.div>

      {emoji && emoji.emojis.map((emojiData, index) => (
        <motion.div
          key={index}
          initial={{ 
            x: emoji.position.x + (emoji.direction > 0 ? 40 : -40),
            y: emoji.position.y,
            opacity: 1,
            scale: 1
          }}
          animate={{ 
            x: emoji.position.x + (emoji.direction > 0 ? 600 : -600) + emojiData.offset.x,
            y: emoji.position.y - 200 + emojiData.offset.y,
            opacity: 0,
            scale: 1.5
          }}
          transition={{ 
            duration: 3,
            delay: index * 0.1,
            ease: "easeOut"
          }}
          style={{
            position: 'fixed',
            fontSize: '24px',
            pointerEvents: 'none',
            zIndex: 10000,
            willChange: 'transform'
          }}
        >
          {emojiData.symbol}
        </motion.div>
      ))}
    </>
  );
}

function AnimatedName() {
  const letters = "LOCHAN ACHARYA".split("");
  
  return (
    <div className="animated-name">
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: -20 }}
          animate={{ 
            opacity: 1, 
            y: 0,
            rotate: letter === " " ? 0 : [-5, 5, 0],
            scale: letter === " " ? 1 : [1, 1.2, 1]
          }}
          transition={{ 
            duration: 0.5, 
            delay: index * 0.1,
            rotate: {
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            },
            scale: {
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }
          }}
          className="animated-letter"
          style={{ 
            display: "inline-block",
            marginRight: letter === " " ? "1rem" : "0.2rem",
            color: "#cd5ff8"
          }}
        >
          {letter}
        </motion.span>
      ))}
    </div>
  );
}

function Home() {
  const [currentSkill, setCurrentSkill] = useState(0);
  const [isWhiteBall, setIsWhiteBall] = useState(true);

  const skills = [
    { icon: DiJava, name: "Java" },
    { icon: DiJavascript1, name: "JavaScript" },
    { icon: DiPython, name: "Python" },
    { icon: DiReact, name: "React" },
    { icon: SiFirebase, name: "Firebase" },
    { icon: SiKotlin, name: "Kotlin" },
    { icon: DiGit, name: "Git" },
    { icon: SiMicrosoftazure, name: "Azure" },
    { icon: SiAmazonaws, name: "AWS" },
    { icon: DiMysql, name: "MySQL" },
    { icon: DiAngularSimple, name: "Angular" },
    { icon: DiCss3, name: "CSS3" },
    { icon: DiSwift, name: "Swift" },
    { icon: DiNodejs, name: "Node.js" },
    { icon: SiGooglecloud, name: "Google Cloud" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (isWhiteBall) {
        setIsWhiteBall(false);
      } else {
        setCurrentSkill((prev) => {
          const nextSkill = (prev + 1) % skills.length;
          if (nextSkill === 0) {
            setIsWhiteBall(true);
          }
          return nextSkill;
        });
      }
    }, 2000);
    return () => clearInterval(interval);
  }, [isWhiteBall, skills.length]);

  return (
    <section className="home-wrapper">
      <Background3D />
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <div className="welcome-box">
                <motion.h1
                  className="heading"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  Welcome to My Digital Universe{" "}
                  <StickmanCharacter />
                </motion.h1>
              </div>

              <motion.div
                className="name-box"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h1 className="heading-name">
                  I'M
                  <AnimatedName />
                </h1>
                <p className="heading-description">
                  Transforming Ideas into Digital Reality
                </p>
              </motion.div>

              <motion.div
                className="type-box"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                style={{ padding: 50, textAlign: "left" }}
              >
                <Type />
              </motion.div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <div className="ball-animation-container">
                <motion.div
                  key={isWhiteBall ? "ball" : `skill-${currentSkill}`}
                  className={isWhiteBall ? "bouncing-ball" : "skill-icon"}
                  animate={{
                    y: [0, 150, 0],
                    scale: [1, 0.8, 1],
                  }}
                  transition={{
                    duration: 2,
                    ease: "easeInOut",
                    repeat: Infinity,
                  }}
                >
                  {isWhiteBall ? (
                    <div className="white-ball" />
                  ) : (
                    React.createElement(skills[currentSkill].icon, {
                      style: {
                        fontSize: "4em",
                        color: "white",
                        filter: "drop-shadow(0 0 10px rgba(255, 255, 255, 0.5))",
                      },
                    })
                  )}
                </motion.div>
                <div className="ground-line">
                  <div className="line" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
