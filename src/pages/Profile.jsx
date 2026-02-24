import { useState, useEffect } from "react";
import { auth } from "../firebase";
import { db } from "../firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "../styles/profile.css";

export default function Profile() {
  const user = auth.currentUser;
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    college: "",
    degree: "",
    year: ""
  });
  useEffect(() => {
    const fetchData = async () => {
      if (!user) return;
      try {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setFormData(docSnap.data());
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };
    fetchData();
  }, [user]);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSave = async () => {
    if (!user) return;

    try {
      await setDoc(doc(db, "users", user.uid), formData);
      alert("Profile saved successfully!");
    } catch (error) {
      console.error("Error saving profile:", error);
      alert("Error saving profile.");
    }
  };
  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };
  return (
    <div id="profile-page">
      <div className="profile-container">
        <h2>Profile</h2>

        <p className="profile-email">
          <strong>Email:</strong> {user?.email}
        </p>

        <div className="profile-section-title">Personal Details</div>

        <input
          className="profile-input"
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
        />

        <input
          className="profile-input"
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
        />

        <div className="profile-section-title">Education</div>

        <input
          className="profile-input"
          type="text"
          name="college"
          placeholder="College Name"
          value={formData.college}
          onChange={handleChange}
        />

        <input
          className="profile-input"
          type="text"
          name="degree"
          placeholder="Degree (e.g. BTech CSE)"
          value={formData.degree}
          onChange={handleChange}
        />

        <input
          className="profile-input"
          type="text"
          name="year"
          placeholder="Year (e.g. 2nd Year)"
          value={formData.year}
          onChange={handleChange}
        />

        <div className="profile-actions">
          <button className="primary-btn" onClick={handleSave}>
            Save Profile
          </button>

          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}