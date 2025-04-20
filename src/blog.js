import React, { useEffect } from "react";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import "./App.css";

function Blog() {
  useEffect(() => {
    // Animate progress circles
    const progressCircles = document.querySelectorAll(".progress-circle");
    progressCircles.forEach((circle) => {
      const radius = circle.r.baseVal.value;
      const circumference = 2 * Math.PI * radius;
      const progressValue = circle.dataset.progress;

      circle.style.strokeDasharray = `${circumference} ${circumference}`;
      circle.style.strokeDashoffset = circumference;

      setTimeout(() => {
        const offset = circumference - (progressValue / 100) * circumference;
        circle.style.strokeDashoffset = offset;
      }, 200);
    });
  }, []);

  const skillData = [
    { name: "HTML", progress: 90 },
    { name: "Python", progress: 85 },
    { name: "React", progress: 80 },
    { name: "Node.js", progress: 85 },
    { name: "JavaScript", progress: 90 },
    { name: "C", progress: 80 },
  ];

  return (
    <div className="container">
      {/* Navbar */}
      <nav className="navbar sticky-navbar">
        <h2>Portfolio</h2>
        <div className="tabs">
          <a href="#home">Home</a>
          <a href="#about-me">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
        <h2>Hello It's Me</h2>
        <h1>Lavanya R</h1>
        <h3>And I'm a frontend developer.</h3>
        <p>
          A frontend-focused web developer building the frontend of websites & web
          applications that lead to the success of the overall projects.
        </p>
      </section>

      {/* Profile Image (absolute positioned) */}
      <div className="image-container">
        <img
          src={require("./mypic.jpg")}
          alt="Profile"
          className="profile-pic"
        />
      </div>

      {/* Icons and Text Row Above Skills */}
      <div className="icon-text-group">
        <div className="icon-text">
          <FaEnvelope className="icon" />
          <span>CONTACT@EXAMPLE.COM</span>
        </div>
        <div className="icon-text">
          <FaPhoneAlt className="icon" />
          <span>929-242-6868</span>
        </div>
      </div>

      <h2> t</h2>

      <section className="skills" id="skills">
        {skillData.map((skill, index) => (
          <div className="skill" key={index}>
            <p>{skill.name}</p>
            <svg className="circle" width="100" height="100">
              <defs>
                <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="black" />
                  <stop offset="100%" stopColor="yellow" />
                </linearGradient>
              </defs>
              <circle className="bg-circle" cx="50" cy="50" r="45"></circle>
              <circle className="progress-circle" data-progress={skill.progress} cx="50" cy="50" r="45" style={{ stroke: `url(#gradient-${index})` }}></circle>
              <text x="50" y="55" textAnchor="middle" fontSize="20px" fill="#333">{skill.progress}%</text>
            </svg>
          </div>
        ))}
      </section>

      {/* Education & About Me Container */}
      <div className="education-container">
        <section className="education" id="education">
          <h4>Education</h4>
          <p>2022 - Present</p>
          <p>Bachelor of Engineering in Computer Science and Engineering</p>
          <p>Angel College of Engineering</p>

          <p>2019 - 2022</p>
          <p>Higher Secondary Education</p>
        </section>

        <section className="about-me" id="about-me">
          <h4>About Me</h4>
          <p>
            Hello! I'm Lavanya, a passionate frontend developer with a keen
            interest in creating engaging and user-friendly web applications. I
            specialize in modern technologies like React, JavaScript, and
            Node.js. I am dedicated to continuous learning and always strive to
            deliver high-quality projects.
          </p>
          <p>
            With my strong foundation in Computer Science and hands-on
            experience in development, I aim to contribute to impactful projects
            that solve real-world problems.
          </p>
        </section>
      </div>

      {/* Projects Section */}
      <section className="projects" id="projects">
        <h4>Projects</h4>
        <div className="project-card">
          <h5>Tamizhi.ai Website</h5>
          <p>
            Tamizhi.ai is a cutting-edge AI-powered platform designed to offer
            Tamil language AI services. It provides seamless language
            translation, sentiment analysis, and chatbot interactions using
            advanced AI algorithms.
          </p>
          <a href="https://tmizhi.ai" target="_blank" rel="noopener noreferrer">
            Visit Tmizhi.ai
          </a>
        </div>
      </section>

      {/* Contact Info / Footer */}
      <div className="contact-info">
        <p>Contact me: lavanya@example.com | © 2025 Lavanya's Portfolio</p>
      </div>
    </div>
  );
}

export default Blog;
