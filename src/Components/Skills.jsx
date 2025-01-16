import React from "react";
import { useSpring, useTrail, animated } from "@react-spring/web";
import "../Css/Skills.css";

const Skills = () => {
  const rows = [
    { title: "Languages", items: ["JavaScript", "Python", "C++", "Java"] },
    { title: "Tools", items: ["Git", "Docker", "VS Code", "Figma"] },
    { title: "Libraries", items: ["React", "Redux", "Tailwind", "Bootstrap"] },
    { title: "DSA & Algorithms", items: ["Sorting", "Graph Algorithms", "DP", "Backtracking"] },
    { title: "Coding Profiles", items: ["LeetCode", "Codeforces", "Coding Ninjas", "GeeksForGeeks"] },
  ];

  // Trail animation for rows
  const trail = useTrail(rows.length, {
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    delay: 200,
    config: { tension: 200, friction: 15 },
  });

  // Spring animation for heading
  const spring = useSpring({
    from: { opacity: 0, transform: "scale(0.9)" },
    to: { opacity: 1, transform: "scale(1)" },
    config: { tension: 200, friction: 20 },
  });

  return (
    <div className="skills-container">
      <animated.h2 style={spring}>My Skills</animated.h2>
      <div className="skills-content">
        {trail.map((animation, index) => (
          <animated.div key={index} style={animation} className="skill-row">
            
            <div className="skill-items">
            <h3>{rows[index].title}</h3>
              <div className="skill-item-place">
              {rows[index].items.map((item, idx) => (
                <animated.div
                  key={idx}
                  style={{
                    opacity: 1,
                    transform: "translateX(0px)",
                    animation: `fadeInLeft ${idx * 0.1}s ease-out forwards`,
                  }}
                  className="skill-item"
                >
                  {item}
                </animated.div>
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
