// src/components/CreateDataPage.jsx
import React, { useState } from "react";

function CreateDataPage({ onAddItem }) {
  const [form, setForm] = useState({
    patientName: "",
    age: "",
    weight: "",
    phone: "",
    gender: "",
    yearOfJoin: "",
    disease: "",
    month: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmed = {
      patientName: form.patientName.trim(),
      age: form.age.trim(),
      weight: form.weight.trim(),
      phone: form.phone.trim(),
      gender: form.gender.trim(),
      yearOfJoin: form.yearOfJoin.trim(),
      disease: form.disease.trim(),
      month: form.month.trim(),
      date: form.date.trim(),
      time: form.time.trim(),
    };

    if (
      !trimmed.patientName ||
      !trimmed.age ||
      !trimmed.weight ||
      !trimmed.phone ||
      !trimmed.gender ||
      !trimmed.yearOfJoin ||
      !trimmed.disease ||
      !trimmed.month ||
      !trimmed.date ||
      !trimmed.time
    ) {
      // you could show an error message here if you want
      return;
    }

    onAddItem(trimmed);

    // reset form
    setForm({
      patientName: "",
      age: "",
      weight: "",
      phone: "",
      gender: "",
      yearOfJoin: "",
      disease: "",
      month: "",
      date: "",
      time: "",
    });
  };

  return (
    <div className="create-data-container">
      <h2>Create Data</h2>
      <p className="page-intro">
        Use this page to add new healthcare-related patient records. Each record
        will be visible on the Data page with a serial number and its details.
      </p>

      <form
        onSubmit={handleSubmit}
        className="form"
        style={{ marginTop: "1rem" }}
      >
        <div className="form-control">
          <label>Patient Name</label>
          <input
            name="patientName"
            value={form.patientName}
            onChange={handleChange}
            placeholder="Patient full name"
          />
        </div>

        <div className="form-control">
          <label>Age</label>
          <input
            name="age"
            type="number"
            value={form.age}
            onChange={handleChange}
            placeholder="e.g. 45"
          />
        </div>

        <div className="form-control">
          <label>Weight (kg)</label>
          <input
            name="weight"
            type="number"
            value={form.weight}
            onChange={handleChange}
            placeholder="e.g. 68"
          />
        </div>

        <div className="form-control">
          <label>Phone Number</label>
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="e.g. 9876543210"
          />
        </div>

        <div className="form-control">
          <label>Gender</label>
          <select
            name="gender"
            value={form.gender}
            onChange={handleChange}
          >
            <option value="">Select gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="form-control">
          <label>Year of Join</label>
          <input
            name="yearOfJoin"
            type="number"
            value={form.yearOfJoin}
            onChange={handleChange}
            placeholder="e.g. 2025"
          />
        </div>

        <div className="form-control">
          <label>Disease / Condition</label>
          <input
            name="disease"
            value={form.disease}
            onChange={handleChange}
            placeholder="e.g. Diabetes, Hypertension"
          />
        </div>

        {/* New fields: month, date, time */}
        <div className="form-control">
          <label>Month</label>
          <input
            name="month"
            type="month"
            value={form.month}
            onChange={handleChange}
          />
        </div>

        <div className="form-control">
          <label>Date</label>
          <input
            name="date"
            type="date"
            value={form.date}
            onChange={handleChange}
          />
        </div>

        <div className="form-control">
          <label>Time</label>
          <input
            name="time"
            type="time"
            value={form.time}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Add Record</button>
      </form>
    </div>
  );
}

export default CreateDataPage;
