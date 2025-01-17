// import React, { useState } from 'react';
// import Lottie from 'lottie-react';
// import animationData from '../assests/Main Scene.json';
// import Education from './Education';
// import Experiences from './Experiences';
// import '../Css/About.css';

// const About = () => {
//   const [activeTab, setActiveTab] = useState('education');

//   const handleTabChange = (tab) => {
//     setActiveTab(tab);
//   };

//   return (
//     <div className="about-container">
//         <div className="sub-navbar">
//         <button
//           className={activeTab === 'education' ? 'active-tab' : ''}
//           onClick={() => handleTabChange('education')}
//         >
//           Education
//         </button>
//         <button
//           className={activeTab === 'experience' ? 'active-tab' : ''}
//           onClick={() => handleTabChange('experience')}
//         >
//           Experience
//         </button>
//       </div>

//       <div className="about-section">

//       <div className="about-animation">
//         <Lottie animationData={animationData} loop={true} />
//       </div>
//       <div className="about-text">
//         <h2>About Me</h2>
//         <p>
//           My name is <span className="highlight">Surabhi Sinha</span>, and I am proficient in both backend and frontend technologies, including <span className="highlight">HTML</span>, <span className="highlight">JavaScript</span>, <span className="highlight">CSS</span>, <span className="highlight">Bootstrap</span>, <span className="highlight">React</span>, <span className="highlight">Python</span>, <span className="highlight">Django</span>, and <span className="highlight">SQLite</span>.
//         </p>
//         <p>
//           I also have a strong command of programming languages such as <span className="highlight">C</span>, <span className="highlight">C++</span>, <span className="highlight">Java</span>, and <span className="highlight">Python</span>. Additionally, I actively participate in <span className="highlight">coding contests</span>.
//         </p>
//         <p>
//           I enjoy <span className="highlight">learning new technologies</span> and aspire to become a <span className="highlight">software engineer</span> to contribute meaningfully to the <span className="highlight">tech industry</span>.
//         </p>
//       </div>
//       </div>
//       <div className="tab-content">
//         {activeTab === 'education' ? <Education /> : <Experiences />}
//       </div>
//     </div>
//   );
// };

// export default About;

// import React, { useState, useRef } from 'react';
// import Lottie from 'lottie-react';
// import animationData from '../assests/Main Scene.json';
// import Education from './Education';
// import Experiences from './Experiences';
// import '../Css/About.css';

// const About = () => {
//   const [activeTab, setActiveTab] = useState('');
//   const aboutRef = useRef(null);
//   const contentRef = useRef(null);

//   const handleScrollToSection = (section) => {
//     setActiveTab(section);
//     if (section === 'education' || section === 'experience') {
//       contentRef.current.scrollIntoView({ behavior: 'smooth' });
//     } else {
//       aboutRef.current.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <div className="about-container">
//       {/* Sub-navbar for navigation */}
//       <div className="sub-navbar">
//         <button
//           className={activeTab === 'education' ? 'active-tab' : ''}
//           onClick={() => handleScrollToSection('education')}
//         >
//           Education
//         </button>
//         <button
//           className={activeTab === 'experience' ? 'active-tab' : ''}
//           onClick={() => handleScrollToSection('experience')}
//         >
//           Experience
//         </button>
//         {activeTab && (
//           <button
//             className="back-button"
//             onClick={() => handleScrollToSection('about')}
//           >
//             Back to About Me
//           </button>
//         )}
//       </div>

//       {/* About Me section */}
//       <div className="about-section" ref={aboutRef}>
//         <div className="about-animation">
//           <Lottie animationData={animationData} loop={true} />
//         </div>
//         <div className="about-text">
//           <h2>About Me</h2>
//           <p>
//             My name is <span className="highlight">Surabhi Sinha</span>, and I am proficient in both backend and frontend technologies, including <span className="highlight">HTML</span>, <span className="highlight">JavaScript</span>, <span className="highlight">CSS</span>, <span className="highlight">Bootstrap</span>, <span className="highlight">React</span>, <span className="highlight">Python</span>, <span className="highlight">Django</span>, and <span className="highlight">SQLite</span>.
//           </p>
//           <p>
//             I also have a strong command of programming languages such as <span className="highlight">C</span>, <span className="highlight">C++</span>, <span className="highlight">Java</span>, and <span className="highlight">Python</span>. Additionally, I actively participate in <span className="highlight">coding contests</span>.
//           </p>
//           <p>
//             I enjoy <span className="highlight">learning new technologies</span> and aspire to become a <span className="highlight">software engineer</span> to contribute meaningfully to the <span className="highlight">tech industry</span>.
//           </p>
//         </div>
//       </div>

