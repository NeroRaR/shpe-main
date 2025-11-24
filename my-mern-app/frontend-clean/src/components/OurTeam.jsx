import React from "react";
import "../interfaceSettings.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from "react-router-dom";

const TEAM = [
{ name: "Alan Oliver", title: "President", imageSrc: "", description: "", link:"https://www.linkedin.com/in/alanoliver1999/"},
{ name: "Wendy Arreguin", title: "Director of Internal Affairs", imageSrc: "", description: "",link:"https://www.linkedin.com/in/wendyarreguin/" },
{ name: "Gabriel Kerven", title: "Director of External Affairs", imageSrc: "", description:"", link: "https://www.linkedin.com/in/grkerven/" },
{ name: "Andi Gonzalez", title: "Director of Administration", imageSrc: "", description: "", link: "https://www.linkedin.com/in/andrea-gonzalez-macedo/" },
{ name: "Lara Rios", title: "Director of Student Affairs", imageSrc: "", description: "", link:"https://www.linkedin.com/in/lara-rios/" },
{ name: "Flavia Perez", title: "Director of MemberSHPE", imageSrc: "", description: "", link:"" },
{ name: "Leslie Alvarado Sanchez", title: "Director of Marketing", imageSrc: "", description: "",link:"https://www.linkedin.com/in/leslie-alvarado-sanchez/"  },
{ name: "Daniel Salinas", title: "Director of Finance", imageSrc: "", description: "", link:"https://www.linkedin.com/in/danielsalinas33/" },
{ name: "Stephanie Corona", title: "SHPEtinas Director", imageSrc: "", description: "", link:"https://www.linkedin.com/in/stephanie-corona-50/" },
{ name: "Galilea Garica", title: "MentorSHPE Lead", imageSrc: "", description: "",link:"https://www.linkedin.com/in/galileangarcia/" },
{ name: "Athanasios Grivakis", title: "Community Outreach Representative", imageSrc: "", description: "", link:"https://www.linkedin.com/in/athanasios-grivakis/" },
{ name: "Aaron Estrada", title: "Student Affairs Lead", imageSrc: "", description: "", link:"https://www.linkedin.com/in/aaron-estrada-2a6a21195/" },
{ name: "Brian Ulloa", title: "Social Lead", imageSrc: "", description: "", link:"https://www.linkedin.com/in/brian-ulloa/" }
];

function OurTeam({ userName, handleLogout }) {
  return (
    <div className="page-wrapper d-flex flex-column min-vh-100">
   {/* Sub Navigation */}
<nav className="navbar navbar-expand-lg bg-light sub-nav">
  <div className="container-fluid">
    {/* Logo */}
    <Link className="navbar-brand" to="/">
      <img src="/images/logo.png" alt="SHPE Georgia Logo" className="logo-img" />
    </Link>

    {/* Toggler for mobile */}
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
          <Link to="/" className="nav-link btn-home">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link btn-home">About</Link>
        </li>
        <li className="nav-item">
          <Link to="/ourTeam" className="nav-link btn-home">OurTeam</Link>
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

        {/*  Login / Logout here */}
        {!userName ? (
          <li className="nav-item">
            <Link to="/login" className="nav-link btn-home">Login</Link>
          </li>
        ) : (
          <li className="nav-item">
            <button onClick={handleLogout} className="nav-link btn-home">
              Logout
            </button>
          </li>
        )}
      </ul>
    </div>
  </div>
</nav>

{/* Thin Bar under navbar (keep your style) */}
<div className="thin-bar"></div>

        {/* Team Section */}
      <main className="container py-5 flex-grow-1">
        <h1 className="welcome-heading">Meet Our Team</h1>
        <div className="team-grid">
          {TEAM.map((member) => (
            <div key={member.name} className="team-card text-center">
              <img
                src={member.imageSrc || "/images/placeholder.png"}
                alt={member.name}
                className="team-img mb-3"
              />
              <h5>{member.name}</h5>
              <p className="text-muted">{member.title}</p>
              {member.description && <p>{member.description}</p>}
               <a href={member.link} target="_blank" rel="noopener noreferrer" className="btn-outline-resources">
                Connect
              </a>

            </div>
          ))}
        </div>
      </main>


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
export default OurTeam;