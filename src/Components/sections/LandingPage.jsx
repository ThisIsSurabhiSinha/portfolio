import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { ThemeContext } from "../../context/ThemeContext";
import Lottie from "lottie-react";
import { Fade } from "react-awesome-reveal";
import "../../Css/LandingPage.css";
import animationData from "../../assets/landing-page.json";
          
      const LandingPage = () => {
        const { isDarkMode } = useContext(ThemeContext);
      
        return (
          <>
          <Helmet>
            <title>Surabhi Sinha — Software Engineer</title>
            <meta name="description" content="Software Engineer with production experience at Google and Motive. Specialising in mobile development (iOS/Android), backend APIs, and authentication systems." />
            <meta name="keywords" content="Surabhi Sinha, Software Engineer, iOS, Android, Kotlin Multiplatform, SwiftUI, Google, Motive" />
          </Helmet>
          <Fade>
            <div className="wrap-landing-page">
            <div className={`landing-page-main ${isDarkMode ? "dark" : "light"}`}>
              <div className="intro" >
                {/* Heading and Subheading */}
                <h1 className= {`intro-heading ${isDarkMode ? "dark" : "light"}`}>
                  Hi, I'm <span className="my-name">Surabhi Sinha</span>  <span role="img" className="wave" aria-label="waving hand">
             👋
           </span>
                </h1>
                <p className= {`intro-subheading ${isDarkMode ? "dark" : "light"}`}>
                  Software Engineer with production experience at Google and Motive — building authentication systems, mobile apps, and backend APIs using KMP/KMM, SwiftUI, Java, and REST APIs. 1000+ coding problems solved.
                </p>
      
                <a
                  href="https://drive.google.com/file/d/10iasX2fYpArQ72dI6eUehUhsiAuSELVE/view?usp=share_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`download-button ${isDarkMode ? "dark" : "light"}`}
                >
                  Resume
                </a>
              </div>
      
              <div className="img-home-main">
                <div className="my-pic">
                  <Lottie animationData={animationData} loop={true} />
                </div>
              </div>
            </div>
            </div>
          </Fade>
          </>
        );
      };
      
      export default LandingPage;
      