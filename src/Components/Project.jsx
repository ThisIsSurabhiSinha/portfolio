
// import React, { useEffect, useState, useContext } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import ProjectCard from "./ProjectCard";
// import "../Css/Projects.css";
// import { Slide } from "react-awesome-reveal";
// import projects from "../utilities/projectList";
// import { ThemeContext } from "./ThemeContext";

// export const useQuery = () => {
//   return new URLSearchParams(useLocation().search);
// };

// const Project = () => {
//   const query = useQuery();
//   const navigate = useNavigate();
//   const { isDarkMode } = useContext(ThemeContext);

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
//     <div className={`project-container ${isDarkMode ? "dark" : "light"}`}>
//       <Slide triggerOnce direction="left">
//         <h1>My Projects</h1>
//       </Slide>

//       <Slide triggerOnce direction="right">
//         <div className={`category-navbar ${isDarkMode ? "dark" : "light"}`}>
//           {["All", "Fullstack", "Frontend", "Backend"].map((category) => (
//             <button
//               key={category}
//               className={`category-button ${
//                 selectedCategory === category ? "active-category" : ""
//               } ${isDarkMode ? "dark" : "light"}`}
//               onClick={() => setSelectedCategory(category)}
//             >
//               {category}
//             </button>
//           ))}
//         </div>
//       </Slide>

//       <Slide triggerOnce cascade>
//         <div className={`display-projects ${isDarkMode ? "dark" : "light"}`}>
//           {filteredProjects.map((project, index) => (
//             <ProjectCard key={index} project={project} />
//           ))}
//         </div>
//       </Slide>
//     </div>
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
import Loader from "./Loader"; // Import your Loader component

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
  const [loading, setLoading] = useState(true); // Track loading state

  useEffect(() => {
    // Simulate loading delay when category changes
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust delay as needed
    return () => clearTimeout(timer);
  }, [selectedCategory]);

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
                selectedCategory === category ? "active-category" : ""
              } ${isDarkMode ? "dark" : "light"}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </Slide>

      {/* Show Loader while loading */}
      {loading ? (
        <Loader />
      ) : (
        <Slide triggerOnce cascade>
          <div className={`display-projects ${isDarkMode ? "dark" : "light"}`}>
            {filteredProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </Slide>
      )}
    </div>
  );
};

export default Project;