//       {/* Education and Experience section */}
//       <div className="tab-content" ref={contentRef}>
//         {activeTab === 'education' && <Education />}
//         {activeTab === 'experience' && <Experiences />}
//       </div>
//     </div>
//   );
// };

// export default About;

// import React, { useState, useRef } from 'react';
// import Lottie from 'lottie-react';
// import animationData from '../assests/Main Scene.json';
// import Education from './Education';
// import Experiences from './Experiences';
// import '../Css/About.css';

// const About = () => {
//   const [activeTab, setActiveTab] = useState('');
//   const aboutRef = useRef(null);
//   const contentRef = useRef(null);

//   const handleScrollToSection = (section) => {
//     setActiveTab(section);
//     if (section === 'education' || section === 'experience') {
//       contentRef.current.scrollIntoView({ behavior: 'smooth' });
//     } else {
//       aboutRef.current.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <div className="about-container">
//       {/* Sub-navbar for navigation */}
//       <div className="sub-navbar">
//         <button
//           className={activeTab === 'education' ? 'active-tab' : ''}
//           onClick={() => handleScrollToSection('education')}
//         >
//           Education
//         </button>
//         <button
//           className={activeTab === 'experience' ? 'active-tab' : ''}
//           onClick={() => handleScrollToSection('experience')}
//         >
//           Experience
//         </button>
//         {activeTab && (
//           <button
//             className="back-button"
//             onClick={() => handleScrollToSection('about')}
//           >
//             Back to About Me
//           </button>
//         )}
//       </div>

//       {/* About Me section */}
//       <div className="about-section" ref={aboutRef}>
//         <div className="about-animation">
//           <Lottie animationData={animationData} loop={true} />
//         </div>
//         <div className="about-text">
//           <h2>About Me</h2>
//           <p>
//             My name is <span className="highlight">Surabhi Sinha</span>, and I am proficient in both backend and frontend technologies, including <span className="highlight">HTML</span>, <span className="highlight">JavaScript</span>, <span className="highlight">CSS</span>, <span className="highlight">Bootstrap</span>, <span className="highlight">React</span>, <span className="highlight">Python</span>, <span className="highlight">Django</span>, and <span className="highlight">SQLite</span>.
//           </p>
//           <p>
//             I also have a strong command of programming languages such as <span className="highlight">C</span>, <span className="highlight">C++</span>, <span className="highlight">Java</span>, and <span className="highlight">Python</span>. Additionally, I actively participate in <span className="highlight">coding contests</span>.
//           </p>
//           <p>
//             I enjoy <span className="highlight">learning new technologies</span> and aspire to become a <span className="highlight">software engineer</span> to contribute meaningfully to the <span className="highlight">tech industry</span>.
//           </p>
//         </div>
//       </div>

//       {/* Education and Experience section */}
//       <div className="tab-content" ref={contentRef}>
//         {activeTab === 'education' && (
//           <>
//             <h2 className="tab-heading">Education</h2>
//             <Education />
//           </>
//         )}
//         {activeTab === 'experience' && (
//           <>
//             <h2 className="tab-heading">Experience</h2>
//             <Experiences />
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default About;

// import React, { useState, useRef, useEffect } from 'react';
// import Lottie from 'lottie-react';
// import animationData from '../assests/Main Scene.json';
// import Education from './Education';
// import Experiences from './Experiences';
// import '../Css/About.css';

// const About = () => {
//   const [activeTab, setActiveTab] = useState('');
//   const [showScrollToTop, setShowScrollToTop] = useState(false);

//   const aboutRef = useRef(null);
//   const contentRef = useRef(null);

