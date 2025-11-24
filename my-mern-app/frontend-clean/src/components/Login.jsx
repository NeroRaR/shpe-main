import React, { useState } from 'react';
import '../interfaceSettings.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';

function Login() {
  const [isMember, setIsMember] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    let payload = { email, password };
    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (data.success) {
        //console.log('Login successful');
        localStorage.setItem('token', data.token); // Save token for later use
        localStorage.setItem('user', JSON.stringify(data.user));
        alert(`Welcome back, ${data.user.name}!`);
        window.location.href = '/'; // after logging in, this is where the user goes
    } else {
      alert(data.message || 'Login failed');
    }
    } catch (err) {
      console.error('Login error:', err);
    }
  };

  return (
    <>
    {/* ===== Login Navbar (Bootstrap) ===== */}
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

    {/* Mobile toggler */}
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#loginNav"
      aria-controls="loginNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    {/* ONLY HOME BUTTON */}
    <div className="collapse navbar-collapse" id="loginNav">
      <ul className="navbar-nav ms-auto align-items-center text-center">

        <li className="nav-item mx-auto">
          <Link to="/" className="nav-link btn-home">
            Home
          </Link>
        </li>

      </ul>
    </div>

  </div>
</nav>

{/* Thin Line Under Nav */}
<div className="thin-bar"></div>



      {/* Login Section */}
      <div className="container d-flex justify-content-center align-items-center min-vh-100">
        <div className="row w-100 justify-content-center">
          
          {/* Left Panel */}
          
          <div className="col-md-5 d-flex flex-column justify-content-center align-items-center frame text-center">
            <div className="box">
            <img src="/images/logo.png" alt="SHPE Logo" className="logo-img mb-3" />
            <h3>Welcome to SHPE Georgia</h3>
            <p className="text-muted">Login to access your dashboard</p>
            </div>
          </div>

          {/* Right Panel */}
          <div className="col-md-5 frame">
            <div className="box">
            <h2 className="mb-4 text-center title">Login</h2>
            <form onSubmit={handleSubmit}>
             

              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email or Username</label>
                <input
                  type="text"
                  id="email"
                  className="form-control"
                  placeholder="Enter your email or username"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn-primary w-100">{isMember ? "Login" : "Sign Up"}</button>
             
            </form>
             

            {/* Toggle Login / Sign Up */}
            <div className="extra-links text-center mt-3">
              {isMember ? (
                <>
                  <a href="/ForgotPassword">Forgot Password?</a>
                  <p className="mt-2">
                    New here?{" "}
                 <Link to="/signUp" className="btn-link p-0">Sign Up</Link>

                  </p>
                </>
              ) : (
                <p>
                  Already a member?{" "}
                  <button
                    type="button"
                    className="btn btn-link p-0"
                    onClick={() => setIsMember(true)}
                  >
                    Login
                  </button>
                </p>
              )}</div>
            </div>
          </div>
        </div>
      </div>
          {/* Footer */}
<footer className="footer py-4">
  <div className="container text-center">
    <div className="social-icons">
      <a href="https://www.instagram.com/shpenational/" target="_blank" rel="noopener noreferrer" className="social-link"><i className="fab fa-instagram"></i></a>
      <a href="https://www.linkedin.com/company/society-of-hispanic-professional-engineers/" target="_blank" rel="noopener noreferrer" className="social-link"><i className="fab fa-linkedin"></i></a>
      <a href="https://www.facebook.com/shpenational/" target="_blank" rel="noopener noreferrer" className="social-link"><i className="fab fa-facebook"></i></a>
      <a href="https://www.youtube.com/user/SHPENational" target="_blank" rel="noopener noreferrer" className="social-link"><i className="fab fa-youtube"></i></a>
    </div>
  </div>
        <div className="footer-copy">
          © {new Date().getFullYear()} SHPE Georgia Professional. All rights reserved.
        </div>
</footer>
    </>
  );
}

export default Login;
