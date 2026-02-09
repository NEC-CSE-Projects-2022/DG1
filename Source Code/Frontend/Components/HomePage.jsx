// src/components/HomePage.jsx
import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="home-container">
      {/* Hero section */}
      <section className="home-hero">
        <div className="home-hero-content">
          <h1>Secure Healthcare Data Portal</h1>
          <p>
            This web application provides a secure interface for managing
            healthcare data. Authorized users can register, log in, view
            existing records, and create new data entries in a controlled
            environment.
          </p>

          <div className="home-cta-buttons">
            <Link to="/login" className="home-cta primary">
              Get Started
            </Link>
            <Link to="/about" className="home-cta secondary">
              Learn More
            </Link>
          </div>
        </div>

        <div className="home-hero-highlight">
          <h3>Why this system?</h3>
          <ul>
            <li>Authentication with validated login and registration.</li>
            <li>Dedicated pages for viewing and creating data.</li>
            <li>Clear separation between frontend (React) and backend (Flask).</li>
          </ul>
        </div>
      </section>

      {/* Features section */}
      <section className="home-section">
        <h2 className="home-section-title">Key Features</h2>
        <div className="home-grid">
          <div className="home-card">
            <h3>User Authentication</h3>
            <p>
              Secure registration and login with validation for username, email,
              and strong passwords containing special characters.
            </p>
          </div>
          <div className="home-card">
            <h3>Data Management</h3>
            <p>
              Access a Data page where authorized users can view records,
              and use the Create Data page to add new entries to the system.
            </p>
          </div>
          <div className="home-card">
            <h3>Role of Backend (Flask)</h3>
            <p>
              The Flask backend handles all validation logic, API endpoints, and
              secure communication with the React frontend.
            </p>
          </div>
          <div className="home-card">
            <h3>Clean Frontend Structure</h3>
            <p>
              A React-based interface with navigation, profile dropdown,
              and separate components for login, registration, and content pages.
            </p>
          </div>
        </div>
      </section>

      {/* How it works section */}
      <section className="home-section">
        <h2 className="home-section-title">How It Works</h2>
        <div className="home-steps">
          <div className="home-step">
            <span className="home-step-number">1</span>
            <h4>Register</h4>
            <p>
              New users create an account with a unique username, valid email,
              and a strong password. Duplicate usernames and emails are blocked.
            </p>
          </div>
          <div className="home-step">
            <span className="home-step-number">2</span>
            <h4>Login</h4>
            <p>
              After registration, users log in and get access to protected
              sections like the Data and Create Data pages.
            </p>
          </div>
          <div className="home-step">
            <span className="home-step-number">3</span>
            <h4>Manage Data</h4>
            <p>
              Once authenticated, users can browse existing data and submit new
              entries through the interface, depending on your backend logic.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
