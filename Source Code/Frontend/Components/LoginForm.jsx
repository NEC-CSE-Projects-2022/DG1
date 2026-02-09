// src/components/LoginForm.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../Api"; // or "../api" if your file is lowercase

function LoginForm({ onLogin }) {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setSuccess("");

    try {
      const res = await loginUser(form);
      setSuccess(res.message || "Login successful.");

      if (onLogin) {
        onLogin({
          username: res.username,
          email: res.email,
        });
      }

      // optional: redirect after login, e.g. to /data or /create-data
      navigate("/home");
    } catch (err) {
      if (err && err.errors) {
        setErrors(err.errors);
      } else {
        setErrors({ general: "Something went wrong. Please try again." });
      }
    }
  };

  const goToRegister = () => {
    navigate("/register");
  };

  return (
    <div className="card">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-control">
          <label>Username</label>
          <input
            name="username"
            value={form.username}
            onChange={handleChange}
          />
          {errors.username && (
            <span className="error">{errors.username}</span>
          )}
        </div>

        <div className="form-control">
          <label>Password</label>
          <input
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
          />
          {errors.password && (
            <span className="error">{errors.password}</span>
          )}
        </div>

        {errors.general && <div className="error">{errors.general}</div>}
        {success && <div className="success">{success}</div>}

        <button type="submit">Login</button>

        {/* Register navigation */}
        <button
          type="button"
          onClick={goToRegister}
          style={{ marginTop: "0.5rem", backgroundColor: "#6b7280" }}
        >
          New user? Register
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
