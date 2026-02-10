import React from 'react'
import '../styles/home.css'
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import FeatureCard from '../components/FeatureCard';
import Footer from '../components/Footer';
export default function Home() {
  return (
    <div id="homepage">
      <div id="intro">
        <div id="left-part">
          <h1>
            Master Your Placement Prep
            <span className="badge badge-secondary"></span>
          </h1>

          <h4>
            A structured roadmap, smart flashcards, and curated resources —
            everything you need to crack technical interviews with confidence.
            <span className="badge badge-secondary"></span>
          </h4>

          <p className="hero-subtext">
            No more random preparation. Follow a clear path, track your progress,
            and focus only on what actually gets you hired.
          </p>

          <h6>
            Learn with direction. Prepare with confidence.
            <span className="badge badge-secondary"></span>
          </h6>

          <div className="hero-cta">
            <button className="primary-btn">Get Started</button>
            <button className="secondary-btn">View Roadmap</button>
          </div>
        </div>

        <div id="right-part">
          <img src={img1} alt="AceStack illustration" />
        </div>
      </div>
      <div id="features">
        <h1 id="feature-heading">Explore our features</h1>
      </div>
      <div id="cards-block">
        <FeatureCard
          title="Structured Roadmaps"
          text="Clear step-by-step paths for DSA, CS fundamentals, and interview prep."
          image={img2}
        />
        <FeatureCard
          title="Smart Flashcards"
          text="Revise faster using spaced repetition and active recall."
          image={img3}
        />
        <FeatureCard
          title="Curated Resources"
          text="Only the best articles, videos, and practice problems."
          image={img4}
        />
      </div>
      <Footer />

    </div>
  );
}
