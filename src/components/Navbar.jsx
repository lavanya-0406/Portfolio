import React from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';
import {  FaTwitter, FaInstagram, FaFacebook , FaFemale} from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="custom-navbar">
      <div className="logo">
        Lavan<span>ya</span>
      </div>
      <ul className="nav-links">
        <li><Link to="home" smooth={true} duration={500} spy={true} activeClass="active">Home</Link></li>
        <li><Link to="about" smooth={true} duration={500} spy={true} activeClass="active">About</Link></li>
        <li><Link to="projects" smooth={true} duration={500} spy={true} activeClass="active">Projects</Link></li>
        <li><Link to="skill" smooth={true} duration={500} spy={true} activeClass="active">Skill</Link></li>
        <li><Link to="education" smooth={true} duration={500} spy={true} activeClass="active">Education</Link></li>
      </ul>
      <div className="icons">
        <FaTwitter />
        <FaInstagram />
        <FaFacebook/>
        <FaFemale/>
      </div>
    </nav>
  );
};

export default Navbar;
