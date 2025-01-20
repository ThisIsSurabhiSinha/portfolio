import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import Lottie from "lottie-react";
import { Fade } from "react-awesome-reveal";
import "../Css/LandingPage.css";
import animationData from "../assests/landing-page.json";

// import React, { useContext } from "react";
// import { ThemeContext } from "./ThemeContext";
// import Lottie from "lottie-react";
// import { Fade } from "react-awesome-reveal";
// import "../Css/LandingPage.css";
// import animationData from "../assests/landing-page.json";

// const LandingPage = () => {
  

//   // Handle resume download
//   const { isDarkMode } = useContext(ThemeContext); 
//   const handleDownloadResume = () => {
//     const resumeUrl = `${process.env.PUBLIC_URL}/resume.pdf`;
//     const link = document.createElement("a");
//     link.href = resumeUrl;
//     link.download = "Surabhi_Sinha_Resume.pdf";
//     link.click();
//   };

//   return (
//     <Fade>
//       <div className={`landing-page-main ${isDarkMode ? "dark" : "light"}`}>
//         <div className="intro">
          

         

//           {/* Download button with conditional classes */}
//           <button
//             className={`download-button ${isDarkMode ? "dark" : "light"}`}
//             onClick={handleDownloadResume}
//           >
//             Download Resume
//           </button>
//         </div>

//         <div className="img-home-main">
//           <div className="my-pic">
//             <Lottie animationData={animationData} loop={true} />
//           </div>
//         </div>
//       </div>
//     </Fade>
//   );
// };

// export default LandingPage;

// <h1 className={`name ${isDarkMode ? "dark" : "light"}`}>
//           Hi, I'm Surabhi Sinha – A Passionate Full-Stack Developer and Problem Solver.
//             <span role="img" className="wave" aria-label="waving hand">
//               👋
//             </span>
//           </h1>

 {/* Typing slider with conditional classes */}
          {/* <div className={`typing-slider ${isDarkMode ? "dark" : "light"}`}>
            <p>Web Developer</p>
            <p>Web Designer</p>
            <p>Problem Solver</p>
          </div> */}



          
      const LandingPage = () => {
        const { isDarkMode } = useContext(ThemeContext);
      
        // Handle resume download
        const handleDownloadResume = () => {
          const resumeUrl = `${process.env.PUBLIC_URL}/resume.pdf`;
          const link = document.createElement("a");
          link.href = resumeUrl;
          link.download = "Surabhi_Sinha_Resume.pdf";
          link.click();
        };
      
        return (
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
                  A Full-Stack Developer with hands-on experience in Python, Django, and JavaScript, and a keen problem solver with 500+ solved questions across coding platforms.
                </p>
      
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
            </div>
          </Fade>
        );
      };
      
      export default LandingPage;
      