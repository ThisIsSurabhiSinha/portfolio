
import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = ({ onModalOpen, onModalClose, onModalUpdate }) => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    onModalOpen({
      isConfirmation: true,
      message: "Are you sure you want to send the message?",
      onConfirm: async () => {
        onModalUpdate({ isLoading: true });
  
        try {
          // Send the first email
          const userEmailResponse = await emailjs.sendForm(
            "service_jlh8sf5",
            "template_fkpw8sa",
            e.target,
            "GMIcmFm0oikgPgsas"
          );
  
          if (userEmailResponse.status!==200) {
            throw new Error("Failed to send user email");
          }
  
  
          // Send the second email
          const ownerEmailResponse = await emailjs.sendForm(
            "service_jlh8sf5",
            "template_h7xt0ln",
            e.target,
            "GMIcmFm0oikgPgsas"
          );
  
          if (ownerEmailResponse.status!==200) {
            throw new Error("Failed to send portfolio owner email");
          }
  
  
          // If both emails were sent successfully
          onModalUpdate({
            isLoading: false,
            isConfirmation: false,
            message: {
              title: "Success",
              body: "Your message has been sent successfully to both the user and the portfolio owner!",
            },
          });
  
          setFormData({ name: "", email: "", message: "" });
          e.target.reset();
        } catch (error) {
          console.log(error);
          onModalUpdate({
            isLoading: false,
            isConfirmation: false,
            message: {
              title: "Error",
              body: "Something went wrong. Please try again.",
            },
          });
        }
      },
    });
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <label htmlFor="message">Message</label>
      <textarea
        id="message"
        name="message"
        rows="5"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        required
      ></textarea>

      <button type="submit">Send Message</button>
    </form>
  );
};

export default ContactForm;
