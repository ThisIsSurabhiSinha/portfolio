const motiveLogoUrl = `${process.env.PUBLIC_URL}/ProjectImages/CompanyLogo/motive_circle_logo.png`;
const googleLogoUrl = `${process.env.PUBLIC_URL}/ProjectImages/CompanyLogo/google_logo.png`;

export const experiences = [
  {
    id: "motive",
    type: "right-container",
    img: motiveLogoUrl,
    company: "Motive",
    title: "Software Engineer Intern — App Developer",
    duration: "Jan 2026 – July 2026",
    highlights: [
      "Owned end-to-end development of Passwordless Authentication Platform (Magic Link, Magic Code, OTP) for Motive's Driver App, reducing login friction for thousands of drivers.",
      "Built shared authentication logic using Kotlin Multiplatform (KMP/KMM) targeting Android and iOS; implemented native UI in SwiftUI/UIKit and backend APIs in Ruby.",
      "Implemented OAuth 2.0 + PKCE token exchange and secure session management; designed flows in compliance with GDPR.",
      "Delivered PDF document upload feature using SwiftUI/UIKit, eliminating screenshot-based workflows.",
      "Collaborated with PM, QA, and Design across full SDLC: requirements → design → development → testing → release → production support.",
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
      "Built an RPC-based SRE Automation Triager Tool in Java, accelerating production incident triage and reducing manual investigation effort.",
      "Automated correlation of service symptoms with infrastructure events (deployments, resource bottlenecks, service anomalies) using Monarch metrics.",
      "Designed modular architecture using Guice and Dependency Injection with the Strategy Pattern for extensible triage logic.",
      "Achieved 94.23% unit test coverage using JUnit and Mockito; improved observability workflows across production services.",
    ],
    technologies: ["Java", "Guice", "JUnit", "Mockito", "Linux", "Monarch"],
  },
  {
    id: "competitive-programming",
    type: "right-container",
    img: null,
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
    img: null,
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
