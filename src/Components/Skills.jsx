import React, { useContext } from "react";
import { useSpring, useTrail, animated } from "@react-spring/web";
import "../Css/Skills.css";
import { ThemeContext } from "./ThemeContext.js";

const Skills = () => {
  const { isDarkMode } = useContext(ThemeContext);

  const rows = [
    {
      title: "Programming Languages",
      items: ["Java", "Python", "Swift", "Kotlin", "Ruby", "JavaScript", "C++", "C"],
    },
    {
      title: "Mobile Development",
      items: ["SwiftUI", "UIKit", "Kotlin Multiplatform", "iOS", "Android", "MVVM", "RxSwift"],
    },
    {
      title: "Backend & APIs",
      items: ["FastAPI", "Django", "REST APIs", "OAuth 2.0", "PKCE", "Protocol Buffers", "RPC", "Distributed Systems"],
    },
    {
      title: "Frontend",
      items: ["React.js", "HTML5", "CSS3", "Bootstrap", "D3.js"],
    },
    {
      title: "Databases",
      items: ["PostgreSQL", "MySQL", "SQLite"],
    },
    {
      title: "Cloud & Infrastructure",
      items: ["Linux", "Docker", "CI/CD", "GitHub Actions", "Jenkins"],
    },
    {
      title: "AI & ML",
      items: ["LLMs", "Agentic AI", "RAG", "NLP", "Machine Learning", "Prompt Engineering"],
    },
    {
      title: "App Development & Tooling",
      items: ["Xcode", "Android Studio", "Git", "VS Code", "GitHub Copilot", "Claude Code"],
    },
    {
      title: "Software Engineering",
      items: ["System Design", "Data Structures & Algorithms", "OOP", "Design Patterns", "Dependency Injection", "Testing", "Agile", "Scrum"],
    },
    {
      title: "Coding Profiles",
      items: [
        { name: "LeetCode", url: "https://leetcode.com/u/surabhi_sinha/" },
        { name: "Codechef", url: "https://www.codechef.com/users/surabhi64" },
        {
          name: "Coding Ninjas",
          url: "https://www.naukri.com/code360/profile/SurabhiSinha",
        },
        {
          name: "GeeksForGeeks",
          url: "https://www.geeksforgeeks.org/user/surabhith43jv/",
        },
      ],
    },
  ];

  const trail = useTrail(rows.length, {
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    delay: 200,
    config: { tension: 200, friction: 15 },
  });

  const spring = useSpring({
    from: { opacity: 0, transform: "scale(0.9)" },
    to: { opacity: 1, transform: "scale(1)" },
    config: { tension: 200, friction: 20 },
  });

  return (
    <div className={`skills-container ${isDarkMode ? "dark" : "light"}`}>
      <animated.h2 style={spring}>My Skills</animated.h2>
      <div className={`skills-content ${isDarkMode ? "dark" : "light"}`}>
        {trail.map((animation, index) => (
          <animated.div
            key={index}
            style={animation}
            className={`skill-row ${isDarkMode ? "dark" : "light"}`}
          >
            <div className={`skill-items ${isDarkMode ? "dark" : "light"}`}>
              <h3>{rows[index].title}</h3>
              <div
                className={`skill-item-place ${isDarkMode ? "dark" : "light"}`}
              >
                {rows[index].title === "Coding Profiles"
                  ? rows[index].items.map((profile, idx) => (
                      <a
                        key={idx}
                        href={profile.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`skill-item ${
                          isDarkMode ? "dark" : "light"
                        }`}
                      >
                        {profile.name}
                      </a>
                    ))
                  : rows[index].items.map((item, idx) => (
                      <div
                        key={idx}
                        className={`skill-item ${
                          isDarkMode ? "dark" : "light"
                        }`}
                      >
                        {item}
                      </div>
                    ))}
              </div>
            </div>
          </animated.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
