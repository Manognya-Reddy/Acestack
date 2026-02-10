import React from "react";
import ResourceCard from "../components/ResourceCard";
import "../styles/resources.css";
import {
  FaBook,
  FaCode,
  FaList,
  FaBookOpen,
  FaLaptopCode,
  FaCodeBranch,
  FaClipboardList,
  FaServer,
  FaMap,
  FaGraduationCap,
  FaUniversity,
  FaCheckCircle,
} from "react-icons/fa";

function Resources() {
  const resources = [
    {
      title: "Striver A2Z Sheet",
      description: "Complete structured DSA roadmap.",
      link: "https://takeuforward.org/strivers-a2z-dsa-course/",
      icon: <FaBook />,
    },
    {
      title: "NeetCode 150",
      description: "Curated interview problems.",
      link: "https://neetcode.io/practice",
      icon: <FaCode />,
    },
    {
      title: "Blind 75",
      description: "Most popular interview questions.",
      link: "https://leetcode.com/discuss/general-discussion/460599/blind-75-leetcode-questions",
      icon: <FaList />,
    },
    {
      title: "Love Babbar Sheet",
      description: "Beginner-friendly DSA sheet.",
      link: "https://www.geeksforgeeks.org/dsa-sheet-by-love-babbar/",
      icon: <FaBookOpen />,
    },
    {
      title: "Striver SDE Sheet",
      description: "Top coding interview problems.",
      link: "https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/",
      icon: <FaLaptopCode />,
    },
    {
      title: "LeetCode Top Interview",
      description: "Official LeetCode interview list.",
      link: "https://leetcode.com/explore/interview/card/top-interview-questions-easy/",
      icon: <FaCodeBranch />,
    },
    {
      title: "Tech Interview Handbook",
      description: "Complete interview guide.",
      link: "https://www.techinterviewhandbook.org/",
      icon: <FaClipboardList />,
    },
    {
      title: "System Design Primer",
      description: "Popular system design resource.",
      link: "https://github.com/donnemartin/system-design-primer",
      icon: <FaServer />,
    },
    {
      title: "Roadmap.sh CS",
      description: "Visual CS learning roadmap.",
      link: "https://roadmap.sh/computer-science",
      icon: <FaMap />,
    },
    {
      title: "OSSU CS Curriculum",
      description: "Free full CS curriculum.",
      link: "https://github.com/ossu/computer-science",
      icon: <FaGraduationCap />,
    },
    {
      title: "Coding Interview University",
      description: "Google-style prep plan.",
      link: "https://github.com/jwasham/coding-interview-university",
      icon: <FaUniversity />,
    },
    {
      title: "GFG Must-Do Questions",
      description: "Classic placement questions.",
      link: "https://www.geeksforgeeks.org/must-do-coding-questions-for-companies-like-amazon-microsoft-adobe/",
      icon: <FaCheckCircle />,
    },
  ];

  return (
    <div className="resources-page">
      <h1 className="resources-title">Resources</h1>

      <div className="resources-grid">
        {resources.map((res, index) => (
          <ResourceCard
            key={index}
            title={res.title}
            description={res.description}
            link={res.link}
            icon={res.icon}
          />
        ))}
      </div>
    </div>
  );
}

export default Resources;
