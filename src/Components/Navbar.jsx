// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "../Css/Navbar.css";
// import avatar from "./avatar.png";
// import { FaBars, FaTimes } from "react-icons/fa";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <nav className={`navbar-cus ${isMenuOpen ? "navbar-cus-show-menu" : ""}`}>
//       <div className="navbar-brand-cus">
//         <span className="brand-img">
//          <img src={avatar} alt="avatar" />
//         </span>
//         <span className="brand-name">SS</span>
//       </div>
//       <div className="menu-icon" onClick={toggleMenu}>
//         {isMenuOpen ? (
//           <FaTimes style={{ color: "red", fontSize: "1.5rem" }} />
//         ) : (
//           <FaBars style={{ color: "#E4E4E4", fontSize: "1.5rem" }} />
//         )}
//       </div>
//       <div className={`nav-items ${isMenuOpen ? "show-menu" : ""}`}>
//         <ul>
//           <li className="nav-item-cus">
//             <Link to="/">Home</Link>
//           </li>
//           <li className="nav-item-cus">
//             <Link to="/about">About</Link>
//           </li>
//           <li className="nav-item-cus">
//             <Link to="/projects">Projects</Link>
//           </li>
//           <li className="nav-item-cus">
//             <Link to="/resume">Resume</Link>
//           </li>
//           <li className="nav-item-cus">
//             <Link to="/skills">Skills</Link>
//           </li>
//           <li className="nav-item-cus">
//             <Link to="/contact">Contact</Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState ,useContext} from "react";
import { NavLink} from "react-router-dom";
import "../Css/Navbar.css";
import { ThemeContext } from "./ThemeContext.js"; 
import {
  FaBars,
  FaTimes,
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaFileAlt,
  FaCode,
  FaEnvelope,
  FaSun,
  FaMoon,
} from "react-icons/fa"; // Import icons

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <nav className={`navbar-cus ${isMenuOpen ? "navbar-cus-show-menu" : ""}`}>
//       <div className="navbar-brand-cus">
//         <span className="brand-img">
//           <img src={avatar} alt="avatar" />
//         </span>
//         <span className="brand-name">SS</span>
//       </div>
//       <div className="menu-icon" onClick={toggleMenu}>
//         {isMenuOpen ? (
//           <FaTimes style={{ color: "red", fontSize: "1.5rem" }} />
//         ) : (
//           <FaBars style={{ color: "#E4E4E4", fontSize: "1.5rem" }} />
//         )}
//       </div>
//       <div className={`nav-items ${isMenuOpen ? "show-menu" : ""}`}>
//         <ul>
//           <li className="nav-item-cus">
//             <Link to="/">
//               <FaHome style={{ marginRight: "8px" }} /> Home
//             </Link>
//           </li>
//           <li className="nav-item-cus">
//             <Link to="/about">
//               <FaUser style={{ marginRight: "8px" }} /> About
//             </Link>
//           </li>
//           <li className="nav-item-cus">
//             <Link to="/projects">
//               <FaProjectDiagram style={{ marginRight: "8px" }} /> Projects
//             </Link>
//           </li>
//           <li className="nav-item-cus">
//             <Link to="/resume">
//               <FaFileAlt style={{ marginRight: "8px" }} /> Resume
//             </Link>
//           </li>
//           <li className="nav-item-cus">
//             <Link to="/skills">
//               <FaCode style={{ marginRight: "8px" }} /> Skills
//             </Link>
//           </li>
//           <li className="nav-item-cus">
//             <Link to="/contact">
//               <FaEnvelope style={{ marginRight: "8px" }} /> Contact
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isDarkMode, setIsDarkMode] = useState(true);
//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

//   useEffect(() => {
//     // Set dark mode based on localStorage or default to light mode
//     const storedMode = localStorage.getItem("theme");
//     if (storedMode === "dark") {
//       setIsDarkMode(true);
//     } else {
//       setIsDarkMode(false);
//     }
//   }, []);

//   useEffect(() => {
//     // Save theme to localStorage whenever it changes
//     if (isDarkMode) {
//       localStorage.setItem("theme", "dark");
//       document.body.classList.add("dark-mode");
//     } else {
//       localStorage.setItem("theme", "light");
//       document.body.classList.remove("dark-mode");
//     }
//   }, [isDarkMode]);