//   // Scroll to a section when a tab is clicked
//   const handleScrollToSection = (section) => {
//     setActiveTab(section);
//     if (section === 'education' || section === 'experience') {
//       contentRef.current.scrollIntoView({ behavior: 'smooth' });
//     } else {
//       aboutRef.current.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   // Show or hide the "Scroll to Top" button based on scroll position
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 200) {
//         setShowScrollToTop(true);
//       } else {
//         setShowScrollToTop(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <div className="about-container">
//       {/* Sub-navbar for navigation */}
//       <div className="sub-navbar">
//         <button
//           className={activeTab === 'education' ? 'active-tab' : ''}
//           onClick={() => handleScrollToSection('education')}
//         >
//           Education
//         </button>
//         <button
//           className={activeTab === 'experience' ? 'active-tab' : ''}
//           onClick={() => handleScrollToSection('experience')}
//         >
//           Experience
//         </button>
//       </div>

//       {/* About Me section */}
//       <div className="about-section" ref={aboutRef}>
//         <div className="about-animation">
//           <Lottie animationData={animationData} loop={true} />
//         </div>
//         <div className="about-text">
//           <h2>About Me</h2>
//           <p>
//             My name is <span className="highlight">Surabhi Sinha</span>, and I am proficient in both backend and frontend technologies, including <span className="highlight">HTML</span>, <span className="highlight">JavaScript</span>, <span className="highlight">CSS</span>, <span className="highlight">Bootstrap</span>, <span className="highlight">React</span>, <span className="highlight">Python</span>, <span className="highlight">Django</span>, and <span className="highlight">SQLite</span>.
//           </p>
//           <p>
//             I also have a strong command of programming languages such as <span className="highlight">C</span>, <span className="highlight">C++</span>, <span className="highlight">Java</span>, and <span className="highlight">Python</span>. Additionally, I actively participate in <span className="highlight">coding contests</span>.
//           </p>
//           <p>
//             I enjoy <span className="highlight">learning new technologies</span> and aspire to become a <span className="highlight">software engineer</span> to contribute meaningfully to the <span className="highlight">tech industry</span>.
//           </p>
//         </div>
//       </div>

//       {/* Education and Experience section */}
//       <div className="tab-content" ref={contentRef}>
//         {activeTab === 'education' && (
//           <>
//             <h2 className="tab-heading">Education</h2>
//             <Education />
//           </>
//         )}
//         {activeTab === 'experience' && (
//           <>
//             <h2 className="tab-heading">Experience</h2>
//             <Experiences />
//           </>
//         )}
//       </div>

//       {/* Scroll to Top Button */}
//       {showScrollToTop && (
//         <button
//           className="scroll-to-top"
//           onClick={() => handleScrollToSection('about')}
//         >
//           ↑
//         </button>
//       )}
//     </div>
//   );
// };

// export default About;

import React, { useContext } from "react";
import Lottie from "lottie-react";
import animationData from "../assests/Main Scene.json";
import { ThemeContext } from "./ThemeContext";

const About = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const highlight_class = `highlight ${isDarkMode ? "dark" : "light"}`;
  return (
    <div className="about-section">
      <div className="about-animation">
        <Lottie animationData={animationData} ></Lottie>
      </div>
      <div className="about-text">
        <h2>Get to Know Me</h2>
        <p>
          My name is <span className={highlight_class}>Surabhi Sinha</span>, and
          I am proficient in both backend and frontend technologies, including{" "}
          <span className={highlight_class}>HTML</span>,{" "}
          <span className={highlight_class}>JavaScript</span>,{" "}
          <span className={highlight_class}>CSS</span>,{" "}
          <span className={highlight_class}>Bootstrap</span>,{" "}
          <span className={highlight_class}>React</span>,{" "}
          <span className={highlight_class}>Python</span>,{" "}
          <span className={highlight_class}>Django</span>, and{" "}
          <span className={highlight_class}>SQLite</span>.
        </p>
        <p>
          I also have a strong command of programming languages such as{" "}
          <span className={highlight_class}>C</span>,{" "}
          <span className={highlight_class}>C++</span>,{" "}
          <span className={highlight_class}>Java</span>, and{" "}
          <span className={highlight_class}>Python</span>. Additionally, I actively
          participate in{" "}
          <span className={highlight_class}>coding contests</span>.
        </p>
        <p>
          I enjoy{" "}
          <span className={highlight_class}>learning new technologies</span> and
          aspire to become a{" "}
          <span className={highlight_class}>software engineer</span> to
          contribute meaningfully to the{" "}
          <span className={highlight_class}>tech industry</span>.
        </p>
      </div>
    </div>
  );
};

export default About;
