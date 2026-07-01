
import React, { useContext } from "react";
import Lottie from "lottie-react";
import animationData from "../../assets/Main Scene.json";
import { ThemeContext } from "../../context/ThemeContext";
import "../../Css/About.css";

const About = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const highlight_class = `highlight ${isDarkMode ? "dark" : "light"}`;
  return (
    <div className={`about-section ${isDarkMode ? "dark" : "light"}`}>
      <div className="about-animation">
        <Lottie animationData={animationData} ></Lottie>
      </div>
      <div className="about-text">
        <h2>Get to Know Me</h2>
        <p>
          I'm <span className={highlight_class}>Surabhi Sinha</span>, a software
          engineer with hands-on industry experience at{" "}
          <span className={highlight_class}>Google</span> and{" "}
          <span className={highlight_class}>Motive</span>, shipping production
          features across mobile, backend, and infrastructure.
        </p>
        <p>
          I specialize in{" "}
          <span className={highlight_class}>iOS & Android development</span> using
          SwiftUI, UIKit, and Kotlin Multiplatform, and have built{" "}
          <span className={highlight_class}>backend systems</span> with Java,
          Python, and REST APIs. I'm also passionate about{" "}
          <span className={highlight_class}>AI and agentic tooling</span> —
          integrating LLMs and RAG into real-world workflows.
        </p>
        <p>
          I thrive in{" "}
          <span className={highlight_class}>fast-paced environments</span>, taking
          full ownership from design to deployment, and love solving problems that
          make a{" "}
          <span className={highlight_class}>tangible impact</span> at scale.
        </p>
      </div>
    </div>
  );
};

export default About;
