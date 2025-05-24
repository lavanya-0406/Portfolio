import React from 'react';

const Education = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.h2}>Education</h2>
      
      <div style={styles.timeline}>
        <div style={styles.timelineItem}>
          <div style={styles.timelineDot}></div>
          <div style={styles.timelineContent}>
            <h3 style={styles.degree}>B.E. Computer Science and Engineering</h3>
            <span style={styles.institution}>Angel college of enginerring and technology| 2022 - 2026</span>
            <p style={styles.description}>Studying core concepts of computer science, software development, and web technologies.</p>
          </div>
        </div>

        <div style={styles.timelineItem}>
          <div style={styles.timelineDot}></div>
          <div style={styles.timelineContent}>
            <h3 style={styles.degree}>HSC (12th Grade)</h3>
            <span style={styles.institution}>Your School Name | 2019 - 2021</span>
            <p style={styles.description}>Completed higher secondary education with focus on Physics, Chemistry, and Mathematics.</p>
          </div>
        </div>

        <div style={styles.timelineItem}>
          <div style={styles.timelineDot}></div>
          <div style={styles.timelineContent}>
            <h3 style={styles.degree}>SSLC (10th Grade)</h3>
            <span style={styles.institution}>Your School Name | 2018 - 2019</span>
            <p style={styles.description}>Basic foundation in all major subjects with good academic performance.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    height: '100vh',
    width: '100%',
    background:'black',
    color: '#fff', // White text
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: '20px',
    boxSizing: 'border-box',
  },
  h2: {
    fontSize: '2.5rem',
    margin: '50px 0 10px 0', // Increased top margin to move the text further down
    padding: '10px',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    letterSpacing: '2px',
    color: '#00ffe5', // Neon green color for heading
    textShadow: '0 0 10px rgba(0, 255, 229, 0.7)',
    animation: 'fadeIn 1.5s ease-out',
    
  },
  
  timeline: {
    position: 'relative',
    padding: '20px',
    width: '90%',
    maxWidth: '900px',
    marginTop: '20px',
  },
  timelineItem: {
    position: 'relative',
    marginBottom: '40px',
    paddingLeft: '40px',
    display: 'flex',
    alignItems: 'center',
    transition: 'transform 0.3s ease',
    
  },
  timelineDot: {
    position: 'absolute',
    left: '-25px',
    top: '10px',
    width: '20px',
    height: '20px',
    backgroundColor: 'black', // Neon green dot
    borderRadius: '50%',
    border: '3px solid #fff',
    boxShadow: '0 0 8px rgba(9, 238, 211, 0.7)', // Glowing effect
  },
  timelineContent: {
    marginLeft: '20px',
    backgroundColor: 'black', // Dark background for each content block
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
    transition: 'transform 0.3s ease',
    borderRadius: '10px',
    border: '2px solid #00ffe5',
  },
  degree: {
    fontSize: '1.8rem',
    color: '#00ffe5',
    fontWeight: 'bold',
    marginBottom: '5px',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  institution: {
    fontSize: '1.1rem',
    color: '#ecf0f1',
    marginBottom: '10px',
    fontWeight: '500',
  },
  description: {
    fontSize: '1rem',
    color: '#bdc3c7',
    lineHeight: '1.6',
    marginTop: '5px',
  },
  '@keyframes fadeIn': {
    '0%': {
      opacity: 0,
      transform: 'translateY(-20px)',
    },
    '100%': {
      opacity: 1,
      transform: 'translateY(0)',
    },
  },
};

export default Education;
