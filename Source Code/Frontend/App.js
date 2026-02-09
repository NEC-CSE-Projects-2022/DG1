// src/App.js
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import DataPage from "./components/DataPage";
import CreateDataPage from "./components/CreateDataPage";
import "./App.css";

function ProtectedRoute({ user, children }) {
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

function App() {
  const [user, setUser] = useState(null);

  // data stored per user: { [username]: [items...] }, loaded from localStorage
  const [dataByUser, setDataByUser] = useState(() => {
    try {
      const stored = localStorage.getItem("dataByUser");
      return stored ? JSON.parse(stored) : {};
    } catch {
      return {};
    }
  });

  // whenever dataByUser changes, save to localStorage
  useEffect(() => {
    try {
      localStorage.setItem("dataByUser", JSON.stringify(dataByUser));
    } catch {
      // ignore storage errors for now
    }
  }, [dataByUser]);

  const handleLogin = (userData) => {
    // userData should be { username, email }
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  const currentUsername = user?.username || null;

  const getCurrentUserItems = () => {
    if (!currentUsername) return [];
    return dataByUser[currentUsername] || [];
  };

  const handleAddItem = (item) => {
    if (!currentUsername) return; // guarded by ProtectedRoute but just in case

    setDataByUser((prev) => {
      const existing = prev[currentUsername] || [];
      return {
        ...prev,
        [currentUsername]: [
          ...existing,
          {
            id: Date.now(), // simple id for demo
            ...item,
          },
        ],
      };
    });
  };

  // NOTE: no handleDeleteItem anymore – records are view-only

  return (
    <Router>
      <div className="app-root">
        <Navbar user={user} onLogout={handleLogout} />

        <div className="page-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />

            {/* LOGIN: only login form */}
            <Route
              path="/login"
              element={<LoginForm onLogin={handleLogin} />}
            />

            {/* REGISTER: only register form */}
            <Route path="/register" element={<RegisterForm />} />

            <Route
              path="/data"
              element={
                <ProtectedRoute user={user}>
                  <DataPage items={getCurrentUserItems()} />
                </ProtectedRoute>
              }
            />

            <Route
              path="/create-data"
              element={
                <ProtectedRoute user={user}>
                  <CreateDataPage onAddItem={handleAddItem} />
                </ProtectedRoute>
              }
            />

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
