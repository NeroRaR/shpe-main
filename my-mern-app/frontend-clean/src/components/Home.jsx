//import React, { useEffect, useMemo, useState } from "react";
import React, { useEffect, useState} from 'react';
import '../interfaceSettings.css';
//import * as bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
//import '@fortawesome/fontawesome-free/css/all.min.css';
//import { Link } from 'react-router-dom';


function Home() {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const { name } = JSON.parse(storedUser);
      setUserName(name);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = '/';
  };

  /* Sponsors Data Razan*/
  const sponsors = [
    { name: "Sponsor 1", img: "/images/Mc.png", link: "#" },
    { name: "Sponsor 2", img: "/images/Trane.png", link: "#" },
    { name: "Sponsor 3", img: "/images/GP.png", link: "#" },
  
  ];
  return (
    <div className="page-wrapper d-flex flex-column min-vh-100">
   {/* Sub Navigation */}
<nav className="navbar navbar-expand-lg bg-light sub-nav">
  <div className="container-fluid">

    {/* Logo */}
    <a className="navbar-brand" href="/">
      <img src="/images/logo.png" alt="SHPE Georgia Logo" className="logo-img" />
    </a>

    {/* Hamburger toggler for mobile */}
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#mainNav"
      aria-controls="mainNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    {/* Nav links */}
    <div className="collapse navbar-collapse" id="mainNav">
      <ul className="navbar-nav ms-auto align-items-center gap-2">

        <li className="nav-item">
          <a href="/" className="nav-link btn-home">Home</a>
        </li>
        <li className="nav-item">
          <a href="/about" className="nav-link btn-home">About</a>
        </li>
        <li className="nav-item">
          <a href="/ourTeam" className="nav-link btn-home">OurTeam</a>
        </li>
        <li className="nav-item">
          <a href="/membershpe" className="nav-link btn-home">MemberShpe</a>
        </li>
        <li className="nav-item">
          <a href="/calendar" className="nav-link btn-home">Calendar</a>
        </li>
        <li className="nav-item">
          <a href="/resources" className="nav-link btn-home">Resources</a>
        </li>

        {/* Login or Logout */}
        {!userName ? (
          <li className="nav-item">
            <a href="/login" className="nav-link btn-home">Login</a>
          </li>
        ) : (
          <li className="nav-item">
            <button onClick={handleLogout} className="nav-link btn-home">Logout</button>
          </li>
        )}

      </ul>
    </div>
  </div>
</nav>

{/* Thin blue bar */}
<div className="thin-bar"></div>


      {/* Main Content */}
      <div className="container mt-5 text-center flex-grow-1">
        <h2 className="welcome-heading">Welcome to SHPE Georgia{userName ? `, ${userName}!` : '!' }</h2>
         {/* <h3 className="welcome-heading">Leading Hispanics in STEM</h3> */}
          {/* <p className="hero-welcome">Empowering the next generation of engineers and innovators</p> */}
        {/* Image Slideshow Section */}
        <div id="homeCarousel" className="carousel slide mt-5">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="/images/SHPEtinaSummit.jpg" className="d-block w-100" alt="First Slide" />
            </div>
            <div className="carousel-item">
             <img src="/images/GeorgiaSubregionalRetreat.png" className="d-block w-100" alt="Second Slide" />
            </div>
            <div className="carousel-item">
              <img src="/images/SHPExATLUnited.jpg" className="d-block w-100" alt="Third Slide" />
            </div>
            <div className="carousel-item">
              <img src="/images/GBM4.jpg" className="d-block w-100" alt="GBM4" />
            </div>
            <div className="carousel-item">
              <img src="/images/MentorSHPE1.jpg" className="d-block w-100" alt="Mentor SHPE" />
            </div>
          </div>

          {/* Carousel Controls */}
          <button className="carousel-control-prev" type="button" data-bs-target="#homeCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#homeCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>


      {/* Get Started Button */}
        {!userName && <a href="/login" className="btn btn-home mt-3">Get Started</a>}

      {/* Sponsors Section Razan*/}
  
        <div className="sponsors-scroll">
          {sponsors.map((s, idx) => (
            <a key={idx} href={s.link} target="_blank" rel="noopener noreferrer" className="sponsor-small">
              <img src={s.img} alt={s.name} />
            </a>
          ))}
        </div>
      

    {/* Footer Razan*/}
<footer className="footer py-4">
  <div className="container text-center">
    <div className="social-icons">
      <a href="https://www.instagram.com/shpegeorgia/" target="_blank" rel="noopener noreferrer" className="social-link"><i className="fab fa-instagram"></i></a>
      <a href="https://www.linkedin.com/company/shpe-georgia-professional-chapter/" target="_blank" rel="noopener noreferrer" className="social-link"><i className="fab fa-linkedin"></i></a>
      <a href="https://www.facebook.com/gtshpe/" target="_blank" rel="noopener noreferrer" className="social-link"><i className="fab fa-facebook"></i></a>
      <a href="https://www.youtube.com/user/SHPENational" target="_blank" rel="noopener noreferrer" className="social-link"><i className="fab fa-youtube"></i></a>
    </div>
  </div>
        <div className="footer-copy">
          © {new Date().getFullYear()} SHPE Georgia Professional. All rights reserved.
        </div>
</footer>
    </div>
  );
}

export default Home;
