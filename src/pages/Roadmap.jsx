import React, { useState } from "react";
import ProgrammingRM from "../components/ProgrammingRM";
import DsaRM from "../components/DsaRM";
import FundamentalsRM from "../components/FundamentalsRM";
import DevRM from "../components/DevRM";
import Tab from "../components/Tab";
import "../styles/roadmap.css";

export default function Roadmap() {
  const [activeRoadmap, setActiveRoadmap] = useState("programming");

  const renderTree = () => {
    switch (activeRoadmap) {
      case "programming":
        return <ProgrammingRM />;
      case "dsa":
        return <DsaRM />;
      case "cs":
        return <FundamentalsRM />;
      case "development":
        return <DevRM />;
      default:
        return <ProgrammingRM />;
    }
  };

  return (
    <div className="roadmap-container">
      <div className="roadmap-tabs">
        <Tab
          label="Programming"
          value="programming"
          active={activeRoadmap}
          setActive={setActiveRoadmap}
        />
        <Tab
          label="DSA"
          value="dsa"
          active={activeRoadmap}
          setActive={setActiveRoadmap}
        />
        <Tab
          label="CS Fundamentals"
          value="cs"
          active={activeRoadmap}
          setActive={setActiveRoadmap}
        />
        <Tab
          label="Development"
          value="development"
          active={activeRoadmap}
          setActive={setActiveRoadmap}
        />
      </div>

      <div className="roadmap-canvas">
        {renderTree()}
      </div>
    </div>
  );
}
