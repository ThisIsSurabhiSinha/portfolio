import React, { useContext } from "react";
import { useSpring, useTrail, animated } from "@react-spring/web";
import "../../Css/Skills.css";
import { ThemeContext } from "../../context/ThemeContext";
import { skillRows } from "../../data/skills";

const Skills = () => {
  const { isDarkMode } = useContext(ThemeContext);

  const trail = useTrail(skillRows.length, {
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

  const themeClass = isDarkMode ? "dark" : "light";

  return (
    <div className={`skills-container ${themeClass}`}>
      <animated.h2 style={spring}>My Skills</animated.h2>
      <div className={`skills-content ${themeClass}`}>
        {trail.map((animation, index) => {
          const row = skillRows[index];
          const isLinkRow = row.items.length > 0 && typeof row.items[0] === "object";
          return (
            <animated.div
              key={index}
              style={animation}
              className={`skill-row ${themeClass}`}
            >
              <div className={`skill-items ${themeClass}`}>
                <h3>{row.title}</h3>
                <div className={`skill-item-place ${themeClass}`}>
                  {isLinkRow
                    ? row.items.map((profile, idx) => (
                        <a
                          key={idx}
                          href={profile.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`skill-item ${themeClass}`}
                        >
                          {profile.name}
                        </a>
                      ))
                    : row.items.map((item, idx) => (
                        <div key={idx} className={`skill-item ${themeClass}`}>
                          {item}
                        </div>
                      ))}
                </div>
              </div>
            </animated.div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
