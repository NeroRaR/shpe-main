import React, { useEffect, useState } from 'react';
import '../interfaceSettings.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';

function ScholarShpe() {
  const [userName, setUserName] = useState('');
  const [selectedImage, setSelectedImage] = useState(null); 

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

  const openImage = (src) => {
    setSelectedImage(src);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className="page-wrapper d-flex flex-column min-vh-100">
     {/* Sub Navigation (Bootstrap Navbar) */}
<nav className="navbar navbar-expand-lg bg-light sub-nav">
  <div className="container-fluid">

    {/* Logo */}
    <Link className="navbar-brand" to="/">
      <img src="/images/logo.png" alt="SHPE Georgia Logo" className="logo-img" />
    </Link>

    {/* Mobile Toggle Button */}
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

    {/* Collapsible Navigation Items */}
    <div className="collapse navbar-collapse" id="mainNavbar">
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

        {/* Login / Logout */}
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

{/* Thin Blue Bar */}
<div className="thin-bar"></div>


      {/* Main Content */}
      <div className="container mt-5 text-center flex-grow-1">
        <h1 className="resources-header">ScholarSHPE</h1>
        <p className="text-muted mx-auto" style={{ maxWidth: '700px' }}>
          SHPE Georgia Professional’s Scholarship is a growing initiative that supports students 
          across Georgia’s colleges and universities. Our inaugural scholarship was hosted by 
          Georgia Power, awarding two students with $2,500 each! We’re excited to continue 
          empowering students and expanding our scholarship opportunities in the years ahead.
        </p>

        <h3 className="mt-5" style={{ color: 'var(--shpe-blue)' }}>
          🎓 2025 Powering Potential Scholarship Winners
        </h3>

        {/* Winner Images Section */}
        <div className="row mt-4 justify-content-center">
          <div className="col-md-5 col-sm-8 mb-4">
            <div className="card shadow-sm h-100 p-3">
              <img 
                src="/images/scholarShpe1.jpg" 
                alt="Scholarship Winner 1" 
                className="img-fluid rounded mb-3 clickable-image"
                onClick={() => openImage('/images/scholarShpe1.jpg')}
              />
              <h5 className="fw-bold">Mariana Vega Aranda</h5>
              <p className="text-muted">University of Georgia</p>
            </div>
          </div>

          <div className="col-md-5 col-sm-8 mb-4">
            <div className="card shadow-sm h-100 p-3">
              <img 
                src="/images/scholarShpe2.jpg" 
                alt="Scholarship Winner 2" 
                className="img-fluid rounded mb-3 clickable-image"
                onClick={() => openImage('/images/scholarShpe2.jpg')}
              />
              <h5 className="fw-bold">Miguel Beltran</h5>
              <p className="text-muted">Georgia Institute of Technology</p>
            </div>
          </div>
        </div>
      </div>

      {/* Image Overlay Popup */}
      {selectedImage && (
        <div className="image-overlay" onClick={closeImage}>
          <img
            src={selectedImage}
            alt="Scholarship Winner Enlarged"
            className="image-overlay-img"
            onClick={(e) => e.stopPropagation()} // don't close when clicking on the image
          />
        </div>
      )}

      {/* Footer */}
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

export default ScholarShpe;