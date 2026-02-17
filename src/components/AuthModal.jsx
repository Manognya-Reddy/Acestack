import React from "react";
import "../styles/authmodal.css";

export default function AuthModal({ onClose }) {
  return (
    <div className="modal-overlay">
      <div className="auth-modal">
        <button className="close-btn" onClick={onClose}>×</button>

        <h2>Welcome</h2>
        <p>Login or create an account to continue</p>

        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />

        <button className="primary-btn full">Login</button>

        <p className="divider">or</p>

        <button className="secondary-btn full">Sign Up</button>
      </div>
    </div>
  );
}
