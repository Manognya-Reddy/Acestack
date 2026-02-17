import React from "react";
import "../styles/featurecard.css";

export default function FeatureCard({ title, text, image, onClick, buttonColor }) {
  return (
    <div className="feature-card">
      <img src={image} alt={title} className="feature-image" />
      <h3>{title}</h3>
      <p>{text}</p>
      <button
        className="feature-btn"
        style={{ backgroundColor: buttonColor }}
        onClick={onClick}
      >
        Explore
      </button>
    </div>
  );
}
