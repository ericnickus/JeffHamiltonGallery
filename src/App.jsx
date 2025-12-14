import { BrowserRouter as Router, Routes, Route, useLocation, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import gsap from "gsap";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Contact from "./components/Contact";
import "./App.css";

function AnimatedRoutes() {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState("fadeIn");

  useEffect(() => {
    if (location !== displayLocation) setTransitionStage("fadeOut");
  }, [location, displayLocation]);

  const onAnimationComplete = () => {
    if (transitionStage === "fadeOut") {
      setDisplayLocation(location);
      setTransitionStage("fadeIn");
    }
  };

  useEffect(() => {
    if (transitionStage === "fadeIn") {
      gsap.fromTo(
        ".page-transition",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", onComplete: onAnimationComplete }
      );
    }
    if (transitionStage === "fadeOut") {
      gsap.to(".page-transition", { opacity: 0, y: -20, duration: 0.4, ease: "power2.in", onComplete: onAnimationComplete });
    }
  }, [transitionStage]);

  return (
    <div className="page-transition">
      <Routes location={displayLocation}>
        <Route path="/" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <header className="navbar">
        <h1 className="logo">Jeff Hamilton Watercolor Gallery</h1>
        <nav>
          <NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>Gallery</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink>
        </nav>
      </header>

      <main>
        <AnimatedRoutes />
      </main>
    </Router>
  );
}
