// import React from "react";
// import ProjectCard from "./ProjectCard";
// import  "../assests/placeholder.jpeg"
// import "../Css/Projects.css"
// import {Slide }from "react-reveal";

// import projects from "../utilities/projectList"

// const Project= () => {
//   return (
//     <Slide left>
//     <div style={{ backgroundColor: "#070719", color: "white", padding: "50px" }}>
//       <h1 style={{ textAlign: "center", color: "#58a6ff" }}>My Projects</h1>
//       <div className="display-projects">
//         {projects.map((project, index) => (
//           <ProjectCard key={index} project={project} />
//         ))}
//       </div>
//     </div>
//     </Slide>
//   );
// };

// export default Project;

// import React, { useState } from "react";
// import ProjectCard from "./ProjectCard";
// import "../Css/Projects.css";
// import { Slide } from "react-reveal";

// import projects from "../utilities/projectList";

// const Project = () => {
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   // Filter projects based on the selected category
//   const filteredProjects =
//     selectedCategory === "All"
//       ? projects
//       : projects.filter((project) => project.category === selectedCategory);

//   return (
//     <Slide left>
//       <div style={{ backgroundColor: "#070719", color: "white", padding: "50px" }}>
//         <h1 style={{ textAlign: "center", color: "#58a6ff" }}>My Projects</h1>

//         {/* Sub Navbar for Categories */}
//         <div className="category-navbar">
//           {["All", "Fullstack", "Frontend", "Backend"].map((category) => (
//             <button
//               key={category}
//               className={`category-button ${
//                 selectedCategory === category ? "active" : ""
//               }`}
//               onClick={() => setSelectedCategory(category)}
//             >
//               {category}
//             </button>
//           ))}
//         </div>

//         {/* Display Filtered Projects */}
//         <div className="display-projects">
//           {filteredProjects.map((project, index) => (
//             <ProjectCard key={index} project={project} />
//           ))}
//         </div>
//       </div>
//     </Slide>
//   );
// };

// export default Project;

// const useQuery = () => {
//   return new URLSearchParams(useLocation().search);
// };

// const Project = () => {
//   const query = useQuery();
//   const navigate = useNavigate();

//   const [selectedCategory, setSelectedCategory] = useState(
//     query.get("category") || "All"
//   );

//   useEffect(() => {
//     navigate(`?category=${selectedCategory}`);
//   }, [selectedCategory, navigate]);

//   const filteredProjects =
//     selectedCategory === "All"
//       ? projects
//       : projects.filter((project) => project.category === selectedCategory);

//   return (
//     <Slide left>
//       <div  className="project-container">
//         {/* <h1 style={{ textAlign: "center", color: "#58a6ff" }}>My Projects</h1> */}
//         <h1 >My Projects</h1>
//         <div className="category-navbar">
//           {["All", "Fullstack", "Frontend", "Backend"].map((category) => (
//             <button
//               key={category}
//               className={`category-button ${
//                 selectedCategory === category ? "active" : ""
//               }`}
//               onClick={() => setSelectedCategory(category)}
//             >
//               {category}
//             </button>
//           ))}
//         </div>

//         <div className="display-projects">
//           {filteredProjects.map((project, index) => (
//             <ProjectCard key={index} project={project} />
//           ))}
//         </div>
//       </div>
//     </Slide>
//   );
// };

// export default Project;

// import React, { useEffect, useState, useContext } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import ProjectCard from "./ProjectCard";
// import "../Css/Projects.css";
// import { Slide} from "react-awesome-reveal";
// import projects from "../utilities/projectList";
// import { ThemeContext } from "./ThemeContext";

// export const useQuery = () => {
//   return new URLSearchParams(useLocation().search);
// };

// const Project = () => {
//   const query = useQuery();
//   const navigate = useNavigate();
//   const {isDarkMode} = useContext(ThemeContext);

//   const [selectedCategory, setSelectedCategory] = useState(
//     query.get("category") || "All"
//   );

//   useEffect(() => {
//     navigate(`?category=${selectedCategory}`);
//   }, [selectedCategory, navigate]);

//   const filteredProjects =
//     selectedCategory === "All"
//       ? projects
//       : projects.filter((project) => project.category === selectedCategory);

//   return (
//     <Slide left>
//       <div className={`project-container ${isDarkMode ? "dark" : "light"}`}>
//           <h1>My Projects</h1>
//         <div className={`category-navbar ${isDarkMode ? "dark" : "light"}`}>
//           {["All", "Fullstack", "Frontend", "Backend"].map((category) => (
//             <button
//               key={category}
//               className={`category-button ${
//                 selectedCategory === category ? "active" : ""
//               } ${isDarkMode ? "dark" : "light"}`}
//               onClick={() => setSelectedCategory(category)}
//             >
//               {category}
//             </button>
//           ))}
//         </div>

//         <div className={`display-projects ${isDarkMode ? "dark" : "light"}`}>
//           {filteredProjects.map((project, index) => (
//             <ProjectCard key={index} project={project} />
//           ))}
//         </div>
//       </div>
//     </Slide>
//   );
// };

// export default Project;
import React, { useEffect, useState, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import "../Css/Projects.css";
import { Slide } from "react-awesome-reveal";
import projects from "../utilities/projectList";
import { ThemeContext } from "./ThemeContext";

export const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const Project = () => {
  const query = useQuery();
  const navigate = useNavigate();
  const { isDarkMode } = useContext(ThemeContext);

  const [selectedCategory, setSelectedCategory] = useState(
    query.get("category") || "All"
  );

  useEffect(() => {
    navigate(`?category=${selectedCategory}`);
  }, [selectedCategory, navigate]);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className={`project-container ${isDarkMode ? "dark" : "light"}`}>
      <Slide triggerOnce direction="left">
        <h1>My Projects</h1>
      </Slide>

      <Slide triggerOnce direction="right">
        <div className={`category-navbar ${isDarkMode ? "dark" : "light"}`}>
          {["All", "Fullstack", "Frontend", "Backend"].map((category) => (
            <button
              key={category}
              className={`category-button ${
                selectedCategory === category ? "active" : ""
              } ${isDarkMode ? "dark" : "light"}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </Slide>

      <Slide triggerOnce cascade>
        <div className={`display-projects ${isDarkMode ? "dark" : "light"}`}>
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </Slide>
    </div>
  );
};

export default Project;
