import React from 'react';
import myImage from './assets/mywork.jpg'; // make sure this path is correct

const Home = () => {
  return (
    <div style={styles.container}>
      {/* Navbar */}

      {/* Hero section */}
      <div style={styles.hero}>
        <div style={styles.left}>
          <h1 style={styles.title}>Hello, This Is Lavanya</h1>
          <p style={styles.subtitle}>Frontend Develober</p>
          <div style={styles.social}>
          </div>
        </div>
        <div style={styles.right}>
          <div style={styles.imageWrapper}>
            <img src={myImage} alt="My Work" style={styles.image} />
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    background:"black",
    fontFamily: 'Segoe UI, sans-serif',
    color: 'white',
    position: 'relative',
    overflow: 'hidden',
  },

  /* --- Navbar --- */
  navbar: {
    display: 'flex',
    alignItems: 'center',
    padding: '20px 60px',
  },
  brand: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    flex: 1,
    textTransform: 'lowercase',
  },
  links: {
    listStyle: 'none',
    display: 'flex',
    gap: '30px',
    margin: 0,
    padding: 0,
  },
  cta: {
    background: '#ff6fa3',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '4px',
    cursor: 'pointer',
    color: 'white',
    fontWeight: 600,
    marginLeft: '40px',
  },

  /* --- Hero Section --- */
  hero: {
    flex: 1,
    display: 'flex',
    position: 'relative',
  },
  left: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: '80px',
  },
  right: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: '3.5rem',
    margin: 0,
  },
  subtitle: {
    fontSize: '1.5rem',
    margin: '20px 0 30px',
    fontWeight: 300,
    borderBottom: '3px solid white',
    paddingBottom: '10px',
  },
  social: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    fontSize: '1.2rem',
  },

  /* --- Image wrapper --- */
  imageWrapper: {
    width: '300px',
    height: '500px',
    
    
    
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
};

export default Home;
