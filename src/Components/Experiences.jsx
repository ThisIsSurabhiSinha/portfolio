// 

import React from "react";
import placeholder from "../assests/placeholder.jpeg";
import Timeline from "./Timeline"; // Import the Timeline component

import "../Css/Experiences.css";

const Experiences = () => {
  const timelineData = [
    {
      type: "left-container",
      img: placeholder,
      title: "Internship at XYZ Corp",
      duration: "2023-2024",
      description: "I worked on developing new features for the website.",
    },
    {
      type: "right-container",
      img: placeholder,
      title: "Freelancer",
      duration: "2024-Present",
      description: "Building custom websites and applications for clients.",
    },
    {
      type: "left-container",
      img: placeholder,
      title: "Software Engineer",
      duration: "2025-2027",
      description: "Developing software solutions for enterprise clients.",
    },
  ];

  return (
    <div>
      <h1>Experience Timeline</h1>
      <Timeline timelineData={timelineData} />
    </div>
  );
};

export default Experiences;
