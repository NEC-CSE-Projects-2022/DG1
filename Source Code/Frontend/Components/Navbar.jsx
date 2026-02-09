// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar({ user, onLogout }) {
  const [open, setOpen] = useState(false);

  const toggleDropdown = () => setOpen((prev) => !prev);

  const handleLogoutClick = (e) => {
    e.stopPropagation();
    if (onLogout) onLogout();
    setOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <span className="nav-logo">Healthcare App</span>

        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/about" className="nav-link">
          About
        </Link>
        <Link to="/data" className="nav-link">
          Data
        </Link>
        <Link to="/create-data" className="nav-link">
          Create Data
        </Link>
      </div>

      <div className="nav-right">
        {!user && (
          <Link to="/login" className="nav-link">
            Login
          </Link>
        )}

        {user && (
          <div className="profile-wrapper" onClick={toggleDropdown}>
            <div className="profile-chip">
              <span className="profile-avatar">
                {user.username ? user.username.charAt(0).toUpperCase() : "U"}
              </span>
              <span className="profile-name">{user.username}</span>
            </div>

            {open && (
              <div className="profile-dropdown">
                <p>
                  <strong>User:</strong> {user.username}
                </p>
                {user.email && (
                  <p>
                    <strong>Email:</strong> {user.email}
                  </p>
                )}
                <button
                  type="button"
                  className="logout-btn"
                  onClick={handleLogoutClick}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
