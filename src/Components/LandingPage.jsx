
// import React from "react";
// import Fade from "react-reveal/Fade";
// import avatar from "./avatar.png";
// import "../Css/LandingPage.css";
// const LandingPage = () => {

//   const handleDownloadResume = () => {
//     const resumeUrl = `${process.env.PUBLIC_URL}/resume.pdf`; 
//     const link = document.createElement("a");
//     link.href = resumeUrl;
//     link.download = "Surabhi_Sinha_Resume.pdf"; 
//     link.click();
//   };


//   return (
//     <Fade>
//       <div className="container p-3">
//       <div className="row landing-page-main">
//         <div className="col-md-8 mb-sm-4 mb-md-4  col-sm-8 intro" >
//           <h1 className="name">
//             Surabhi Sinha
//             <span role="img" className="wave" aria-label="waving hand">
//               👋
//             </span>
//           </h1>
//           <div class="typing-slider">
//             <p>Web Developer</p>
//             <p>Web Designer</p>
//             <p>Problem Solver</p>
//           </div>
//           <button className="download-button" onClick={handleDownloadResume}>
//             Download Resume
//           </button>
//         </div>
//         <div className="col-md-4 col-6 col-sm-8 img-home-main ">
//            <div className="my-pic">
//            <Fade> 
//              <img src={avatar} alt="home pic" className="img-fluid" /> 
//             {/* <Avatars
 
// /> <AmbientLight intensity ={1}/>  */}
//            </Fade> 
//            </div>
//         </div>
//       </div>
//     </div>
//     </Fade>
//   );
// };

// export default LandingPage;

// import Lottie from 'lottie-react';
// import React from "react";
// import Fade from "react-reveal/Fade";
// import "../Css/LandingPage.css";
// import animationData from "../assests/landing-page.json"
// const LandingPage = () => {

//   const handleDownloadResume = () => {
//     const resumeUrl = `${process.env.PUBLIC_URL}/resume.pdf`; 
//     const link = document.createElement("a");
//     link.href = resumeUrl;
//     link.download = "Surabhi_Sinha_Resume.pdf"; 
//     link.click();
//   };


//   return (
//     <Fade>

//       <div className="landing-page-main">
//         <div className="intro" >
//           <h1 className="name">
//             Surabhi Sinha
//             <span role="img" className="wave" aria-label="waving hand">
//               👋
//             </span>
//           </h1>
//           <div class="typing-slider">
//             <p>Web Developer</p>
//             <p>Web Designer</p>
//             <p>Problem Solver</p>
//           </div>
//           <button className="download-button" onClick={handleDownloadResume}>
//             Download Resume
//           </button>
//         </div>
//         <div className="img-home-main ">
//            <div className="my-pic">  
//            {/* <Fade>  */}
//            <Lottie animationData={animationData} loop={true} />
//            {/* </Fade>  */}
//            </div> 
//          </div> 
//       </div>
//     </Fade>
//   );
// };

// export default LandingPage;

import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import Lottie from "lottie-react";
import Fade from "react-reveal/Fade";
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
