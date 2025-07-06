import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ClickSpark from "./components/ClickSpark";
import avi from "./assets/avi.jpg";
import avi2 from "./assets/avi2.jpg";
import PixelImageTransition from "./components/PixelImageTransition";
import Magnet from "./components/Magnet";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const sections = useRef([]);
  const [currentPage, setCurrentPage] = useState("home");
  const [workCategory, setWorkCategory] = useState("frontend");

  useEffect(() => {
    const handleScroll = () => {
      sections.current.forEach((section) => {
        if (section) {
          const rect = section.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight / 2;
          if (isVisible) setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  const slideInFromLeft = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  const slideInFromRight = {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  const scaleUp = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <ClickSpark
      sparkColor="#7c3aed"
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      <div className="app">
        <div className="bg-gradient"></div>
        <div className="particles">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            ></div>
          ))}
        </div>

        <motion.nav
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className={`navbar ${menuOpen ? "open" : ""}`}
        >
          <motion.div variants={itemVariants} className="navbar-brand">
            <span className="logo-circle"></span>
            <span>Avi.</span>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className={`nav-links ${menuOpen ? "open" : ""}`}
          >
            {["home", "about", "skills", "projects", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className={activeSection === item ? "active" : ""}
                onClick={() => setMenuOpen(false)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
          </motion.div>
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className={`hamburger ${menuOpen ? "open" : ""}`}></div>
          </button>
        </motion.nav>

        <main>
          <section
            id="home"
            ref={(el) => (sections.current[0] = el)}
            className="hero"
          >
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="hero-content"
            >
              <motion.h1 variants={itemVariants} className="hero-title">
                <span className="greeting">Hello, I'm</span>
                <span className="name">Avi Sharma</span>
              </motion.h1>
              <motion.h2 variants={itemVariants} className="hero-subtitle">
                <span className="typing-text">Full Stack Developer</span>
              </motion.h2>
              <motion.p variants={itemVariants} className="hero-description">
                I create beautiful, functional digital experiences with modern
                web technologies.
              </motion.p>
              <motion.div variants={itemVariants} className="hero-actions">
                <Magnet padding={20} magnetStrength={5}>
                  <a href="#projects" className="btn primary">
                    View Work
                  </a>
                </Magnet>
                <Magnet padding={20} magnetStrength={5}>
                  <a href="#contact" className="btn secondary">
                    Contact Me
                  </a>
                </Magnet>
              </motion.div>
            </motion.div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={scaleUp}
              className="hero-image"
            >
              <PixelImageTransition
                firstContent={
                  <img
                    src={avi}
                    alt="Avi Sharma"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                }
                secondContent={
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "rgba(15, 23, 42, 0.8)",
                    }}
                  >
                    <h1
                      style={{
                        color: "white",
                        fontSize: "3rem",
                        fontWeight: "bold",
                        textAlign: "center",
                      }}
                    >
                      AVI SHARMA
                    </h1>
                  </div>
                }
                gridSize={12}
                pixelColor="#7c3aed"
                animationStepDuration={0.4}
                style={{ width: "350px", height: "350px" }}
              />
              <div className="image-border"></div>
            </motion.div>
          </section>

          <section
            id="about"
            ref={(el) => (sections.current[1] = el)}
            className="about"
          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="section-header"
            >
              <h2>About Me</h2>
              <div className="section-divider"></div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="about-grid"
            >
              <motion.div variants={slideInFromLeft} className="about-image">
                <img src={avi2} alt="Avi Sharma" />
              </motion.div>
              <motion.div variants={slideInFromRight} className="about-content">
                <h3>Who am I?</h3>
                <p>
                  Passionate full-stack developer with expertise in JavaScript
                  technologies. I specialize in building responsive, performant
                  web applications with intuitive user interfaces.
                </p>
                <div className="about-details">
                  <div className="detail-item">
                    <i className="fas fa-user"></i>
                    <div>
                      <h4>Name</h4>
                      <p>Avi Sharma</p>
                    </div>
                  </div>
                  <div className="detail-item">
                    <i className="fas fa-envelope"></i>
                    <div>
                      <h4>Email</h4>
                      <p>avisharmaaa373@gmail.com</p>
                    </div>
                  </div>
                  <div className="detail-item">
                    <i className="fas fa-map-marker-alt"></i>
                    <div>
                      <h4>Location</h4>
                      <p>Mathura, India</p>
                    </div>
                  </div>
                </div>
                <button className="cv-download-btn">
                  <a
                    href="resume.pdf"
                    download="Avi_CV.pdf"
                    className="cv-link"
                  >
                    <span className="cv-text">Download CV</span>
                    <span className="cv-icon">
                      <i className="fas fa-download"></i>
                    </span>
                  </a>
                </button>
              </motion.div>
            </motion.div>
          </section>

          <section
            id="skills"
            ref={(el) => (sections.current[2] = el)}
            className="skills"
          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="section-header"
            >
              <h2>My Skills</h2>
              <div className="section-divider"></div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="skills-grid"
            >
              {[
                {
                  name: "Frontend Development",
                  skills: [
                    { name: "React", level: 85 },
                    { name: "JavaScript", level: 95 },
                    { name: "HTML5", level: 90 },
                    { name: "CSS3", level: 85 },
                  ],
                },
                {
                  name: "Backend Development",
                  skills: [
                    { name: "Node.js", level: 80 },
                    { name: "Express", level: 75 },
                    { name: "MongoDB", level: 70 },
                    { name: "PostgreSQL", level: 65 },
                  ],
                },
                {
                  name: "UI/UX Design",
                  skills: [
                    { name: "Figma", level: 85 },
                    { name: "Adobe XD", level: 70 },
                    { name: "User Research", level: 75 },
                    { name: "Prototyping", level: 80 },
                  ],
                },
                {
                  name: "DevOps & Tools",
                  skills: [
                    { name: "Git", level: 90 },
                    { name: "Docker", level: 75 },
                    { name: "AWS", level: 70 },
                    { name: "CI/CD", level: 65 },
                  ],
                },
              ].map((category, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className="skill-category"
                >
                  <h3>{category.name}</h3>
                  <div className="skill-items">
                    {category.skills.map((skill, i) => (
                      <div key={i} className="skill-item">
                        <div className="skill-name">{skill.name}</div>
                        <div className="skill-bar">
                          <div
                            className="skill-progress"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </section>

          <section id="tools" className="tools-section">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="section-header"
            >
              <h2>My Toolkit</h2>
              <div className="section-divider"></div>
              <p className="section-subtitle">Technologies I work with</p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="tools-grid"
            >
              {[
                { name: "Figma", icon: "fab fa-figma", color: "#F24E1E" },
                { name: "Git", icon: "fab fa-git-alt", color: "#F05032" },
                { name: "Docker", icon: "fab fa-docker", color: "#2496ED" },
                { name: "VS Code", icon: "fas fa-code", color: "#007ACC" },
                { name: "AWS", icon: "fab fa-aws", color: "#FF9900" },
                { name: "Vercel", icon: "fas fa-cloud", color: "#000000" },
                {
                  name: "Postman",
                  icon: "fas fa-paper-plane",
                  color: "#FF6C37",
                },
                { name: "Sentry", icon: "fas fa-bug", color: "#362D59" },
                {
                  name: "Datadog",
                  icon: "fas fa-chart-line",
                  color: "#632CA6",
                },
              ].map((tool, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="tool-card"
                  style={{ "--tool-color": tool.color }}
                >
                  <i className={`${tool.icon} tool-icon`}></i>
                  <span>{tool.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </section>

          <section
            id="projects"
            ref={(el) => (sections.current[3] = el)}
            className="projects"
          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="section-header"
            >
              <h2>Featured Projects</h2>
              <div className="section-divider"></div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              variants={containerVariants}
              className="projects-grid"
            >
              {[
                {
                  title: "E-Commerce Platform",
                  description:
                    "Full-featured online store with payment integration and admin dashboard",
                  tags: ["React", "Node.js", "MongoDB"],
                  accent: "#6366f1",
                  liveUrl: "#",
                  codeUrl: "https://github.com/yourusername/ecommerce",
                },
                {
                  title: "Heart Deciease Prediction App",
                  description:
                    "Productivity application with real-time collaboration features",
                  tags: ["React", "Node.js", "MongoDB", "Flask", "CSS3"],
                  accent: "#10b981",
                  liveUrl: "https://myapp-client.onrender.com/",
                  codeUrl: "https://github.com/avi-i05/Heart",
                },
                {
                  title: "Portfolio Website",
                  description:
                    "Modern responsive portfolio with animated transitions",
                  tags: ["React", "CSS3"],
                  accent: "#f59e0b",
                  liveUrl: "https://portfolio-one-pi-40.vercel.app/",
                  codeUrl: "https://github.com/avi-i05/portfolio",
                },
              ].map((project, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className="project-card"
                  style={{ "--accent": project.accent }}
                >
                  <div className="project-header">
                    <h3>{project.title}</h3>
                    <div className="project-tags">
                      {project.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                  <p className="project-description">{project.description}</p>
                  <div className="project-actions">
                    <Magnet padding={10} magnetStrength={3}>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="demo-btn"
                      >
                        Live Demo
                      </a>
                    </Magnet>
                    <Magnet padding={10} magnetStrength={3}>
                      <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="code-btn"
                      >
                        View Code
                      </a>
                    </Magnet>
                  </div>
                  <div className="project-accent"></div>
                </motion.div>
              ))}
            </motion.div>
          </section>

          <AnimatePresence mode="wait">
  {currentPage === "home" ? (
    <motion.section
      id="works"
      ref={(el) => (sections.current[4] = el)}
      className="works-section works"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
      exit="hidden"
    >
      <div className="section-header">
        <h2>My Works</h2>
        <div className="section-divider"></div>
        <p className="section-subtitle">
          Explore my projects by category
        </p>
      </div>
      <motion.div
        className="category-cards"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.div
          variants={cardVariants}
          className="category-card"
          onClick={() => {
            setWorkCategory("frontend");
            setCurrentPage("works");
            window.location.hash = "works";
          }}
        >
          <div className="category-icon">
            <i className="fas fa-laptop-code"></i>
          </div>
          <h3>Frontend Projects</h3>
          <p>Interactive web interfaces built with modern frameworks</p>
          <button className="view-projects-btn">
            View Projects <i className="fas fa-arrow-right"></i>
          </button>
        </motion.div>
        <motion.div
          variants={cardVariants}
          className="category-card"
          onClick={() => {
            setWorkCategory("backend");
            setCurrentPage("works");
            window.location.hash = "works";
          }}
        >
          <div className="category-icon">
            <i className="fas fa-server"></i>
          </div>
          <h3>Backend Projects</h3>
          <p>Robust APIs and server-side applications</p>
          <button className="view-projects-btn">
            View Projects <i className="fas fa-arrow-right"></i>
          </button>
        </motion.div>
        <motion.div
          variants={cardVariants}
          className="category-card"
          onClick={() => {
            setWorkCategory("design");
            setCurrentPage("works");
            window.location.hash = "works";
          }}
        >
          <div className="category-icon">
            <i className="fas fa-paint-brush"></i>
          </div>
          <h3>UI/UX Designs</h3>
          <p>Beautiful user interfaces and experiences</p>
          <button className="view-projects-btn">
            View Projects <i className="fas fa-arrow-right"></i>
          </button>
        </motion.div>
        <motion.div
          variants={cardVariants}
          className="category-card"
          onClick={() => {
            setWorkCategory("fullstack");
            setCurrentPage("works");
            window.location.hash = "works";
          }}
        >
          <div className="category-icon">
            <i className="fas fa-code-branch"></i>
          </div>
          <h3>Fullstack Projects</h3>
          <p>Complete applications from front to back</p>
          <button className="view-projects-btn">
            View Projects <i className="fas fa-arrow-right"></i>
          </button>
        </motion.div>
      </motion.div>
    </motion.section>
  ) : (
    <motion.div
      className="work-category-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <button
        className="back-button"
        onClick={() => {
          setCurrentPage("home");
          window.location.hash = "works";
        }}
      >
        <i className="fas fa-arrow-left"></i> Back to All Categories
      </button>

      <div className="section-header">
        <h2>
          {workCategory === "frontend" && "Frontend Projects"}
          {workCategory === "backend" && "Backend Projects"}
          {workCategory === "design" && "UI/UX Designs"}
          {workCategory === "fullstack" && "Fullstack Projects"}
        </h2>
        <div className="section-divider"></div>
      </div>
      <motion.div
        className="projects-grid"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {workCategory === "frontend" && (
          <>
            <motion.div variants={cardVariants} className="project-card">
              <div className="project-image">
                <img src="/ecommerce.jpg" alt="E-Commerce Store" />
                <div className="project-links">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-external-link-alt"></i> Live Demo
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i> View Code
                  </a>
                </div>
              </div>
              <div className="project-info">
                <h3>E-Commerce Store</h3>
                <p>
                  Full-featured online store with cart functionality and payment integration
                </p>
                <div className="project-tags">
                  <span>React</span>
                  <span>Redux</span>
                  <span>Tailwind CSS</span>
                  <span>Stripe API</span>
                </div>
              </div>
            </motion.div>
            <motion.div variants={cardVariants} className="project-card">
              <div className="project-image">
                <img src="/taskapp.jpg" alt="Task Management App" />
                <div className="project-links">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-external-link-alt"></i> Live Demo
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i> View Code
                  </a>
                </div>
              </div>
              <div className="project-info">
                <h3>Task Management App</h3>
                <p>
                  Productivity application with drag-and-drop functionality
                </p>
                <div className="project-tags">
                  <span>React</span>
                  <span>Firebase</span>
                  <span>Material UI</span>
                </div>
              </div>
            </motion.div>
            <motion.div variants={cardVariants} className="project-card">
              <div className="project-image">
                <img src="/weather.jpg" alt="Weather Dashboard" />
                <div className="project-links">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-external-link-alt"></i> Live Demo
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i> View Code
                  </a>
                </div>
              </div>
              <div className="project-info">
                <h3>Weather Dashboard</h3>
                <p>
                  Real-time weather forecasting with interactive maps
                </p>
                <div className="project-tags">
                  <span>React</span>
                  <span>OpenWeather API</span>
                  <span>Chart.js</span>
                </div>
              </div>
            </motion.div>
          </>
        )}

        {workCategory === "backend" && (
          <>
            <motion.div variants={cardVariants} className="project-card">
              <div className="project-image">
                <img src="/api.jpg" alt="RESTful API Service" />
                <div className="project-links">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-external-link-alt"></i> API Docs
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i> View Code
                  </a>
                </div>
              </div>
              <div className="project-info">
                <h3>RESTful API Service</h3>
                <p>
                  Node.js API with JWT authentication and MongoDB integration
                </p>
                <div className="project-tags">
                  <span>Node.js</span>
                  <span>Express</span>
                  <span>MongoDB</span>
                  <span>JWT</span>
                </div>
              </div>
            </motion.div>
            <motion.div variants={cardVariants} className="project-card">
              <div className="project-image">
                <img src="/chat.jpg" alt="Real-time Chat App" />
                <div className="project-links">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-external-link-alt"></i> Live Demo
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i> View Code
                  </a>
                </div>
              </div>
              <div className="project-info">
                <h3>Real-time Chat App</h3>
                <p>
                  WebSocket based chat application with rooms functionality
                </p>
                <div className="project-tags">
                  <span>Socket.io</span>
                  <span>Node.js</span>
                  <span>Redis</span>
                </div>
              </div>
            </motion.div>
          </>
        )}

        {workCategory === "design" && (
          <>
            <motion.div variants={cardVariants} className="project-card">
              <div className="project-image">
                <img src="/ui-kit.jpg" alt="UI Kit" />
                <div className="project-links">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-external-link-alt"></i> View Design
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i> Design Files
                  </a>
                </div>
              </div>
              <div className="project-info">
                <h3>Mobile App UI Kit</h3>
                <p>
                  Figma design system for fitness tracking application
                </p>
                <div className="project-tags">
                  <span>Figma</span>
                  <span>UI Design</span>
                  <span>Design System</span>
                </div>
              </div>
            </motion.div>
          </>
        )}

        {workCategory === "fullstack" && (
          <>
            <motion.div variants={cardVariants} className="project-card">
              <div className="project-image">
                <img src="/social.jpg" alt="Social Media Dashboard" />
                <div className="project-links">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-external-link-alt"></i> Live Demo
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i> View Code
                  </a>
                </div>
              </div>
              <div className="project-info">
                <h3>Social Media Dashboard</h3>
                <p>
                  Complete social platform with user profiles and interactions
                </p>
                <div className="project-tags">
                  <span>React</span>
                  <span>Node.js</span>
                  <span>GraphQL</span>
                  <span>MongoDB</span>
                </div>
              </div>
            </motion.div>
            <motion.div variants={cardVariants} className="project-card">
              <div className="project-image">
                <img src="/jobs.jpg" alt="Job Board Platform" />
                <div className="project-links">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-external-link-alt"></i> Live Demo
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i> View Code
                  </a>
                </div>
              </div>
              <div className="project-info">
                <h3>Job Board Platform</h3>
                <p>
                  Job listing and application tracking system
                </p>
                <div className="project-tags">
                  <span>Next.js</span>
                  <span>Node.js</span>
                  <span>PostgreSQL</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

          <section
            id="contact"
            ref={(el) => (sections.current[5] = el)}
            className="contact"
          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="section-header"
            >
              <h2>Get In Touch</h2>
              <div className="section-divider"></div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="contact-container"
            >
              <motion.div variants={slideInFromLeft} className="contact-info">
                <h3>Let's talk about your project</h3>
                <p>
                  I'm currently available for freelance work or full-time
                  positions. Feel free to reach out for collaborations or just
                  to say hello!
                </p>
                <div className="contact-methods">
                  <div className="contact-item">
                    <i className="fas fa-envelope"></i>
                    <div>
                      <h4>Email Me</h4>
                      <p>avisharmaaa373@gmail.com</p>
                    </div>
                  </div>
                  <div className="contact-item">
                    <i className="fas fa-phone-alt"></i>
                    <div>
                      <h4>Call Me</h4>
                      <p>+91 9258247887</p>
                    </div>
                  </div>
                </div>
                <div className="social-links">
                  <a href="https://github.com/avi-i05">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/avi-sharma-4189b1278">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="https://wa.me/919258247887">
                    <i className="fab fa-whatsapp"></i>
                  </a>
                  <a href="https://www.instagram.com/__avisharma_18?igsh=a3NhenA3a3Z6Z2g2">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </motion.div>
              <motion.div variants={slideInFromRight} className="contact-form">
                <form
                  action="https://formsubmit.co/avisharmaaa373@gmail.com"
                  method="POST"
                  onSubmit={(e) => {
                    e.preventDefault();
                    e.target.submit();
                    alert("Message sent successfully!");
                  }}
                >
                  <input
                    type="text"
                    name="_honey"
                    style={{ display: "none" }}
                  />
                  <input type="hidden" name="_captcha" value="false" />
                  <input
                    type="hidden"
                    name="_next"
                    value="https://yourwebsite.com/thank-you"
                  />

                  <div
                    className="form-group"
                    style={{ marginBottom: "1.5rem" }}
                  >
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      required
                      className="form-input"
                    />
                  </div>

                  <div
                    className="form-group"
                    style={{ marginBottom: "1.5rem" }}
                  >
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      required
                      className="form-input"
                    />
                  </div>

                  <div className="form-group" style={{ marginBottom: "2rem" }}>
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      rows="5"
                      required
                      className="form-textarea"
                    ></textarea>
                  </div>

                  <Magnet padding={15} magnetStrength={4}>
                    <button type="submit" className="submit-btn">
                      Send Message <i className="fas fa-paper-plane"></i>
                    </button>
                  </Magnet>
                </form>
              </motion.div>
            </motion.div>
          </section>
        </main>

        <motion.footer
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="footer"
        >
          <div className="footer-content">
            <div className="footer-brand">
              <span className="logo-circle"></span>
              <span>Avi Sharma</span>
            </div>
            <p className="footer-text">
              Crafting digital experiences with passion and precision
            </p>
            <div className="footer-links">
              {["home", "about", "skills", "projects", "contact"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item}`}
                    className={activeSection === item ? "active" : ""}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </a>
                )
              )}
            </div>
          </div>
          <div className="copyright">
            © {new Date().getFullYear()} Avi Sharma. All rights reserved.
          </div>
        </motion.footer>
      </div>
    </ClickSpark>
  );
}
export default App;



