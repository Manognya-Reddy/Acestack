import React from "react";
import "../styles/resourcecard.css";

function ResourceCard({ title, description, link, icon }) {
  return (
    <div className="resource-card">
      <div className="resource-icon">
        {icon}
      </div>

      <div className="resource-content">
        <h3>{title}</h3>
        <p>{description}</p>

        <a href={link} target="_blank" rel="noopener noreferrer">
          <button className="resource-btn">Visit Resource</button>
        </a>
      </div>
    </div>
  );
}

export default ResourceCard;

