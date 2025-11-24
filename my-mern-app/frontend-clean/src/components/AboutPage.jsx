import React from "react";
import "../interfaceSettings.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function AboutPage() {
  return (
    <div className="page-wrapper d-flex flex-column min-vh-100">
      {/* ===== Nav Bar (Bootstrap) ===== */}
<nav className="navbar navbar-expand-lg bg-light sub-nav">
  <div className="container-fluid">

    {/* Logo */}
    <a className="navbar-brand" href="/">
      <img src="/images/logo.png" alt="SHPE Georgia Logo" className="logo-img" />
    </a>

    {/* Mobile Toggle Button */}
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#sharedNavbar"
      aria-controls="sharedNavbar"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    {/* Collapsible Navigation Items */}
    <div className="collapse navbar-collapse" id="sharedNavbar">
      <ul className="navbar-nav ms-auto align-items-center gap-2">
        <li className="nav-item">
          <a href="/" className="nav-link btn-home">Home</a>
        </li>
        <li className="nav-item">
          <a href="/about" className="nav-link btn-home">About</a>
        </li>
        <li className="nav-item">
          <a href="/ourteam" className="nav-link btn-home">OurTeam</a>
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
        <li className="nav-item">
          <a href="/login" className="nav-link btn-home">Login</a>
        </li>
      </ul>
    </div>

  </div>
</nav>

{/* ===== Thin line ===== */}
<div className="thin-bar" role="presentation"></div>


      {/* ===== Main ===== */}
      <main className="about-main container flex-grow-1 mt-4 mb-5">
        {/* Hero */}
        <section className="about-hero">
          <div className="about-hero__text">
            <h1>About SHPE</h1>
            <h2>Who We Are & Where We Are Going</h2>
            <p>
              For over 50 years, SHPE has made a big impact as the nation’s largest association
              supporting Hispanics in STEM—meeting members where they are with training, mentorship,
              and meaningful programming.
            </p>
          </div>
          <img
            className="d-block w-50"
            src="/images/SHPEtinaSummit.jpg"
            alt="Team collaboration"
          />
        </section>

        {/* Mission / Vision / Values */}
        <section className="mv-section">
          {/*<h3>Mission · Vision · Values</h3>*/}
          <div className="mv-grid">
            <div className="mv-card">
              <h4>Mission</h4>
              <p>
                Empower the Hispanic community to realize its fullest potential and impact the world
                through STEM awareness, access, support, and development.
              </p>
            </div>
            <div className="mv-card">
            
              <h4>Vision</h4>
              <p>
                A world where Hispanics are highly valued and influential as leading innovators,
                scientists, mathematicians, and engineers.
              </p>
            </div>
            <div className="mv-card span-2">
             
              <h4>Values</h4>
              <ul className="values-list">
                <li><strong>Familia</strong> — We build community.</li>
                <li><strong>Service</strong> — We lift others as we rise.</li>
                <li><strong>Education</strong> — We grow through opportunity.</li>
                <li><strong>Resilience</strong> — We overcome together.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Our Reach */}
        <section className="reach-section">
          <h3>Our Reach</h3>
          <div className="reach-grid">
            <img className="reach-map" src="/images/map-placeholder.jpg" alt="SHPE chapters map" />
            <div className="reach-stats">
              <div className="reach-tile"><span className="num">19,700+</span><span>Members</span></div>
              <div className="reach-tile"><span className="num">12,000+</span><span>Annual Event Attendees</span></div>
              <div className="reach-tile"><span className="num">314</span><span>Active Chapters</span></div>
              <div className="reach-tile"><span className="num">350+</span><span>Sponsors & Partners</span></div>
            </div>
          </div>
        </section>
      </main>

      {/* ===== Footer ===== */}
      <footer className="footer py-4 mt-auto">
        <div className="container text-center">
          <div className="social-icons">
            <a
              href="https://www.instagram.com/shpegeorgia/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/shpe-georgia-professional-chapter/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://www.facebook.com/gtshpe/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="https://www.youtube.com/user/SHPENational"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <i className="fab fa-youtube"></i>
            </a>
          </div>

          {/* Copyright */}
          <div className="footer-copy">
            © {new Date().getFullYear()} SHPE Georgia Professional. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
