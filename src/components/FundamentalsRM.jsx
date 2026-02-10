import React from "react";
import ReactFlow from "reactflow";
import "reactflow/dist/style.css";

export default function FundamentalsRM() {
  const nodes = [
    { id: "1", data: { label: "CS Fundamentals" }, position: { x: 400, y: 0 } },

    { id: "2", data: { label: "Operating Systems" }, position: { x: 100, y: 150 } },
    { id: "3", data: { label: "DBMS" }, position: { x: 300, y: 150 } },
    { id: "4", data: { label: "Computer Networks" }, position: { x: 500, y: 150 } },

    { id: "5", data: { label: "Processes" }, position: { x: 50, y: 300 } },
    { id: "6", data: { label: "Threads" }, position: { x: 150, y: 300 } },
    { id: "7", data: { label: "Scheduling" }, position: { x: 100, y: 400 } },

    { id: "8", data: { label: "SQL" }, position: { x: 250, y: 300 } },
    { id: "9", data: { label: "Normalization" }, position: { x: 350, y: 300 } },
    { id: "10", data: { label: "Transactions" }, position: { x: 300, y: 400 } },

    { id: "11", data: { label: "OSI Model" }, position: { x: 450, y: 300 } },
    { id: "12", data: { label: "TCP/IP" }, position: { x: 550, y: 300 } },
    { id: "13", data: { label: "HTTP/HTTPS" }, position: { x: 500, y: 400 } },
  ];

  const edges = [
    { id: "e1-2", source: "1", target: "2" },
    { id: "e1-3", source: "1", target: "3" },
    { id: "e1-4", source: "1", target: "4" },

    { id: "e2-5", source: "2", target: "5" },
    { id: "e2-6", source: "2", target: "6" },
    { id: "e6-7", source: "6", target: "7" },

    { id: "e3-8", source: "3", target: "8" },
    { id: "e3-9", source: "3", target: "9" },
    { id: "e9-10", source: "9", target: "10" },

    { id: "e4-11", source: "4", target: "11" },
    { id: "e4-12", source: "4", target: "12" },
    { id: "e12-13", source: "12", target: "13" },
  ];

  return (
    <div style={{ width: "100%", height: "800px" }}>
      <ReactFlow nodes={nodes} edges={edges} fitView />
    </div>
  );
}
