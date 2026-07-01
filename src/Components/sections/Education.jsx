
import React, { useContext } from "react";
import Timeline from "../common/Timeline";
import "../../Css/Education.css";
import "../../Css/About.css";
import { ThemeContext } from "../../context/ThemeContext";
import { educationData } from "../../data/education";

const Education = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div className={`education-timeline-section ${isDarkMode ? "dark" : "light"}`}>
      <h1>The Road to Knowledge: My Education Timeline</h1>
      <Timeline timelineData={educationData} />
    </div>
  );
};

export default Education;

