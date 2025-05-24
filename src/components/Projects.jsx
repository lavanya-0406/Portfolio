import React, { useState } from 'react';

const Projects = () => {
  const [hovered, setHovered] = useState(null);

  const projectData = [
    {
      title: 'Portfolio Website',
      desc: "A personal portfolio built with React, showcasing my skills, projects, and contact information with a glowing hero design.",
      link: 'https://your-portfolio-link.com'
    },
    {
      title: 'Cafe Order System',
      desc: "An interactive cafe website with cart and order management features using React state and styled components.",
      link: 'https://your-cafe-project-link.com'
    },
    {
      title: 'Responsive Landing Page',
      desc: "A sleek and responsive landing page using HTML, CSS, and JavaScript with smooth animations and a modern layout.",
      link: 'https://your-landing-page-link.com'
    }
  ];

  return (
    <div style={styles.container}>
      <div style={styles.greenGlow}></div>

      <div style={styles.left}>
        <h2 style={styles.heading}>My Projects</h2>
        <p style={styles.description}>
          Here are some of the web applications I've created. They are focused on performance, usability, and design.
        </p>
      </div>

      <div style={styles.right}>
        {projectData.map((proj, idx) => (
          <div
            key={idx}
            style={{
              ...styles.projectCard,
              ...(hovered === idx ? styles.projectCardHover : {})
            }}
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
          >
            <h3 style={styles.title}>{proj.title}</h3>
            <p style={styles.desc}>{proj.desc}</p>
            <a
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.button}
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    height: '100vh',
    fontFamily: 'sans-serif',
    position: 'relative',
    overflow: 'hidden',
  },
  greenGlow: {
    position: 'absolute',
    top: '20%',
    right: '-10%',
    width: '150%',
    height: '60%',
    background: 'radial-gradient(circle at 30% 40%, rgba(0, 255, 128, 0.25), transparent 60%)',
    zIndex: 0,
    pointerEvents: 'none',
  },
  left: {
    flex: 1,
    
    background: '#000',
    color: 'white',
    padding: '60px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    zIndex: 1,
  },
  heading: {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '20px',
    color:'#00ffe5',
  },
  description: {
    fontSize: '1.2rem',
    lineHeight: '1.6',
    maxWidth: '400px',
    
  },
  right: {
    flex: 1,
    background: '#000',
    padding: '40px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '30px',
    zIndex: 1,
  },
  projectCard: {
    position: 'relative',
    backgroundColor: '#000',
    padding: '20px',
    borderRadius: '10px',
    border: '2px solid #00ffe5',
    boxShadow: '0 0 8px rgba(0, 255, 229, 0.7)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    zIndex: 1,
  },
  projectCardHover: {
    transform: 'scale(1.03)',
    boxShadow: '0 0 16px rgba(0, 255, 229, 0.9)',
  },
  title: {
    fontSize: '1.5rem',
    color: '#00ffe5',
    marginBottom: '10px',
  },
  desc: {
    fontSize: '1rem',
    color: '#bdc3c7',
    marginBottom: '15px',
    lineHeight: '1.6',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: 'black',
    color: 'white',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '5px',
    textDecoration: 'none',
    display: 'inline-block',
  },
};

export default Projects;
