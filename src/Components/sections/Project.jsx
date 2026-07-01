import projects from "../../data/projects.js";
import React, { useEffect, useState, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ProjectCard from "../common/ProjectCard";
import "../../Css/Projects.css";
import { Slide } from "react-awesome-reveal";
import { ThemeContext } from "../../context/ThemeContext";

export const useQuery = () => new URLSearchParams(useLocation().search);

const Project = () => {
  const query = useQuery();
  const navigate = useNavigate();
  const { isDarkMode } = useContext(ThemeContext);
  const themeClass = isDarkMode ? "dark" : "light";

  const [selectedCategory, setSelectedCategory] = useState(
    query.get("category") || "All"
  );

  useEffect(() => {
    navigate(`?category=${selectedCategory}`);
  }, [selectedCategory, navigate]);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category.includes(selectedCategory));

  return (
    <div className={`project-container ${themeClass}`}>
      <Slide triggerOnce direction="left">
        <h1>My Projects</h1>
      </Slide>

      <Slide triggerOnce direction="right">
        <div className={`category-navbar ${themeClass}`}>
          {["All", "Fullstack", "Frontend", "Backend"].map((category) => (
            <button
              key={category}
              className={`category-button ${selectedCategory === category ? "active-category" : ""} ${themeClass}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </Slide>

      {filteredProjects.length === 0 ? (
        <div className="no-projects">
          <h2>No Projects Found</h2>
          <p>There are currently no projects to display in this category.</p>
        </div>
      ) : (
        <Slide triggerOnce cascade>
          <div className={`display-projects ${themeClass}`}>
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
