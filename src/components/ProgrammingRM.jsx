import React from "react";
import ReactFlow from "reactflow";
import "reactflow/dist/style.css";

export default function ProgrammingRM() {
  const nodes = [
    { id: "1", data: { label: "Programming" }, position: { x: 400, y: 0 } },

    { id: "2", data: { label: "Basics" }, position: { x: 200, y: 100 } },
    { id: "3", data: { label: "Control Flow" }, position: { x: 600, y: 100 } },

    { id: "4", data: { label: "Variables" }, position: { x: 100, y: 200 } },
    { id: "5", data: { label: "Data Types" }, position: { x: 200, y: 200 } },
    { id: "6", data: { label: "Operators" }, position: { x: 300, y: 200 } },

    { id: "7", data: { label: "If-Else" }, position: { x: 500, y: 200 } },
    { id: "8", data: { label: "Switch" }, position: { x: 600, y: 200 } },
    { id: "9", data: { label: "Loops" }, position: { x: 700, y: 200 } },

    { id: "10", data: { label: "Functions" }, position: { x: 400, y: 300 } },
    { id: "11", data: { label: "Recursion" }, position: { x: 400, y: 400 } },

    { id: "12", data: { label: "Arrays" }, position: { x: 250, y: 500 } },
    { id: "13", data: { label: "Strings" }, position: { x: 400, y: 500 } },

    { id: "14", data: { label: "OOP" }, position: { x: 550, y: 500 } },
    { id: "15", data: { label: "Classes & Objects" }, position: { x: 550, y: 600 } },
    { id: "16", data: { label: "Inheritance" }, position: { x: 450, y: 700 } },
    { id: "17", data: { label: "Polymorphism" }, position: { x: 550, y: 700 } },
    { id: "18", data: { label: "Encapsulation" }, position: { x: 650, y: 700 } },
  ];

  const edges = [
    { id: "e1-2", source: "1", target: "2" },
    { id: "e1-3", source: "1", target: "3" },

    { id: "e2-4", source: "2", target: "4" },
    { id: "e2-5", source: "2", target: "5" },
    { id: "e2-6", source: "2", target: "6" },

    { id: "e3-7", source: "3", target: "7" },
    { id: "e3-8", source: "3", target: "8" },
    { id: "e3-9", source: "3", target: "9" },

    { id: "e9-10", source: "9", target: "10" },
    { id: "e10-11", source: "10", target: "11" },

    { id: "e11-12", source: "11", target: "12" },
    { id: "e11-13", source: "11", target: "13" },
    { id: "e11-14", source: "11", target: "14" },

    { id: "e14-15", source: "14", target: "15" },
    { id: "e15-16", source: "15", target: "16" },
    { id: "e15-17", source: "15", target: "17" },
    { id: "e15-18", source: "15", target: "18" },
  ];

  return (
    <div style={{ width: "100%", height: "800px" }}>
      <ReactFlow nodes={nodes} edges={edges} fitView />
    </div>
  );
}
