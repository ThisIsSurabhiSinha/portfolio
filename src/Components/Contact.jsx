// import React, { useState } from "react";
// import emailjs from "emailjs-com";
// import { FaEnvelope, FaPhone, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";
// import "../Css/Contact.css";
// import Fade from "react-reveal/Fade";

// const Contact = () => {
//   const ContactForm = () => {
//     const [formData, setFormData] = useState({
//       name: "",
//       email: "",
//       message: ""
//     });
  
//     const handleChange = (e) => {
//       const { name, value } = e.target;
//       setFormData({
//         ...formData,
//         [name]: value,
//       });
//     };
  
//     const handleSubmit = (e) => {
//       e.preventDefault();
  
//       // Email to you (portfolio owner)
//       emailjs.sendForm('service_jlh8sf5', 'template_fkpw8sa', e.target, 'GMIcmFm0oikgPgsas')
//         .then((result) => {
//           console.log('Email to you sent successfully:', result.text);
//         }, (error) => {
//           console.log('Error sending email to you:', error.text);
//         });
  
//       // Email to the visitor (confirmation email)
//       emailjs.sendForm('service_jlh8sf5', 'template_h7xt0ln', e.target, 'GMIcmFm0oikgPgsas')
//         .then((result) => {
//           console.log('Confirmation email sent to visitor:', result.text);
//         }, (error) => {
//           console.log('Error sending confirmation email to visitor:', error.text);
//         });
  
//       // Clear the form after submission
//       setFormData({
//         name: "",
//         email: "",
//         message: ""
//       });
//     };
  

//   return (
//    <Fade>
//      <div className="contact-container">
//       <h2>Contact Me</h2>

//       {/* Form Section */}
//       <div className="form-section">

//         <h3>Send a Message</h3>
//         <form onSubmit={handleSubmit}>
//           <label htmlFor="name">Name</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             placeholder="Your Name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />

//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             placeholder="Your Email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />

//           <label htmlFor="message">Message</label>
//           <textarea
//             id="message"
//             name="message"
//             rows="5"
//             placeholder="Your Message"
//             value={formData.message}
//             onChange={handleChange}
//             required
//           ></textarea>

//           <button type="submit">Send Message</button>
//         </form>
//       </div>

//       {/* Contact Info Section */}
//       <div className="info-section">
//         <h3>Contact Information</h3>
//         <p>
//           <FaEnvelope /> <strong>Email:</strong> yourname@example.com
//         </p>
//         <p>
//           <FaPhone /> <strong>Phone:</strong> +1 234 567 890
//         </p>
//         <p>
//           <FaLinkedin /> <strong>LinkedIn:</strong>{" "}
//           <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer">
//             linkedin.com/in/yourprofile
//           </a>
//         </p>
//         <p>
//           <FaMapMarkerAlt /> <strong>Address:</strong> 123 Your Street, Your City, Country
//         </p>
//       </div>
//     </div>
//    </Fade>
//   );
// };


// export default Contact;

// Contact.js
// Contact.js
import React, { useState , useContext} from "react";
import ContactForm from "./ContactForm";
import Modal from "./Modal";
import { FaEnvelope, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";
import "../Css/Contact.css";
import { ThemeContext } from "./ThemeContext";

const Contact = () => {
  const {isDarkMode} = useContext(ThemeContext)
  const themeClass = isDarkMode?"dark":"light"
  const [modalData, setModalData] = useState({
    show: false,
    isLoading: false,
    isConfirmation: false,
    message: "",
  });

  const handleModalOpen = (data) => {
    setModalData({ ...data, show: true });
  };

  const handleModalUpdate = (data) => {
    setModalData((prev) => ({ ...prev, ...data }));
  };

  const handleModalClose = () => {
    setModalData({ show: false, isLoading: false, isConfirmation: false, message: "" });
  };

  return (
    <Fade>
      <div className= {`contact-container ${themeClass}`}>
        <h2>Contact & Collaborate
        </h2>

        <div className= {`form-section ${themeClass}`}>
          <h3>Send a Message</h3>
          <ContactForm
            onModalOpen={handleModalOpen}
            onModalClose={handleModalClose}
            onModalUpdate={handleModalUpdate}
          />
        </div>

        <div className={`info-section ${themeClass}`} >
          <h3>Contact Information</h3>
          <p>
            <FaEnvelope /> <strong>Email:</strong> surabhisinha514@gmail.com
          </p>
          {/* <p>
            <FaPhone /> <strong>Phone:</strong> +1 234 567 890
          </p> */}
          <p>
            <FaLinkedin /> <strong>LinkedIn:</strong>{" "}
            <a href="https://linkedin.com/in/thisissurabhisinha" target="_blank" rel="noreferrer">
             <strong>thisissurabhisinha</strong> 
            </a>
          </p>
          <p>
            <FaMapMarkerAlt /> <strong>Address:</strong> Uttar Pradesh , India
          </p>
        </div>

        {modalData.show && (
          <Modal
            message={modalData.message}
            isLoading={modalData.isLoading}
            isConfirmation={modalData.isConfirmation}
            onConfirm={modalData.onConfirm}
            onClose={handleModalClose}
          />
        )}
      </div>
    </Fade>
  );
};

export default Contact;
