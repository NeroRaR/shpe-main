import React, { useState } from 'react';
import '../interfaceSettings.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      alert('Please enter your email.');
      return;
    }

    try {
      const res = await fetch('/api/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (data.success) {
        setMessage('Check your email for reset instructions.');
      } else {
        setMessage(data.message || 'Email not found.');
      }
    } catch (err) {
      console.error('Forgot Password error:', err);
      setMessage('Something went wrong. Please try again later.');
    }
  };

  return (
     <div className="container d-flex justify-content-center align-items-center min-vh-100">
        <div className="row w-100 justify-content-center">
        <div className="col-md-5 frame p-4">
          <div className="box">
          <h2 className="text-center mb-4">Forgot Password</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Enter your email</label>
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn-primary w-100">Send Reset Link</button>
          </form>

          {message && <p className="text-center mt-3 text-success">{message}</p>}

          <p className="text-center mt-3">
            Back to <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default ForgotPassword;
