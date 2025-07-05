import React, { useEffect, useState, useRef } from "react";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ClickSpark from './ClickSpark';

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

  return (
    <ClickSpark
    sparkColor='#7c3aed'
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
      <nav className={`navbar ${menuOpen ? "open" : ""}`}>
        <div className="navbar-brand">
          <span className="logo-circle"></span>
          <span>Avi.</span>
        </div>
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
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
        </div>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <div className={`hamburger ${menuOpen ? "open" : ""}`}></div>
        </button>
      </nav>
      <main>
        <section
          id="home"
          ref={(el) => (sections.current[0] = el)}
          className="hero"
        >
          <div className="hero-content">
            <h1 className="hero-title">
            
              <span className="greeting">Hello, I'm</span>
              <span className="name">Avi Sharma</span>
            </h1>
            <h2 className="hero-subtitle">
              <span className="typing-text">Full Stack Developer</span>
            </h2>
            <p className="hero-description">
              I create beautiful, functional digital experiences with modern web
              technologies.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="btn primary">
                View Work
              </a>
              <a href="#contact" className="btn secondary">
                Contact Me
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-wrapper">
              <img src="/avi.jpg" alt="Avi Sharma" />
              <div className="image-border"></div>
            </div>
          </div>
        </section>
        <section
          id="about"
          ref={(el) => (sections.current[1] = el)}
          className="about"
        >
          <div className="section-header">
            <h2>About Me</h2>
            <div className="section-divider"></div>
          </div>
          <div className="about-grid">
            <div className="about-image">
              <img src="/avi2.jpg" alt="Avi Sharma" />
            </div>
            <div className="about-content">
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
            </div>
          </div>
        </section>
        <section
          id="skills"
          ref={(el) => (sections.current[2] = el)}
          className="skills"
        >
          <div className="section-header">
            <h2>My Skills</h2>
            <div className="section-divider"></div>
          </div>
          <div className="skills-grid">
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
              <div key={index} className="skill-category">
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
              </div>
            ))}
          </div>
        </section>
        <section id="tools" className="tools-section">
          <div className="section-header">
            <h2>My Toolkit</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">Technologies I work with</p>
          </div>
          <div className="tools-grid">
            {[
              { name: "Figma", icon: "fab fa-figma", color: "#F24E1E" },
              { name: "Git", icon: "fab fa-git-alt", color: "#F05032" },
              { name: "Docker", icon: "fab fa-docker", color: "#2496ED" },
              { name: "VS Code", icon: "fas fa-code", color: "#007ACC" },
              { name: "AWS", icon: "fab fa-aws", color: "#FF9900" },
              { name: "Vercel", icon: "fas fa-cloud", color: "#000000" },
              { name: "Postman", icon: "fas fa-paper-plane", color: "#FF6C37" },
              { name: "Sentry", icon: "fas fa-bug", color: "#362D59" },
              { name: "Datadog", icon: "fas fa-chart-line", color: "#632CA6" },
            ].map((tool, index) => (
              <div
                key={index}
                className="tool-card"
                style={{ "--tool-color": tool.color }}
              >
                <i className={`${tool.icon} tool-icon`}></i>
                <span>{tool.name}</span>
              </div>
            ))}
          </div>
        </section>
        <section
          id="projects"
          ref={(el) => (sections.current[3] = el)}
          className="projects"
        >
          <div className="section-header">
            <h2>Featured Projects</h2>
            <div className="section-divider"></div>
          </div>

          <div className="projects-grid">
            {[
              {
                title: "E-Commerce Platform",
                description:
                  "Full-featured online store with payment integration and admin dashboard",
                tags: ["React", "Node.js", "MongoDB"],
                accent: "#6366f1",
                liveUrl: "https://ecommerce-demo.com",
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
                liveUrl: "https://ecommerce-demo.com",
                codeUrl: "https://github.com/avi-i05/ecommerce",
              },
            ].map((project, index) => (
              <div
                key={index}
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
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="demo-btn"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="code-btn"
                  >
                    View Code
                  </a>
                </div>
                <div className="project-accent"></div>
              </div>
            ))}
          </div>
        </section>
        {currentPage === "home" ? (
          <section
            id="works"
            ref={(el) => (sections.current[4] = el)}
            className="works-section works"
          >
            <div className="section-header">
              <h2>My Works</h2>
              <div className="section-divider"></div>
              <p className="section-subtitle">
                Explore my projects by category
              </p>
            </div>
            <div className="category-cards">
              <div
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
              </div>
              <div
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
              </div>
              <div
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
              </div>
            </div>
          </section>
        ) : (
          <div className="work-category-page">
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
              </h2>
              <div className="section-divider"></div>
            </div>
            <div className="projects-grid">
              {workCategory === "frontend" && (
                <>
                  <div className="project-card">
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
                        Full-featured online store with cart functionality and
                        payment integration
                      </p>
                      <div className="project-tags">
                        <span>React</span>
                        <span>Redux</span>
                        <span>Tailwind CSS</span>
                        <span>Stripe API</span>
                      </div>
                    </div>
                  </div>
                  <div className="project-card">
                    <div className="project-image">
                      <img src="/portfolio.png" alt="Portfolio Website" />
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
                      <h3>Portfolio Website</h3>
                      <p>
                        Modern portfolio with animated transitions and dark mode
                      </p>
                      <div className="project-tags">
                        <span>React</span>
                        <span>GSAP</span>
                        <span>CSS3</span>
                        <span>Responsive</span>
                      </div>
                    </div>
                  </div>
                  <div className="project-card">
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
                        Productivity application with drag-and-drop
                        functionality
                      </p>
                      <div className="project-tags">
                        <span>React</span>
                        <span>TypeScript</span>
                        <span>React DnD</span>
                        <span>Firebase</span>
                      </div>
                    </div>
                  </div>
                </>
              )}
              {workCategory === "backend" && (
                <>
                  <div className="project-card">
                    <div className="project-image">
                      <img src="/api.jpg" alt="RESTful API" />
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
                        Node.js API with JWT authentication and MongoDB
                        integration
                      </p>
                      <div className="project-tags">
                        <span>Node.js</span>
                        <span>Express</span>
                        <span>MongoDB</span>
                        <span>JWT</span>
                      </div>
                    </div>
                  </div>
                  <div className="project-card">
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
                        WebSocket based chat application with rooms
                        functionality
                      </p>
                      <div className="project-tags">
                        <span>Socket.io</span>
                        <span>Node.js</span>
                        <span>React</span>
                        <span>Redis</span>
                      </div>
                    </div>
                  </div>
                  <div className="project-card">
                    <div className="project-image">
                      <img src="/auth.jpg" alt="Authentication Service" />
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
                      <h3>Authentication Service</h3>
                      <p>
                        Microservice for user authentication with OAuth 2.0
                        support
                      </p>
                      <div className="project-tags">
                        <span>Node.js</span>
                        <span>OAuth</span>
                        <span>JWT</span>
                        <span>PostgreSQL</span>
                      </div>
                    </div>
                  </div>
                </>
              )}
              {workCategory === "design" && (
                <>
                  <div className="project-card">
                    <div className="project-image">
                      <img src="/ui-kit.jpg" alt="UI Kit" />
                      <div className="project-links">
                        <a href="#" target="_blank" rel="noopener noreferrer">
                          <i className="fas fa-external-link-alt"></i> View
                          Design
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
                        <span>Prototyping</span>
                      </div>
                    </div>
                  </div>
                  <div className="project-card">
                    <div className="project-image">
                      <img src="/dashboard.jpg" alt="Dashboard Design" />
                      <div className="project-links">
                        <a href="#" target="_blank" rel="noopener noreferrer">
                          <i className="fas fa-external-link-alt"></i> View
                          Design
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-github"></i> Design Files
                        </a>
                      </div>
                    </div>
                    <div className="project-info">
                      <h3>Admin Dashboard</h3>
                      <p>
                        Data visualization dashboard with interactive components
                      </p>
                      <div className="project-tags">
                        <span>Adobe XD</span>
                        <span>UI Design</span>
                        <span>Data Viz</span>
                        <span>Wireframing</span>
                      </div>
                    </div>
                  </div>
                  <div className="project-card">
                    <div className="project-image">
                      <img src="/landing.jpg" alt="Landing Page Design" />
                      <div className="project-links">
                        <a href="#" target="_blank" rel="noopener noreferrer">
                          <i className="fas fa-external-link-alt"></i> View
                          Design
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-github"></i> Design Files
                        </a>
                      </div>
                    </div>
                    <div className="project-info">
                      <h3>Landing Page Design</h3>
                      <p>High-conversion landing page for SaaS product</p>
                      <div className="project-tags">
                        <span>Figma</span>
                        <span>UI Design</span>
                        <span>Conversion</span>
                        <span>Responsive</span>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
        <section
          id="contact"
          ref={(el) => (sections.current[4] = el)}
          className="contact"
        >
          <div className="section-header">
            <h2>Get In Touch</h2>
            <div className="section-divider"></div>
          </div>

          <div className="contact-container">
            <div className="contact-info">
              <h3>Let's talk about your project</h3>
              <p>
                I'm currently available for freelance work or full-time
                positions. Feel free to reach out for collaborations or just to
                say hello!
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
            </div>
            <form
              className="contact-form"
              action="https://formsubmit.co/avisharmaaa373@gmail.com"
              method="POST"
              onSubmit={(e) => {
                e.preventDefault();
                e.target.submit();
                alert("Message sent successfully!");
                setFormData({ name: "", email: "", message: "" });
              }}
            >
              <input type="text" name="_honey" style={{ display: "none" }} />
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_next"
                value="https://yourwebsite.com/thank-you"
              />
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">
                Send Message <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <span className="logo-circle"></span>
            <span>Avi Sharma</span>
          </div>
          <p className="footer-text">
            Crafting digital experiences with passion and precision
          </p>
          <div className="footer-links">
            {["home", "about", "skills", "projects", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className={activeSection === item ? "active" : ""}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
          </div>
        </div>
        <div className="copyright">
          © {new Date().getFullYear()} Avi Sharma. All rights reserved.
        </div>
      </footer>
    </div>
    </ClickSpark>
  );
}
export default App;
