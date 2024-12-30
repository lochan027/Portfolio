import React, { useState, useEffect, Suspense } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import Achievements from "./components/Achievements/Achievements";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationArrows from "./components/NavigationArrows";

function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="App" style={{ 
        position: 'relative', 
        minHeight: '100vh', 
        background: '#000000',
        overflow: 'hidden'
      }}>
        <Preloader load={load} />
        <div className="main-content" style={{ 
          visibility: load ? "hidden" : "visible",
          opacity: load ? 0 : 1,
          transition: "opacity 0.5s ease-in-out"
        }}>
          <Suspense fallback={<div>Loading...</div>}>
            <Navbar />
            <ScrollToTop />
            <NavigationArrows />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/project" element={<Projects />} />
              <Route path="/about" element={<About />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/achievements" element={<Achievements />} />
              <Route path="*" element={<Navigate to="/"/>} />
            </Routes>
            <Footer />
          </Suspense>
        </div>
      </div>
    </Router>
  );
}

export default App;
