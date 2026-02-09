// src/components/RegisterForm.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../Api";

function RegisterForm() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [generalError, setGeneralError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const validateClientSide = () => {
    const newErrors = {};

    if (!form.username.trim()) {
      newErrors.username = "Username is required.";
    } else if (form.username.trim().length < 3) {
      newErrors.username = "Username must be at least 3 characters.";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else {
      const emailRegex = /^[^@]+@[^@]+\.[^@]+$/;
      if (!emailRegex.test(form.email.trim())) {
        newErrors.email = "Invalid email format.";
      }
    }

    if (!form.password) {
      newErrors.password = "Password is required.";
    } else if (form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    } else {
      const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
      if (!specialCharRegex.test(form.password)) {
        newErrors.password =
          "Password must contain at least one special character.";
      }
    }

    if (!form.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password.";
    } else if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setGeneralError("");
    setSuccess("");

    const clientErrors = validateClientSide();
    if (Object.keys(clientErrors).length > 0) {
      setErrors(clientErrors);
      return;
    }

    try {
      const res = await registerUser(form);
      setSuccess(res.message || "User registered successfully.");
      // optional: after successful register, you could auto-redirect:
      // navigate("/login");
    } catch (err) {
      if (err && err.errors) {
        setErrors(err.errors);
      } else {
        setGeneralError("Something went wrong. Please try again.");
      }
    }
  };

  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <div className="card">
      <h2>Register</h2>
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
          <label>Email</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
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

        <div className="form-control">
          <label>Confirm Password</label>
          <input
            name="confirmPassword"
            type="password"
            value={form.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && (
            <span className="error">{errors.confirmPassword}</span>
          )}
        </div>

        {generalError && <div className="error">{generalError}</div>}
        {success && <div className="success">{success}</div>}

        <button type="submit">Register</button>

        {/* Login navigation for existing users */}
        <button
          type="button"
          onClick={goToLogin}
          style={{ marginTop: "0.5rem", backgroundColor: "#6b7280" }}
        >
          Already a user? Login
        </button>
      </form>
    </div>
  );
}

export default RegisterForm;
