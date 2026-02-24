import React, { useState } from "react";
import "../styles/authmodal.css";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
export default function AuthModal({ onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleLogin = async () => {
  setError("");
  if (!email || !password) {
    setError("Please enter email and password.");
    return;
  }
  try {
    await signInWithEmailAndPassword(auth, email.trim(), password);
    onClose();
    navigate("/profile");
  } catch (err) {
    if (err.code === "auth/invalid-email") {
      setError("Invalid email format.");
    } else if (err.code === "auth/user-not-found") {
      setError("No account found. Please sign up.");
    } else if (err.code === "auth/wrong-password") {
      setError("Incorrect password.");
    } else {
      setError("Something went wrong.");
    }
  }
};
const handleSignup = async () => {
  setError("");
  if (!email || !password) {
    setError("Please enter email and password.");
    return;
  }
  if (password.length < 6) {
    setError("Password must be at least 6 characters.");
    return;
  }
  try {
    await createUserWithEmailAndPassword(auth, email.trim(), password);
    onClose();
    navigate("/profile");
  } catch (err) {
    if (err.code === "auth/email-already-in-use") {
      setError("Email already exists. Please login.");
    } else if (err.code === "auth/invalid-email") {
      setError("Invalid email format.");
    } else {
      setError("Something went wrong.");
    }
  }
};
  return (
    <div className="modal-overlay">
      <div className="auth-modal">
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>Welcome</h2>
        <p>Login or create an account to continue</p>
        <input 
          type="email" 
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input 
          type="password" 
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p style={{ color: "red", fontSize: "14px" }}>{error}</p>}
        <button className="primary-btn full" onClick={handleLogin}>
          Login
        </button>
        <p className="divider">or</p>
        <button className="secondary-btn full" onClick={handleSignup}>
          Sign Up
        </button>
      </div>
    </div>
  );
}