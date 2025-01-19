// import React from 'react';
// import { NavLink, Outlet } from 'react-router-dom';
// import '../Css/About.css';

// const AboutLayout = () => {
//   return (
//     <div className="about-container">
//       {/* Sub-navbar for navigation */}
//       <div className="sub-navbar">
//         <NavLink
//           to="about-me"
//           className={({ isActive }) => (isActive ? 'active-tab' : '')}
//         >
//           About Me
//         </NavLink>
//         <NavLink
//           to="education"
//           className={({ isActive }) => (isActive ? 'active-tab' : '')}
//         >
//           Education
//         </NavLink>
//         <NavLink
//           to="experience"
//           className={({ isActive }) => (isActive ? 'active-tab' : '')}
//         >
//           Experience
//         </NavLink>
//       </div>

//       {/* Outlet to render child components */}
//       <div className="tab-content">
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// export default AboutLayout;

import React ,{useContext} from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Slide } from "react-awesome-reveal";
import "../Css/About.css";
import { ThemeContext } from "./ThemeContext";

const AboutLayout = () => {
  const navigate = useNavigate();
  const { isDarkMode } = useContext(ThemeContext); 
  return (
    <div className={`about-container ${isDarkMode ? "dark" : "light"}`}>
    
        <div className={`sub-navbar ${isDarkMode ? "dark" : "light"}`}>
          <Slide left>
            <button className="nav-button" onClick={() => navigate("/about")}>
              About Me
            </button>
          </Slide>
          <Slide top>
            <button
              className="nav-button"
              onClick={() => navigate("education")}
            >
              Education
            </button>
          </Slide>
          <Slide right>
            <button
              className="nav-button"
              onClick={() => navigate("experience")}
            >
              Experience
            </button>
          </Slide>
        </div>
        
      {/* Outlet to render child components */}
      <div className="tab-content">
        <Outlet />
      </div>
    </div>
  );
};

export default AboutLayout;
