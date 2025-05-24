import React from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa';

const About = () => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>About Me</h2>
        <p style={styles.text}>
          I'm Lavanya R, a passionate frontend developer who loves crafting visually stunning and responsive websites.
          I enjoy turning ideas into reality using code, and I specialize in creating user-friendly experiences using
          modern web technologies like <span style={styles.icon}><FaReact /> React</span>, <span style={styles.icon}><FaHtml5 /> HTML</span>, <span style={styles.icon}><FaCss3Alt /> CSS</span>, and <span style={styles.icon}><FaJsSquare /> JavaScript</span>.
        </p>
        <p style={styles.text}>
          I believe in continuous learning and always strive to improve my skills. Whether it's building sleek
          interfaces or optimizing performance, I’m committed to creating efficient and elegant solutions.
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    height: '100vh',
    background: 'black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '40px',
    overflow: 'hidden',
    color: '#fff',
    textAlign: 'center',
  },
  card: {
    maxWidth: '800px',
    padding: '30px',
    backgroundColor: 'black',
    borderRadius: '10px',
    border: '2px solid #00ffe5',
    boxShadow: '0 0 15px rgba(0, 255, 229, 0.4)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  heading: {
    fontSize: '2.5rem',
    textTransform: 'uppercase',
    color: '#00ffe5',
    textShadow: '0 0 10px rgba(0, 255, 229, 0.7)',
    letterSpacing: '2px',
    marginBottom: '20px',
  },
  text: {
    fontSize: '1.1rem',
    color: '#bdc3c7',
    lineHeight: '1.8',
    marginBottom: '16px',
  },
  icon: {
    color: '#00ffe5',
    fontSize: '1.3rem',
    margin: '0 4px',
  },
};

export default About;
