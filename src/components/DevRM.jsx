import React from "react";
import ReactFlow from "reactflow";
import "reactflow/dist/style.css";

export default function DevRM() {
  const nodes = [
    { id: "1", data: { label: "Development" }, position: { x: 400, y: 0 } },

    { id: "2", data: { label: "Web Dev" }, position: { x: 150, y: 150 } },
    { id: "3", data: { label: "App Dev" }, position: { x: 400, y: 150 } },
    { id: "4", data: { label: "AI/ML" }, position: { x: 650, y: 150 } },

    { id: "5", data: { label: "HTML" }, position: { x: 50, y: 300 } },
    { id: "6", data: { label: "CSS" }, position: { x: 150, y: 300 } },
    { id: "7", data: { label: "JavaScript" }, position: { x: 250, y: 300 } },
    { id: "8", data: { label: "React" }, position: { x: 150, y: 450 } },
    { id: "9", data: { label: "Backend" }, position: { x: 250, y: 450 } },

    { id: "10", data: { label: "Flutter" }, position: { x: 350, y: 300 } },
    { id: "11", data: { label: "APIs" }, position: { x: 450, y: 300 } },
    { id: "12", data: { label: "Deployment" }, position: { x: 400, y: 450 } },

    { id: "13", data: { label: "Python" }, position: { x: 600, y: 300 } },
    { id: "14", data: { label: "NumPy/Pandas" }, position: { x: 700, y: 300 } },
    { id: "15", data: { label: "Machine Learning" }, position: { x: 650, y: 450 } },
    { id: "16", data: { label: "Deep Learning" }, position: { x: 750, y: 450 } },
  ];

  const edges = [
    { id: "e1-2", source: "1", target: "2" },
    { id: "e1-3", source: "1", target: "3" },
    { id: "e1-4", source: "1", target: "4" },

    { id: "e2-5", source: "2", target: "5" },
    { id: "e2-6", source: "2", target: "6" },
    { id: "e2-7", source: "2", target: "7" },
    { id: "e7-8", source: "7", target: "8" },
    { id: "e7-9", source: "7", target: "9" },

    { id: "e3-10", source: "3", target: "10" },
    { id: "e3-11", source: "3", target: "11" },
    { id: "e11-12", source: "11", target: "12" },

    { id: "e4-13", source: "4", target: "13" },
    { id: "e13-14", source: "13", target: "14" },
    { id: "e14-15", source: "14", target: "15" },
    { id: "e15-16", source: "15", target: "16" },
  ];

  return (
    <div style={{ width: "100%", height: "800px" }}>
      <ReactFlow nodes={nodes} edges={edges} fitView />
    </div>
  );
}

