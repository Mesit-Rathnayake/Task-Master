import React from 'react';
import '../styles/Start.css';
import { Link } from 'react-router-dom';
import bgv from '../assets/bgv.mp4';
import logo from '../assets/images/logo.png';
import LOGO from '../assets/images/logo.png';
import Footer from '../components/footer';

export default function Start() {
  return (
    <div className="Start-container">
      <video autoPlay loop muted className="background-video">
        <source src={bgv} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <header className="Header-bar">
        <div className="logo">
          <img src={logo} alt="Task Master Logo" />
        </div>
        <nav className="head-buttons">
          <Link to="/SignIn">
            <button className="nav-button">Sign Up</button>
          </Link>
          <Link to="/LogIn">
            <button className="nav-button">Log In</button>
          </Link>
        </nav>
      </header>

      <div className="Main">
        <div className="LOGO">
        <img src={LOGO} alt="Task Master Logo" />
        </div>
        <p> Stay organized, keep track of deadlines, and make the most out of your time! Let's get started!<br/><br/>
        Your personal assistant for managing tasks and time effectively.</p>
        <Link to="/SignIn">
            <button className="nav-button">Getting Started</button>
        </Link>
      </div>
      <Footer/>
    </div>
  );
}
