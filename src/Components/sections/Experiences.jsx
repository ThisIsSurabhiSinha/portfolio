import React, { useContext } from "react";
import Timeline from "../common/Timeline";
import "../../Css/Experiences.css";
import "../../Css/About.css";
import { ThemeContext } from "../../context/ThemeContext";
import { experiences } from "../../data/experiences";

const Experiences = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div className={`experience-timeline-section ${isDarkMode ? "dark" : "light"}`}>
      <h1 style={{ textAlign: "center" }}>My Journey So Far</h1>
      <Timeline timelineData={experiences} />
    </div>
  );
};

export default Experiences;
