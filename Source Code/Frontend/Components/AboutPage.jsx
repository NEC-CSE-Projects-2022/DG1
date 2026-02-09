// src/components/AboutPage.jsx
import React from "react";

function AboutPage() {
  // Edit this array with your real team details
  const teammates = [
    {
      name: "G.Keerthana Lazarus",
      role: "Team Lead & project Developer",
      email: "keerthanagujjarlapud05@email.com",
      focus:
        "Leads the project architecture and implements the Flask backend, authentication, and validation logic.",
    },
    {
      name: "G.Laakshmi Thirupathamma",
      role: "Frontend Developer",
      email: "galilakshmi27@gmail.com",
      focus:
        "Builds the React UI, including login/register forms, navigation, and data pages.",
    },
    {
      name: "B.Jayabharathi",
      role: "Database & Security",
      email: "buddibudala@gmail.com",
      focus:
        "Designs the data model and focuses on secure storage and access of healthcare-related data.",
    },
    {
      name: "C.John Wesly",
      role: "Research & Documentation",
      email: "chinthiralajohnwesly@gmail.com",
      focus:
        "Collects requirements, documents the system, and connects the project to healthcare use cases.",
    },
  ];

  return (
    <div className="about-container">
      <section className="about-header">
        <h2>About Our Team</h2>
        <p>
          This project is developed as a collaborative effort by our team to
          demonstrate a secure healthcare data management system using a React
          frontend and a Flask backend. Each teammate contributed to different
          parts of the system, from UI and API development to security and
          documentation.
        </p>
      </section>

      <section className="about-team-section">
        <h3>Meet the Team</h3>
        <div className="team-grid">
          {teammates.map((member) => (
            <div key={member.email} className="team-card">
              <div className="team-avatar">
                {member.name.charAt(0).toUpperCase()}
              </div>
              <div className="team-content">
                <h4>{member.name}</h4>
                <p className="team-role">{member.role}</p>
                <p className="team-focus">{member.focus}</p>
                <p className="team-email">
                  <span>Email:</span> {member.email}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="about-summary">
        <h3>Project Overview</h3>
        <p>
          Our application focuses on secure access to healthcare data. Users can
          register with proper validation, log in through an authenticated
          workflow, and access dedicated pages for viewing and creating data.
          The backend enforces validation rules, while the frontend provides a
          clean and structured interface for interaction.
        </p>
        <p>
          As a team, we aimed to build something that is not only functional for
          academic evaluation, but also closely aligned with real-world
          healthcare systems where security, validation, and clear roles matter.
        </p>
      </section>
    </div>
  );
}

export default AboutPage;