//   return (
//     <nav className={`navbar-cus light-mode ${isMenuOpen ? "navbar-cus-show-menu" : ""}`}>
//       <div className="navbar-brand-cus">
//         {/* <span className="brand-img">
//           <img src={avatar} alt="avatar" />
//         </span> */}
//         {/* <span className="brand-name">Surabhi</span>  */}
//         <div className="nav-brand-name-hide">
//           <div className="nav-brand-name">
//             <h2 className="brand-name-first">SURABHI</h2>
//             <h2 className="brand-name-second">SURABHI</h2>
//           </div>
//         </div>
//       </div>
//       <div className="menu-icon" onClick={toggleMenu}>
//         {isMenuOpen ? (
//           <FaTimes style={{ color: "red", fontSize: "1.5rem" }} />
//         ) : (
//           <FaBars style={{ color: "#E4E4E4", fontSize: "1.5rem" }} />
//         )}
//       </div>
//       <div className={`nav-items ${isMenuOpen ? "show-menu" : ""}`}>
//         <ul>
//           <li className="nav-item-cus">
//             <Link to="/">
//               <div className="nav-item-content">
//                 <FaHome className="nav-item-icon" />
//                 <span className="nav-item-text">Home</span>
//               </div>
//             </Link>
//           </li>
//           <li className="nav-item-cus">
//             <Link to="/about">
//               <div className="nav-item-content">
//                 <FaUser className="nav-item-icon" />
//                 <span className="nav-item-text">About</span>
//               </div>
//             </Link>
//           </li>
//           <li className="nav-item-cus">
//             <Link to="/projects">
//               <div className="nav-item-content">
//                 <FaProjectDiagram className="nav-item-icon" />
//                 <span className="nav-item-text">Projects</span>
//               </div>
//             </Link>
//           </li>
//           <li className="nav-item-cus">
//             <Link to="/resume.pdf" target="_blank" rel="noopener noreferrer">
//               <div className="nav-item-content">
//                 <FaFileAlt className="nav-item-icon" />
//                 <span className="nav-item-text">Resume</span>
//               </div>
//             </Link>
//           </li>
//           <li className="nav-item-cus">
//             <Link to="/skills">
//               <div className="nav-item-content">
//                 <FaCode className="nav-item-icon" />
//                 <span className="nav-item-text">Skills</span>
//               </div>
//             </Link>
//           </li>
//           <li className="nav-item-cus">
//             <Link to="/contact">
//               <div className="nav-item-content">
//                 <FaEnvelope className="nav-item-icon" />
//                 <span className="nav-item-text">Contact</span>
//               </div>
//             </Link>
//           </li>
//            <li className="theme-toggle nav-item-cus" onClick={toggleDarkMode}>
//         {isDarkMode ? (
//           <FaSun style={{ color: 'orange', fontSize: '1.75rem' }} />
//         ) : (
//           <FaMoon style={{ color: 'gray', fontSize: '1.75rem' }} />
//         )}
//       </li> 
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


const Navbar = () => {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext); // Access the theme context
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const nav_item_text_class = `nav-item-text ${isDarkMode ? "dark" : "light"}`
  const nav_item_cus_class = `nav-item-cus ${isDarkMode ? "dark" : "light"} `
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className={`navbar-cus ${isDarkMode ? "dark" : "light"} ${isMenuOpen ? "navbar-cus-show-menu" : ""}`}>
      <div className={`navbar-brand-cus {nav_item_text_class}`}>
        <div className="nav-brand-name-wrap">
          <div className="nav-brand-name">
            <h2 className="brand-name-first">SURABHI</h2>
            <h2 className="brand-name-second">SURABHI</h2>
          </div>
        </div>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        {isMenuOpen ? (
          <FaTimes style={{ color: "red", fontSize: "1.5rem" }} />
        ) : (
          <FaBars style={{ color: "#E4E4E4", fontSize: "1.5rem" }} />
        )}
      </div>
      <div className={`nav-items ${isMenuOpen ? "show-menu" : ""}`}>
        <ul>
          <li className={nav_item_cus_class}>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <div className="nav-item-content">
                <FaHome className="nav-item-icon" />
                <span className={nav_item_text_class}>Home</span>
              </div>
            </NavLink>
          </li>
          <li className={nav_item_cus_class}>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <div className="nav-item-content">
                <FaUser className="nav-item-icon" />
                <span className={nav_item_text_class}>About</span>
              </div>
            </NavLink>
          </li>
          <li className={nav_item_cus_class}>
            <NavLink
              to="/projects"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <div className="nav-item-content">
                <FaProjectDiagram className="nav-item-icon" />
                <span className={nav_item_text_class}>Projects</span>
              </div>
            </NavLink>
          </li>
          <li className={nav_item_cus_class}>
            <NavLink
              to="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="nav-item-content">
                <FaFileAlt className="nav-item-icon" />
                <span className={nav_item_text_class}>Resume</span>
              </div>
            </NavLink>
          </li>
          <li className={nav_item_cus_class}>
            <NavLink
              to="/skills"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <div className="nav-item-content">
                <FaCode className="nav-item-icon" />
                <span className={nav_item_text_class}>Skills</span>
              </div>
            </NavLink>
          </li>
          <li className={nav_item_cus_class}>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <div className="nav-item-content">
                <FaEnvelope className="nav-item-icon" />
                <span className={nav_item_text_class}>Contact</span>
              </div>
            </NavLink>
          </li>
          {/* <li className="theme-toggle nav-item-cus" onClick={toggleDarkMode}>
            {isDarkMode ? (
              <FaSun style={{ color: "orange", fontSize: "1.75rem" }} />
            ) : (
              <FaMoon style={{ color: "gray", fontSize: "1.75rem" }} />
            )}
          </li> */}

<li className={`theme-toggle` } onClick={toggleDarkMode}>
            {isDarkMode ? (
              <FaMoon style={{ color: "gray", fontSize: "1.75rem" }} />
            ) : (
              <FaSun style={{ color: "orange", fontSize: "1.75rem" }} />
              
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
