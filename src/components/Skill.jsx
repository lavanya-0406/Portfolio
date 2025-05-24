import React, { useEffect, useState } from 'react';

const Skills = () => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('skills-section');
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        setAnimated(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = [
    { skill: 'HTML', percent: 90 },
    { skill: 'CSS', percent: 85 },
    { skill: 'JavaScript', percent: 75 },
    { skill: 'React', percent: 80 },
    { skill: 'Node.js', percent: 70 },
    { skill: 'Python', percent: 70 },
  ];

  return (
    <div id="skills-section" style={styles.container}>
      {/* Left blue section */}
      <div style={styles.left}>
        <h2 style={styles.heading}>My Skills</h2>
        <p style={styles.description}>
          I specialize in front-end and back-end development. Here are my top skills with confidence levels.
        </p>
      </div>

      {/* Right skills display */}
      <div style={styles.right}>
        <div style={styles.skillsGrid}>
          {skills.map((item, index) => (
            <SkillCircle
              key={index}
              skill={item.skill}
              percent={item.percent}
              animated={animated}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const SkillCircle = ({ skill, percent, animated }) => {
  return (
    <div style={styles.circleContainer}>
      <div
        style={{
          ...styles.outerCircle,
          background: animated
            ? `conic-gradient(#007bff ${percent * 3.6}deg, #eee ${percent * 3.6}deg)`
            : 'conic-gradient(#eee 0deg, #eee 360deg)',
        }}
      >
        <div style={styles.innerCircle}>
          <span style={styles.percentText}>{animated ? `${percent}%` : '0%'}</span>
        </div>
      </div>
      <p style={styles.skillName}>{skill}</p>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    height: '100vh',
    fontFamily: 'sans-serif',
  },
  left: {
    flex: 1,
    backgroundColor: '#000',
    color: 'white',
    padding: '60px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  heading: {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '20px',
    color:"#00ffe5",
  },
  description: {
    fontSize: '1.2rem',
    lineHeight: '1.6',
    maxWidth: '400px',
  },
  right: {
    flex: 1,
    backgroundColor: '#000',
    padding: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  skillsGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '40px',
  },
  circleContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color:"red",
  },
  outerCircle: {
    width: '140px',
    height: '140px',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 0 15px rgba(0,0,0,0.2)',
    transition: 'background 2s ease-out',
    background: '#eee',
  },
  innerCircle: {
    width: '110px',
    height: '110px',
    borderRadius: '50%',
    backgroundColor: '#000',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: 'inset 0 0 10px rgba(0,0,0,0.1)',
  },
  percentText: {
    fontSize: '1.5rem',
    color: '#00ffe5',
    fontWeight: 'bold',
  },
  skillName: {
    marginTop: '15px',
    fontSize: '1.1rem',
    color: '#333',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color:'#00ffe5',
  },
};

export default Skills;
