
import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import Lottie from "lottie-react";
import { Fade } from "react-awesome-reveal";
import "../Css/LandingPage.css";
import animationData from "../assests/landing-page.json";

const LandingPage = () => {
  

  // Handle resume download
  const { isDarkMode } = useContext(ThemeContext); 
  const handleDownloadResume = () => {
    const resumeUrl = `${process.env.PUBLIC_URL}/resume.pdf`;
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Surabhi_Sinha_Resume.pdf";
    link.click();
  };

  return (
    <Fade>
      <div className={`landing-page-main ${isDarkMode ? "dark" : "light"}`}>
        <div className="intro">
          <h1 className={`name ${isDarkMode ? "dark" : "light"}`}>
            Surabhi Sinha
            <span role="img" className="wave" aria-label="waving hand">
              👋
            </span>
          </h1>

          {/* Typing slider with conditional classes */}
          <div className={`typing-slider ${isDarkMode ? "dark" : "light"}`}>
            <p>Web Developer</p>
            <p>Web Designer</p>
            <p>Problem Solver</p>
          </div>

          {/* Download button with conditional classes */}
          <button
            className={`download-button ${isDarkMode ? "dark" : "light"}`}
            onClick={handleDownloadResume}
          >
            Download Resume
          </button>
        </div>

        <div className="img-home-main">
          <div className="my-pic">
            <Lottie animationData={animationData} loop={true} />
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default LandingPage;
