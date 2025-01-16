// 

import React from "react";
import "../Css/Footer.css";
import { FaGithub, FaEnvelope, FaMapMarkerAlt, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  const handleClick = (platform) => {
    console.log(`Clicked on ${platform}`);
  };

  return (
    <footer className="footer-cus">
      <div className="wrapper">
        <div className="box">
          <a
            href="http://github.com/thisissurabhisinha"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleClick("GitHub")}
          >
            <FaGithub className="icon" aria-hidden="true" />
          </a>
        </div>
        <div className="box">
          <a
            href="mailto:surabhisinha514@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleClick("Email")}
          >
            <FaEnvelope className="icon" aria-hidden="true" />
          </a>
        </div>
        <div className="box">
          <a
            href="https://goo.gl/maps/goa"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleClick("Map")}
          >
            <FaMapMarkerAlt className="icon" aria-hidden="true" />
          </a>
        </div>
        <div className="box">
          <a
            href="https://www.linkedin.com/in/thisissurabhisinha"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleClick("LinkedIn")}
          >
            <FaLinkedin className="icon" aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="footer-copyright">
        © Surabhi Sinha {year}. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
