// src/components/DataPage.jsx
import React, { useState } from "react";

function DataPage({ items }) {
  const [search, setSearch] = useState("");
  const [selectedRecord, setSelectedRecord] = useState(null); // { item, serial } or null

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  // Attach serial numbers to items based on original index
  const itemsWithSerial = items.map((item, index) => ({
    item,
    serial: index + 1,
  }));

  const filtered = itemsWithSerial.filter(({ item, serial }) => {
    if (!search.trim()) return true;

    const q = search.trim().toLowerCase();

    // match by patient name (partial, case-insensitive)
    const nameMatch = item.patientName
      ? item.patientName.toLowerCase().includes(q)
      : false;

    // match by serial number (exact number)
    const serialMatch = /^\d+$/.test(q) && serial === Number(q);

    return nameMatch || serialMatch;
  });

  const openDetails = (record) => {
    setSelectedRecord(record);
  };

  const closeDetails = () => {
    setSelectedRecord(null);
  };

  return (
    <div>
      <h2>Data Page</h2>
      <p className="page-intro">
        This page lists all patient records created from the Create Data page
        for the currently logged-in user. Each record includes personal details
        and visit information. Use the search box to find a record by patient
        name or serial number, and tap a card to view it in detail.
      </p>

      {/* Search bar */}
      <div
        className="data-search"
        style={{ marginTop: "1rem", marginBottom: "0.5rem" }}
      >
        <input
          type="text"
          placeholder="Search by patient name or serial number (e.g. 1)"
          value={search}
          onChange={handleSearchChange}
          style={{
            width: "100%",
            maxWidth: "320px",
            padding: "0.5rem 0.7rem",
            borderRadius: "6px",
            border: "1px solid #d1d5db",
            fontSize: "0.9rem",
            outline: "none",
          }}
        />
      </div>

      <div className="data-list" style={{ marginTop: "1.5rem" }}>
        {items.length === 0 ? (
          <p style={{ fontSize: "0.9rem", color: "#6b7280" }}>
            No records available yet. Go to the Create Data page to add new
            records.
          </p>
        ) : filtered.length === 0 ? (
          <p style={{ fontSize: "0.9rem", color: "#6b7280" }}>
            No matching records for &quot;{search}&quot;.
          </p>
        ) : (
          filtered.map(({ item, serial }) => (
            <div
              key={item.id}
              className="card"
              style={{
                marginBottom: "0.75rem",
                cursor: "pointer",
              }}
              onClick={() => openDetails({ item, serial })}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "0.25rem",
                }}
              >
                <span style={{ fontWeight: 600 }}>
                  #{serial} — {item.patientName}
                </span>
              </div>

              <div
                style={{
                  marginTop: "0.4rem",
                  fontSize: "0.85rem",
                  color: "#374151",
                }}
              >
                <p>
                  <strong>Age:</strong> {item.age} years |{" "}
                  <strong>Weight:</strong> {item.weight} kg
                </p>
                <p>
                  <strong>Phone:</strong> {item.phone}
                </p>
                <p>
                  <strong>Gender:</strong> {item.gender} |{" "}
                  <strong>Year of Join:</strong> {item.yearOfJoin}
                </p>
                <p>
                  <strong>Disease:</strong> {item.disease}
                </p>
                <p>
                  <strong>Month:</strong> {item.month}
                </p>
                <p>
                  <strong>Date:</strong> {item.date}
                </p>
                <p>
                  <strong>Time:</strong> {item.time}
                </p>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Detail overlay */}
      {selectedRecord && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(15, 23, 42, 0.45)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 50,
          }}
        >
          <div
            style={{
              background: "#ffffff",
              borderRadius: "12px",
              padding: "1.5rem 1.8rem",
              width: "100%",
              maxWidth: "420px",
              boxShadow: "0 20px 40px rgba(15, 23, 42, 0.4)",
              position: "relative",
            }}
          >
            {/* Close button (top-right) */}
            <button
              type="button"
              onClick={closeDetails}
              style={{
                position: "absolute",
                top: "0.6rem",
                right: "0.7rem",
                width: "28px",
                height: "28px",
                borderRadius: "999px",
                border: "none",
                background: "#e5e7eb",
                color: "#111827",
                fontWeight: 700,
                fontSize: "1rem",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              ×
            </button>

            <h3
              style={{
                fontSize: "1.2rem",
                marginBottom: "0.5rem",
                color: "#111827",
              }}
            >
              #{selectedRecord.serial} — {selectedRecord.item.patientName}
            </h3>

            <div
              style={{
                marginTop: "0.4rem",
                fontSize: "0.9rem",
                color: "#374151",
                lineHeight: 1.7,
              }}
            >
              <p>
                <strong>Age:</strong> {selectedRecord.item.age} years
              </p>
              <p>
                <strong>Weight:</strong> {selectedRecord.item.weight} kg
              </p>
              <p>
                <strong>Phone:</strong> {selectedRecord.item.phone}
              </p>
              <p>
                <strong>Gender:</strong> {selectedRecord.item.gender}
              </p>
              <p>
                <strong>Year of Join:</strong> {selectedRecord.item.yearOfJoin}
              </p>
              <p>
                <strong>Disease:</strong> {selectedRecord.item.disease}
              </p>
              <p>
                <strong>Month:</strong> {selectedRecord.item.month}
              </p>
              <p>
                <strong>Date:</strong> {selectedRecord.item.date}
              </p>
              <p>
                <strong>Time:</strong> {selectedRecord.item.time}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DataPage;
