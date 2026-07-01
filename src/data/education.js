const iiitkLogo = `${process.env.PUBLIC_URL}/ProjectImages/EducationalInstituteLogo/iiitkottyam_logo_btech.jpeg`;
const kvLogo = `${process.env.PUBLIC_URL}/ProjectImages/EducationalInstituteLogo/KV_highSchool_intermediate.avif`;

export const educationData = [
  {
    type: "right-container",
    img: iiitkLogo,
    title: "Bachelor of Technology in Computer Science and Engineering",
    institute: "Indian Institute of Information Technology (IIIT) Kottayam",
    duration: "2022 – 2026",
    description:
      "CGPA: 9.05 / 10. Focus on software development, backend systems, mobile applications, and AI-assisted development. Active participation in coding contests, hackathons, and technical workshops. Strong foundation in DSA, OOP, Design Patterns, and production software engineering.",
  },
  {
    type: "left-container",
    img: kvLogo,
    title: "Intermediate (Class XII)",
    institute: "Kendriya Vidyalaya Kanpur Cantt",
    duration: "2022",
    description:
      "Achieved 87%, excelling in mathematics and science. Established foundation for computer science and engineering studies.",
  },
  {
    type: "right-container",
    img: kvLogo,
    title: "High School (Class X)",
    institute: "Kendriya Vidyalaya Kanpur Cantt",
    duration: "2019",
    description:
      "Completed with 95% in science subjects. Developed strong problem-solving skills and foundational interest in technology.",
  },
];
