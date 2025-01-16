import React from "react";
import "../Css/ProjectCard.css";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="card-inner">
        {/* Front Side */}
        <div className="card-front">
          <img src={project.image} alt={`${project.name} preview`} />
          <h2>{project.name}</h2>
        </div>

        {/* Back Side */}
        <div className="card-back">
          <h3>Technologies Used:</h3>
          <p>{project.technologies}</p>
          <h4>Description:</h4>
          <p>{project.description}</p>
          <div className="project-links">
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              GitHub Code
            </a>
            <a href={project.deployed} target="_blank" rel="noopener noreferrer">
              Live Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
