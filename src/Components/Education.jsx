

import React ,{useContext} from "react";
import placeholder from "../assests/placeholder.jpeg";
import Timeline from "./Timeline"; 
import "../Css/Education.css";
import "../Css/About.css";
import { ThemeContext } from "./ThemeContext";

const Education = () => {
  
  const { isDarkMode } = useContext(ThemeContext);
  const timelineData = [
    
    {
      type: "right-container",
      img: placeholder,
      title: "Bachelor of Technology in Computer Science and Engineering",
      institute: "Indian Institute of Information Technology (IIIT) Kottayam",
      duration: "2022-2026",
      description: "Currently pursuing B.Tech with CGPA: 9.05/10. Focus on software development, backend systems, mobile applications, and AI-assisted development. Active participation in coding contests, hackathons, and technical workshops. Strong foundation in DSA, OOP, Design Patterns, and production software engineering.",
    },
    
    {
      type: "left-container",
      img: placeholder,
      title: "Intermediate",
      duration: "2022",
      institute: "Kendriya Vidyalaya Kanpur Cantt",
      description: "Achieved 87%, excelling in mathematics and science. This period helped establish foundation for computer science career path and engineering studies.",
    },

    {
  type: "right-container",
  img: placeholder,
  title: "High School",
  duration: "2019",
  institute: "Kendriya Vidyalaya Kanpur Cantt",
  description: "Completed high school with 95% in science subjects. Developed strong problem-solving skills and foundational interest in technology."
}
  ];

  return (
    <div className={`education-timeline-section ${isDarkMode ? "dark" : "light"}`}>
      <h1 >The Road to Knowledge: My Education Timeline</h1>
      <Timeline timelineData={timelineData} />
      
    </div>
  );
};

export default Education;

