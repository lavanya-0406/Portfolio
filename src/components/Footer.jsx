import React, { useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.innerText = `
      @keyframes pulseGlow {
        0% {
          text-shadow: 0 0 5px #00ffe5;
          transform: scale(1.3) rotate(5deg);
        }
        100% {
          text-shadow: 0 0 15px #00ffe5;
          transform: scale(1.35) rotate(-5deg);
        }
      }
    `;
    document.head.appendChild(styleSheet);
  }, []);

  const handleMouseEnter = (e) => {
    e.target.style.transform = 'scale(1.3) rotate(5deg)';
    e.target.style.boxShadow = '0 0 15px #00ffe5, 0 0 25px rgba(0, 255, 229, 0.4)';
    e.target.style.animation = 'pulseGlow 1s infinite alternate';
  };

  const handleMouseLeave = (e) => {
    e.target.style.transform = 'scale(1)';
    e.target.style.boxShadow = 'none';
    e.target.style.animation = 'none';
  };

  return (
    <footer style={styles.footer}>
      <p style={styles.text}>© 2025 Lavanya R. All rights reserved.</p>
      <div style={styles.icons}>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.iconLink}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.iconLink}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:lavanya@example.com"
          style={styles.iconLink}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <FaEnvelope />
        </a>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#000',
    color: '#00ffe5',
    padding: '30px 15px',
    textAlign: 'center',
    borderTop: '2px solid #00ffe5',
    boxShadow: '0 -5px 15px rgba(0, 255, 229, 0.2)',
    fontFamily: 'monospace',
  },
  text: {
    margin: '0 0 15px',
    fontSize: '0.95rem',
    letterSpacing: '1px',
    textShadow: '0 0 5px rgba(0, 255, 229, 0.5)',
  },
  icons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '25px',
  },
  iconLink: {
    color: '#00ffe5',
    fontSize: '1.5rem',
    transition: 'all 0.3s ease-in-out',
    textDecoration: 'none',
  },
};

export default Footer;
