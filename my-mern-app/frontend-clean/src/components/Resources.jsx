import React from 'react';
import '../interfaceSettings.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';

function Resources() {
  return (
    <div className="page-wrapper d-flex flex-column min-vh-100">
      
    {/* ===== Nav Bar (Bootstrap) ===== */}
<nav className="navbar navbar-expand-lg bg-light sub-nav">
  <div className="container-fluid">

    <Link className="navbar-brand" to="/">
      <img
        src="/images/logo.png"
        alt="SHPE Georgia Logo"
        className="logo-img"
      />
    </Link>

    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#mainNavbar"
      aria-controls="mainNavbar"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="mainNavbar">
      <ul className="navbar-nav ms-auto align-items-center gap-2">
        <li className="nav-item"><Link to="/" className="nav-link btn-home">Home</Link></li>
        <li className="nav-item"><Link to="/about" className="nav-link btn-home">About</Link></li>
        <li className="nav-item"><Link to="/ourteam" className="nav-link btn-home">OurTeam</Link></li>
        <li className="nav-item"><Link to="/membershpe" className="nav-link btn-home">MemberShpe</Link></li>
        <li className="nav-item"><Link to="/calendar" className="nav-link btn-home">Calendar</Link></li>
        <li className="nav-item"><Link to="/resources" className="nav-link btn-home">Resources</Link></li>
        <li className="nav-item"><Link to="/login" className="nav-link btn-home">Login</Link></li>
      </ul>
    </div>

  </div>
</nav>

<div className="thin-bar"></div>



      {/* Main Contents */}
      <div className="container mt-4 text-center flex-grow-1">
        <h1 className="resources-header">Member Resources</h1>
        <p className="mb-3">A place where members can access shared materials and resources.</p><br></br>

        {/* Resources Sections */}
        <div className="row g-4 mt-3">
          {/* Section 1 */}
          <div className="col-md-4">
            <div className="card shadow-sm h-100 resources-card">
              <div className="card-body">
                <h5 className="card-title">FAQ</h5>
                <p className="card-text">Our frequently asked questions and answers. </p><br></br>
                <a href="#" className="btn-outline-resources">Take a Look</a>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="col-md-4">
            <div className="card shadow-sm h-100 resources-card">
              <div className="card-body">
                <h5 className="card-title">Scholarship Opportunities</h5>
                <p className="card-text">Learn more about SHPE scholarship opportunities.</p><br></br>
                <Link to="/resources/scholarshpe" className="btn-outline-resources">Take a Look</Link>
                {/*<a href="#" className="btn-outline-resources">Take a Look</a>*/}
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className="col-md-4">
            <div className="card shadow-sm h-100 resources-card">
              <div className="card-body">
                <h5 className="card-title">Volunteering Opportunities</h5>
                <p className="card-text">Check out our volunteering opportunties.</p><br></br>
                <a href="#" className="btn-outline-resources">Take a Look</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer py-4 mt-auto">
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

export default Resources;
