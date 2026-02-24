import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyB9OsiKFVx4HECK_WY1k3ZKiyu2p6Wl-Uk",
  authDomain: "acestack-f4462.firebaseapp.com",
  projectId: "acestack-f4462",
  storageBucket: "acestack-f4462.firebasestorage.app",
  messagingSenderId: "922004899703",
  appId: "1:922004899703:web:26128a3d0fae660c6f8372",
  measurementId: "G-G7FY59RGF9"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);