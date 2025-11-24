import React from 'react';
import "../interfaceSettings.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; 
import { Link } from "react-router-dom";

const MembershipPage = () => {
  const PhotoBox = ({ src, alt }) => (
  <div className="photo-box mb-4">
    <img src={src} alt={alt} className="img-fluid rounded shadow-sm" />
  </div>
);

  return (
    <div className="page-wrapper d-flex flex-column min-vh-100">
 {/* ===== Nav Bar (Bootstrap) ===== */}

<nav className="navbar navbar-expand-lg bg-light sub-nav">
  <div className="container-fluid">

    {/* Logo */}
    <Link className="navbar-brand" to="/">
      <img
        src="/images/logo.png"
        alt="SHPE Georgia Logo"
        className="logo-img"
      />
    </Link>

    {/* Mobile Toggle / Hamburger */}
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#membershipNavbar"
      aria-controls="membershipNavbar"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    {/* Collapsible Menu */}
    <div className="collapse navbar-collapse" id="membershipNavbar">
      <ul className="navbar-nav ms-auto align-items-center gap-2">

        <li className="nav-item">
          <Link to="/" className="nav-link btn-home">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link btn-home">About</Link>
        </li>
        <li className="nav-item">
          <Link to="/ourteam" className="nav-link btn-home">OurTeam</Link>
        </li>
        <li className="nav-item">
          <Link to="/membershpe" className="nav-link btn-home">MemberShpe</Link>
        </li>
        <li className="nav-item">
          <Link to="/calendar" className="nav-link btn-home">Calendar</Link>
        </li>
        <li className="nav-item">
          <Link to="/resources" className="nav-link btn-home">Resources</Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link btn-home">Login</Link>
        </li>

      </ul>
    </div>

  </div>
</nav>

{/* Thin Line */}
<div className="thin-bar"></div>
<main className="container py-5 flex-grow-1">
  <h1 className="welcome-heading">Our Initiatives</h1>
    <div className="membership-page">

  {/* Initiatives Grid */}
  <section className="regions container py-5">

    {/* SHPETINAS */}
    <div className="row align-items-center my-5">
      <div className="col-md-6 text-center mb-4 mb-md-0">
<PhotoBox src="/images/SHPEtinaSummit.jpg" alt="SHPE Event" />
      </div>
      <div className="col-md-6">
        <div className="card block-center shadow-sm p-4">
          <h2 className="text-center text-uppercase mb-3">SHPETINAS</h2>
          <p>
            The SHPEtinas program accelerates and affirms Latina representation at all levels of STEM
            corporate and academic leadership. At SHPE Georgia we follow this mission through workshops,
            panel discussions, and events that help increase women representation in STEM.
          </p>
        </div>
      </div>
    </div>

    {/* MENTORSHPE */}
    <div className="row align-items-center my-5 flex-md-row-reverse">
      <div className="col-md-6 text-center mb-4 mb-md-0">
<PhotoBox src="/images/GeorgiaSubregionalRetreat.png" alt="Retreat Event" />
      </div>
      <div className="col-md-6">
        <div className="card block-center shadow-sm p-4">
          <h2 className="text-center text-uppercase mb-3">MENTORSHPE</h2>
          <p>
            The MentorSHPE program expands professional networks, builds new skills, and promotes 
            personal and professional growth through structured mentoring relationships.
          </p>
        </div>
      </div>
    </div>

    {/* SCHOLARSHPE */}
    <div className="row align-items-center my-5">
      <div className="col-md-6 text-center mb-4 mb-md-0">
<PhotoBox src="/images/GBM4.jpg" alt="General Body Meeting" />
      </div>
      <div className="col-md-6">
        <div className="card block-center shadow-sm p-4">
          <h2 className="text-center text-uppercase mb-3">SCHOLARSHPE</h2>
          <p>
            SHPE awards over $5,000,000 in scholarships annually, helping Hispanic students overcome
            financial barriers and pursue STEM degrees.
          </p>
        </div>
      </div>
    </div>

    {/* SHPE JR */}
    <div className="row align-items-center my-5 flex-md-row-reverse">
      <div className="col-md-6 text-center mb-4 mb-md-0">
<PhotoBox src="/images/MentorSHPE1.jpg" alt="MentorSHPE Program" />
      </div>
      <div className="col-md-6">
        <div className="card block-center shadow-sm p-4">
          <h2 className="text-center text-uppercase mb-3">SHPE JR.</h2>
          <p>
            SHPE Jr. empowers Hispanic youth by providing STEM education, mentorship, and 
            access to engineering opportunities across Georgia.
          </p>
        </div>
      </div>
    </div>

  </section>

  {/* Member of the Month */}
  <section className="support py-5 text-center">
    <h2 className="spaced-title">MEMBER OF THE MONTH</h2>
    <p>Photo slideshow goes here</p>
  </section>

</div>
</main>
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
        </div>
        <div className="footer-copy">
          © {new Date().getFullYear()} SHPE Georgia Professional. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default MembershipPage;