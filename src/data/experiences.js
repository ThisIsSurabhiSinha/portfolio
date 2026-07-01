const motiveLogoUrl = `${process.env.PUBLIC_URL}/ProjectImages/CompanyLogo/motive_circle_logo.png`;
const googleLogoUrl = `${process.env.PUBLIC_URL}/ProjectImages/CompanyLogo/google_logo.png`;
const leetcodeLogoUrl = `${process.env.PUBLIC_URL}/ProjectImages/CompanyLogo/competetiveProgramming_leetcode.jpeg`;
const iiitkLogoUrl = `${process.env.PUBLIC_URL}/ProjectImages/EducationalInstituteLogo/iiitkottyam_logo_btech.jpeg`;

export const experiences = [
  {
    id: "motive",
    type: "right-container",
    img: motiveLogoUrl,
    company: "Motive",
    title: "Software Engineer Intern — App Developer",
    duration: "Jan 2026 – July 2026",
    highlights: [
      "Led end-to-end delivery of Motive's passwordless authentication project, building Magic Link and OTP-based login flows to simplify and secure driver sign-in across platforms.",
      "Built backend authentication services and REST APIs in Ruby, implementing OAuth and PKCE-based token exchange to provide secure, GDPR-compliant, and scalable login experiences across iOS and Android.",
      "Implemented shared authentication in Kotlin Multiplatform, contributing reusable components that accelerated cross-platform feature development.",
      "Owned and delivered end-to-end PDF upload support in Driver App using SwiftUI and UIKit, engineering persistence and upload workflows to eliminate screenshot-based workarounds — delivered in nearly half the expected time through effective use of Claude, GitHub Copilot, and Gemini.",
      "Drove work across the full SDLC — from design and API contract alignment to implementation, testing, feature-flag-based rollout, and post-launch monitoring in Pendo — collaborating closely with Product, QA, Backend, and Design teams.",
    ],
    technologies: ["Kotlin Multiplatform", "SwiftUI", "UIKit", "Ruby", "REST APIs", "OAuth 2.0", "PKCE"],
  },
  {
    id: "google",
    type: "left-container",
    img: googleLogoUrl,
    company: "Google",
    title: "Site Reliability Engineer Intern",
    duration: "May 2025 – Aug 2025",
    highlights: [
      "Owned end-to-end delivery of an RPC-based automation platform in Java for production incident triage, reducing manual investigation effort for large-scale distributed services.",
      "Partnered with cross-functional stakeholders to understand product needs, identify high-value reliability metrics, and define automation scope for faster incident analysis.",
      "Automated root-cause investigation for latency p99 spikes by correlating service-level symptoms with infrastructure events — deployments, resource bottlenecks, and configuration changes — using Monarch metrics.",
      "Designed a modular and extensible architecture using Guice, Dependency Injection, and the Strategy Pattern, improving maintainability and long-term system evolution.",
      "Developed and debugged backend components in Linux, achieving 94.23% unit test coverage with JUnit and Mockito while following production-grade reliability and code review practices.",
    ],
    technologies: ["Java", "Guice", "JUnit", "Mockito", "Linux", "Monarch"],
  },
  {
    id: "competitive-programming",
    type: "right-container",
    img: leetcodeLogoUrl,
    company: null,
    title: "Competitive Programming & Problem Solving",
    duration: "2023 – Present",
    highlights: [
      "Solved 1000+ coding problems across dynamic programming, graph algorithms, data structures, and system design.",
      "LeetCode Contest Rating: 1775 | CodeChef Rating: 1534.",
      "Strong DSA foundation built through consistent competitive programming practice.",
    ],
    technologies: [],
  },
  {
    id: "club-catalyst",
    type: "left-container",
    img: iiitkLogoUrl,
    company: null,
    title: "Backend Development — Club Catalyst",
    duration: "2023",
    highlights: [
      "Led backend development for a college club management platform using Django.",
      "Implemented role-based authentication and authorization for administrators, club members, and general users.",
      "Built announcements, messaging, discussion, and event management features.",
      "Designed relational database schemas using Django ORM.",
    ],
    technologies: ["Python", "Django", "REST APIs", "SQLite"],
  },
];
