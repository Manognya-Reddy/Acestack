import React from "react";
import ReactFlow from "reactflow";
import "reactflow/dist/style.css";

export default function DsaRM() {
  const nodes = [
    { id: "1", data: { label: "DSA" }, position: { x: 400, y: 0 } },

    { id: "2", data: { label: "Complexity" }, position: { x: 200, y: 100 } },
    { id: "3", data: { label: "Recursion" }, position: { x: 600, y: 100 } },

    { id: "4", data: { label: "Arrays" }, position: { x: 100, y: 250 } },
    { id: "5", data: { label: "Strings" }, position: { x: 200, y: 250 } },
    { id: "6", data: { label: "Linked List" }, position: { x: 300, y: 250 } },
    { id: "7", data: { label: "Stack" }, position: { x: 400, y: 250 } },
    { id: "8", data: { label: "Queue" }, position: { x: 500, y: 250 } },

    { id: "9", data: { label: "Trees" }, position: { x: 200, y: 400 } },
    { id: "10", data: { label: "BST" }, position: { x: 100, y: 500 } },
    { id: "11", data: { label: "Heap" }, position: { x: 200, y: 500 } },
    { id: "12", data: { label: "Trie" }, position: { x: 300, y: 500 } },

    { id: "13", data: { label: "Graphs" }, position: { x: 500, y: 400 } },
    { id: "14", data: { label: "BFS" }, position: { x: 450, y: 500 } },
    { id: "15", data: { label: "DFS" }, position: { x: 550, y: 500 } },

    { id: "16", data: { label: "Sorting" }, position: { x: 300, y: 650 } },
    { id: "17", data: { label: "Binary Search" }, position: { x: 400, y: 650 } },
    { id: "18", data: { label: "Greedy" }, position: { x: 500, y: 650 } },
    { id: "19", data: { label: "Dynamic Programming" }, position: { x: 600, y: 650 } },
  ];

  const edges = [
    { id: "e1-2", source: "1", target: "2" },
    { id: "e1-3", source: "1", target: "3" },

    { id: "e2-4", source: "2", target: "4" },
    { id: "e2-5", source: "2", target: "5" },
    { id: "e2-6", source: "2", target: "6" },
    { id: "e2-7", source: "2", target: "7" },
    { id: "e2-8", source: "2", target: "8" },

    { id: "e4-9", source: "4", target: "9" },
    { id: "e9-10", source: "9", target: "10" },
    { id: "e9-11", source: "9", target: "11" },
    { id: "e9-12", source: "9", target: "12" },

    { id: "e7-13", source: "7", target: "13" },
    { id: "e13-14", source: "13", target: "14" },
    { id: "e13-15", source: "13", target: "15" },

    { id: "e10-16", source: "10", target: "16" },
    { id: "e16-17", source: "16", target: "17" },
    { id: "e17-18", source: "17", target: "18" },
    { id: "e18-19", source: "18", target: "19" },
  ];

  return (
    <div style={{ width: "100%", height: "800px" }}>
      <ReactFlow nodes={nodes} edges={edges} fitView />
    </div>
  );
}
