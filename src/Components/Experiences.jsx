import React , {useContext} from "react";
import placeholder from "../assests/placeholder.jpeg";
import Timeline from "./Timeline";
import "../Css/Experiences.css";
import "../Css/About.css";
import { ThemeContext } from "./ThemeContext";

const motiveLogoUrl = `${process.env.PUBLIC_URL}/ProjectImages/CompanyLogo/motive_circle_logo.png`;
const googleLogoUrl = `${process.env.PUBLIC_URL}/ProjectImages/CompanyLogo/google_logo.png`;

const Experiences = () => {
  const { isDarkMode } = useContext(ThemeContext);


  const timelineData = [
    {
      type: "right-container",
      img: motiveLogoUrl,
      title: "Software Engineer Intern (App Developer)",
      company: "Motive",
      duration: "Jan 2026 – July 2026",
      description:
        "Building production mobile applications and backend systems. Took ownership of passwordless authentication platform (Magic Link, Magic Code, OTP) reducing driver login friction. Implemented authentication workflows supporting GDPR compliance using Kotlin Multiplatform (KMP/KMM), SwiftUI, UIKit, and REST APIs with OAuth/PKCE token exchange. Built native platform-specific UI for Android and iOS. Owned and delivered PDF upload feature using SwiftUI/UIKit, eliminating screenshot-based workflows. Collaborate with Product, QA, and Design across full SDLC. Debug production issues with root-cause analysis. Extensively use Claude and GitHub Copilot for rapid development.",
    },

    {
      type: "left-container",
      img: googleLogoUrl,
      title: "Site Reliability Engineer Intern",
      company: "Google",
      duration: "May 2025 – Aug 2025",
      description:
        "Built RPC-based SRE Automation Triager Tool in Java, accelerating production incident triaging and reducing manual investigation effort. Automated correlation of service symptoms with infrastructure events (deployments, resource bottlenecks, service anomalies). Designed modular architecture using Guice, Dependency Injection, and Strategy Pattern. Achieved 94.23% unit test coverage with JUnit and Mockito. Used Monarch metrics for observability. Worked in Linux-based environments. Improved observability and troubleshooting workflows significantly.",
    },

    {
      type: "right-container",
      img: placeholder,
      title: "Competitive Programming & Problem Solving",
      duration: "2023-Present",
      description:
        "Solved 1000+ coding problems across dynamic programming, graph algorithms, data structures, and system design. LeetCode Contest Rating: 1775 | CodeChef Rating: 1534. Strong DSA foundation and algorithmic problem-solving skills developed through consistent competitive programming practice.",
    },

    {
      type: "left-container",
      img: placeholder,
      title: "Backend Development - Club Catalyst",
      duration: "2023-2023",
      description:
        "Led backend development for college club management platform using Django. Implemented role-based authentication and authorization (administrators, club members, general users). Built announcements, communication workflows, messaging, and discussion features. Designed relational database schemas using Django ORM. Collaborated with team to deliver comprehensive club management system.",
    },
 
  ];

  return (
    <div className={`experience-timeline-section ${isDarkMode ? "dark" : "light"}`}>
      <h1 style={{ textAlign: "center" }}>My Journey So Far</h1>
      <Timeline timelineData={timelineData} />
    </div>
  );
};

export default Experiences;
