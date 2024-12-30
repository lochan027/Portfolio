import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

const NavigationArrows = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Define the navigation order
  const routes = [
    "/",           // Home
    "/about",      // About
    "/project",    // Project
    "/achievements", // Achievements
    "/resume",     // Resume
    "/blogs"       // Blogs
  ];

  const currentIndex = routes.indexOf(location.pathname);

  const navigateToPage = (direction) => {
    let nextIndex = currentIndex + direction;
    
    // Handle wrapping around
    if (nextIndex < 0) nextIndex = routes.length - 1;
    if (nextIndex >= routes.length) nextIndex = 0;
    
    navigate(routes[nextIndex]);
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "ArrowLeft") {
        navigateToPage(-1);
      } else if (e.key === "ArrowRight") {
        navigateToPage(1);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [currentIndex]); // Re-attach listener when currentIndex changes

  const arrowLabelStyle = {
    color: "white",
    opacity: 0.5,
    fontSize: "12px",
    marginTop: "5px",
    textAlign: "center",
    userSelect: "none"
  };

  return (
    <>
      <motion.div
        className="nav-arrow left"
        initial={{ opacity: 0.3 }}
        whileHover={{ opacity: 1, scale: 1.1 }}
        style={{
          position: "fixed",
          left: "30px",
          top: "50%",
          transform: "translateY(-50%)",
          cursor: "pointer",
          zIndex: 1000,
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
        onClick={() => navigateToPage(-1)}
      >
        <BsArrowLeftCircle size={40} color="#cd5ff8" />
        <div style={arrowLabelStyle}>keyboard left</div>
      </motion.div>

      <motion.div
        className="nav-arrow right"
        initial={{ opacity: 0.3 }}
        whileHover={{ opacity: 1, scale: 1.1 }}
        style={{
          position: "fixed",
          right: "30px",
          top: "50%",
          transform: "translateY(-50%)",
          cursor: "pointer",
          zIndex: 1000,
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
        onClick={() => navigateToPage(1)}
      >
        <BsArrowRightCircle size={40} color="#cd5ff8" />
        <div style={arrowLabelStyle}>keyboard right</div>
      </motion.div>
    </>
  );
};

export default NavigationArrows; 