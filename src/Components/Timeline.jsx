// import React from "react";
// import PropTypes from "prop-types"; 
// import "../Css/Timeline.css"; 
// import "../Css/Education.css";


// const Timeline = ({ timelinetimelinetimelineData }) => {
//   return (
//     <div className="timeline">
//       {timelinetimelinetimelineData.map((timelinetimelineData, index) => (
        
//         <div key={index} className={`containr ${timelinetimelineData.type}`}>
//           {/* <img src={timelinetimelineData.img} alt="institute-icon" /> */}
//           <span>2024-2022</span>
//           <div className="text-box">
//             <h2>{timelinetimelineData.title}</h2>
//             <small>{timelinetimelineData.duration}</small>
//             <p>{timelinetimelineData.description}</p>
//             <span className={`${timelinetimelineData.type}-arrow`} />
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// Timeline.propTypes = {
//   timelinetimelinetimelineData: PropTypes.arrayOf(
//     PropTypes.shape({
//       type: PropTypes.string.isRequired,
//       img: PropTypes.string.isRequired,
//       title: PropTypes.string.isRequired,
//       duration: PropTypes.string.isRequired,
//       description: PropTypes.string.isRequired,
//     })
//   ).isRequired,
// };

// export default Timeline;


import React from 'react';
import '../Css/Timeline.css';
import '../Css//Education.css'
import placeholder from '../assests/placeholder.jpeg'

const Timeline = ({ timelineData }) => {
    if(!timelineData) return (
        <h2>Something went wrong.....</h2>
    )
  return (
    <div className="timeline">
      {timelineData.map((item, index) => (
        <div
          key={index}
          className={`containr ${item.type}` }
        >
          <img src={item.img || `${placeholder}`} alt="institute-icon" />
          <div className="text-box">
            <h2>{item.title}</h2>
            <h3>{item.institute}</h3>
            <small>{item.duration}</small>
            <p>{item.description}</p>
            <span className={`${item.type}-arrow`} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;

