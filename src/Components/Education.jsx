// import React from "react";
// import "./avatar.png";
// import placeholder from "../assests/placeholder.jpeg";

// import "../Css/Education.css";

// const Education = () => {
//   const timelineData = [
//     {
//       type: "left-container",
//       img: "./avatar.png",
//       title: "HighSchool",
//       duration: "2009-2023",
//       description: "hello my self mritunjau tiwari",
//     },
//     {
//       type: "right-container",
//       img: "./avatar.png",
//       title: "College",
//       duration: "2023-2027",
//       description: "hello my self mritunjau tiwari",
//     },
//     {
//       type: "left-container",
//       img: "./avatar.png",
//       title: "Internship",
//       duration: "2024-2027",
//       description: "hello my self mritunjau tiwari",
//     },
//     {
//       type: "right-container",
//       img: "./avatar.png",
//       title: "Shadowfox",
//       duration: "[2-31]-Jan-2025",
//       description: "hello my self mritunjau tiwari",
//     },
//   ];

//   return (
//     // <div className="timeline">
//     //   {timelineData.map((item, index) => (
//     //     <div className={`containr ${item.type}`} key={index}>
//     //       <img src={item.img} alt={`${item.title}`} />
//     //       <div className="text-box">
//     //         <h2>{item.title}</h2>
//     //         <small>{item.duration}</small>
//     //         <p>{item.description}</p>
//     //         <span
//     //           className={
//     //             item.type === "left-container"
//     //               ? "left-container-arrow"
//     //               : "right-container-arrow"
//     //           }
//     //         ></span>
//     //       </div>
//     //     </div>
//     //   ))}
//     // </div>

//     <div className="timeline">
//       <div className="containr left-container">
//         <img src={placeholder} alt="institute-icon" />
//         <div className="text-box">
//           <h2> HighSchool</h2>
//           <small>2009-2023</small>
//           <p>hello my self mritunjau tiwari</p>
//           <span className="left-container-arrow" />
//         </div>
//       </div>
//       <div className="containr right-container">
//         <img src={placeholder} alt="institute-icon" />
//         <div className="text-box">
//           <h2> College</h2>
//           <small>2023-2027</small>
//           <p>hello my self mritunjau tiwari</p>
//           <span className="right-container-arrow" />
//         </div>
//       </div>
//       <div className="containr left-container">
//         <img src={placeholder} alt="institute-icon" />
//         <div className="text-box">
//           <h2> Internship</h2>
//           <small>2024-2027</small>
//           <p>hello my self mritunjau tiwari</p>
//           <span className="left-container-arrow" />
//         </div>
//       </div>
//       <div className="containr right-container">
//         <img src={placeholder} alt="institute-icon" />
//         <div className="text-box">
//           <h2> Shadowfox</h2>
//           <small>[2-31]-Jan-2025</small>
//           <p>hello my self mritunjau tiwari</p>
//           <span className="right-container-arrow" />
//         </div>
//       </div>
//       <div className="containr left-container">
//         <img src={placeholder} alt="institute-icon" />
//         <div className="text-box">
//           <h2> Internship</h2>
//           <small>2024-2027</small>
//           <p>hello my self mritunjau tiwari</p>
//           <span className="left-container-arrow" />
//         </div>
//       </div>
//       <div className="containr right-container">
//         <img src={placeholder} alt="institute-icon" />
//         <div className="text-box">
//           <h2> Shadowfox</h2>
//           <small>[2-31]-Jan-2025</small>
//           <p>hello my self mritunjau tiwari</p>
//           <span className="right-container-arrow" />
//         </div>
//       </div>
//       <div className="containr left-container">
//         <img src={placeholder} alt="institute-icon" />
//         <div className="text-box">
//           <h2> Internship</h2>
//           <small>2024-2027</small>
//           <p>hello my self mritunjau tiwari</p>
//           <span className="left-container-arrow" />
//         </div>
//       </div>
//       <div className="containr right-container">
//         <img src={placeholder} alt="institute-icon" />
//         <div className="text-box">
//           <h2> Shadowfox</h2>
//           <small>[2-31]-Jan-2025</small>
//           <p>hello my self mritunjau tiwari</p>
//           <span className="right-container-arrow" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Education;

import React from "react";
import placeholder from "../assests/placeholder.jpeg";
import Timeline from "./Timeline"; // Import the Timeline component

import "../Css/Education.css";

const Education = () => {
  const timelineData = [
    {
      type: "right-container",
      img: placeholder,
      title: "High School",
      duration: "2019",
      institute: "Kendriya Vidyalaya Kanpur Cantt",
      description: "Completed my high school education with a focus on science subjects. It was a foundational phase where I developed strong problem-solving skills and an interest in technology.",
    },
    {
      type: "left-container",
      img: placeholder,
      title: "Intermediate",
      duration: "2022",
      institute: "Kendriya Vidyalaya Kanpur Cantt",
      description: "Achieved a percentage of 87%, excelling in mathematics and science. This period helped me decide to pursue computer science as a career path, laying the groundwork for my engineering studies.",
    },
    {
      type: "right-container",
      img: placeholder,
      title: "Bachelors of Technology in Computer Science",
      institute: "Indian Institute of Information Technology Kottayam",
      duration: "2022-2026",
      description: "Currently pursuing my B.Tech with a focus on software development, programming languages, and data structures. I have an SGPA of 9.1 up to semester 5 and have actively participated in coding contests, hackathons, and technical workshops.",
    },
  ];
  // The rest of your component rendering the timeline

  return (
    <div className="education-timeline-section">
      <h1>The Road to Knowledge: My Education Timeline</h1>
      <Timeline timelineData={timelineData} />
    </div>
  );
};

export default Education;
