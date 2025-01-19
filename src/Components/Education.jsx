

import React from "react";
import placeholder from "../assests/placeholder.jpeg";
import Timeline from "./Timeline"; // Import the Timeline component

import "../Css/Education.css";

const Education = () => {
  const timelineData = [
    {
      type: "right-container",
      img: placeholder,
      title: "High School",
      duration: "2019",
      institute: "Kendriya Vidyalaya Kanpur Cantt",
      description: "Completed my high school education with a focus on science subjects. It was a foundational phase where I developed strong problem-solving skills and an interest in technology.",
    },
    {
      type: "left-container",
      img: placeholder,
      title: "Intermediate",
      duration: "2022",
      institute: "Kendriya Vidyalaya Kanpur Cantt",
      description: "Achieved a percentage of 87%, excelling in mathematics and science. This period helped me decide to pursue computer science as a career path, laying the groundwork for my engineering studies.",
    },
    {
      type: "right-container",
      img: placeholder,
      title: "Bachelors of Technology in Computer Science",
      institute: "Indian Institute of Information Technology Kottayam",
      duration: "2022-2026",
      description: "Currently pursuing my B.Tech with a focus on software development, programming languages, and data structures. I have an SGPA of 9.1 up to semester 5 and have actively participated in coding contests, hackathons, and technical workshops.",
    },
  ];
  // The rest of your component rendering the timeline

  return (
    <div className="education-timeline-section">
      <h1>The Road to Knowledge: My Education Timeline</h1>
      <Timeline timelineData={timelineData} />
    </div>
  );
};

export default Education;
