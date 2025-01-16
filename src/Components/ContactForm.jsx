// ContactForm.js
import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = ({ onModalOpen, onModalClose, onModalUpdate }) => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   // Open the confirmation modal
  //   onModalOpen({
  //     isConfirmation: true,
  //     message: "Are you sure you want to send the message?",
  //     onConfirm: async () => {
  //       onModalUpdate({ isLoading: true });
  //       emailjs.sendForm("service_jlh8sf5", "template_fkpw8sa", e.target, "GMIcmFm0oikgPgsas").then(
  //         (response) => {

  //           if(response.ok)
  //           {console.log('SUCCESS!', response.status, response.text);
  //           console.log("could send")
  //         onModalUpdate({
  //           isLoading: false,
  //           isConfirmation: false,
  //           message: {
  //             title: "Success",
  //             body: "Your message has been sent successfully!",
  //           },
  //         });
  //         setFormData({ name: "", email: "", message: "" });
  //         e.target.reset();}

  //         else{
  //           console.log("could not send")

  //           onModalUpdate({
  //             isLoading: false,
  //             isConfirmation: false,
  //             message: {
  //               title: "Error",
  //               body: `Failed to send the message.`,
  //             },
  //           });
  //         }
         
  //         },
  //         (error) => {
  //           console.log('FAILED...', error);
  //           onModalUpdate({
  //             isLoading: false,
  //             isConfirmation: false,
  //             message: {
  //               title: "Error",
  //               body: `Something went wrong.`,
  //             },
  //           });
             
  //         },
  //       );

  //     },
  //   });
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  
  //   // Open the confirmation modal
  //   onModalOpen({
  //     isConfirmation: true,
  //     message: "Are you sure you want to send the message?",
  //     onConfirm: () => {
  //       onModalUpdate({ isLoading: true });
  
  //       // Send email to the user
  //       const userEmailPromise = emailjs.sendForm("service_jlh8sf5", "template_fkpw8sa", e.target, "GMIcmFm0oikgPgsas");
  
  //       // Send email to the portfolio owner
  //       const ownerEmailPromise = emailjs.sendForm("service_jlh8sf5", "template_h7xt0ln", e.target, "GMIcmFm0oikgPgsas");
  
  //       // Wait for both email promises to resolve
  //       let userEmailOk = false;
  //       let ownerEmailOk = false;
  
  //       userEmailPromise.then((response) => {
  //         if (response.ok) {
  //           console.log('User email sent successfully!', response.status, response.text);
  //           userEmailOk = true;
  //         } else {
  //           console.log("Failed to send user email", response.status, response.text);
  //         }
  //       });
  
  //       ownerEmailPromise.then((response) => {
  //         if (response.ok) {
  //           console.log('Portfolio owner email sent successfully!', response.status, response.text);
  //           ownerEmailOk = true;
  //         } else {
  //           console.log("Failed to send portfolio owner email", response.status, response.text);
  //         }
  //       });
  
  //       // Check if both emails were sent successfully
  //       if (userEmailOk && ownerEmailOk) {
  //         console.log('Both emails sent successfully!');
  //         onModalUpdate({
  //           isLoading: false,
  //           isConfirmation: false,
  //           message: {
  //             title: "Success",
  //             body: "Your message has been sent successfully to both the user and the portfolio owner!",
  //           },
  //         });
  //         setFormData({ name: "", email: "", message: "" });
  //         e.target.reset();
  //       } else {
  //         console.log("Failed to send one or both emails");
  //         onModalUpdate({
  //           isLoading: false,
  //           isConfirmation: false,
  //           message: {
  //             title: "Error",
  //             body: `Failed to send the message. Please try again.`,
  //           },
  //         });
  //       }
  //       // Promise.all([userEmailPromise, ownerEmailPromise]).then(() => {
  //       //   if (userEmailOk && ownerEmailOk) {
  //       //     console.log('Both emails sent successfully!');
  //       //     onModalUpdate({
  //       //       isLoading: false,
  //       //       isConfirmation: false,
  //       //       message: {
  //       //         title: "Success",
  //       //         body: "Your message has been sent successfully to both the user and the portfolio owner!",
  //       //       },
  //       //     });
  //       //     setFormData({ name: "", email: "", message: "" });
  //       //     e.target.reset();
  //       //   } else {
  //       //     console.log("Failed to send one or both emails");
  //       //     onModalUpdate({
  //       //       isLoading: false,
  //       //       isConfirmation: false,
  //       //       message: {
  //       //         title: "Error",
  //       //         body: `Failed to send the message. Please try again.`,
  //       //       },
  //       //     });
  //       //   }
  //       // }).catch((error) => {
  //       //   console.log('Error in sending emails:', error);
  //       //   onModalUpdate({
  //       //     isLoading: false,
  //       //     isConfirmation: false,
  //       //     message: {
  //       //       title: "Error",
  //       //       body: `Something went wrong while sending the emails.`,
  //       //     },
  //       //   });
  //       // });
  //     },
  //   });
  // };
  
  // const handleSubmit = async(e)=>{
  //   e.preventDefault();

  
  //   onModalOpen({
  //     isConfirmation: true,
  //     message: "Are you sure you want to send the message?",
  //     onConfirm: async () => {
  //       onModalUpdate({ isLoading: true });
  //       emailjs.sendForm("service_jlh8sf5", "template_fkpw8sa", e.target , "GMIcmFm0oikgPgsas").then(
  //         (response) => {
  //           console.log('SUCCESS!', response.status, response.text);
  //           if(response.ok){
  //                  emailjs.sendForm("service_jlh8sf5", "template_h7xt0ln", e.target , "GMIcmFm0oikgPgsas").then(
  //               (response) => {
  //                 console.log('SUCCESS 2', response.status, response.text);
  //                 if(response.ok){
  //                   onModalUpdate({
  //                                 isLoading: false,
  //                                 isConfirmation: false,
  //                                 message: {
  //                                   title: "Success",
  //                                   body: "Your message has been sent successfully to both the user and the portfolio owner!",
  //                                 },
  //                               });
  //                               setFormData({ name: "", email: "", message: "" });
  //                               e.target.reset();
  //                 }

  //                 else{
  //                   onModalUpdate({
  //                                 isLoading: false,
  //                                 isConfirmation: false,
  //                                 message: {
  //                                   title: "Error",
  //                                   body: `Failed to send the message. Please try again.`,
  //                                 },
  //                               });
  //                 }
  //               },
  //               (error) => {
  //                 onModalUpdate({
  //                   isLoading: false,
  //                   isConfirmation: false,
  //                   message: {
  //                     title: "Error",
  //                     body: `Something went wrong.`,
  //                   },
  //                 });
  //               },
  //             );
  //           }
  //           else{
  //             onModalUpdate({
  //               isLoading: false,
  //               isConfirmation: false,
  //               message: {
  //                 title: "Error",
  //                 body: `Something went wrong.`,
  //               },
  //             });
  //           }
  //         },
  //         (error) => {
  //           onModalUpdate({
  //             isLoading: false,
  //             isConfirmation: false,
  //             message: {
  //               title: "Error",
  //               body: `Something went wrong`,
  //             },
  //           });
  //         },
  //       );
  //     }
  //   })
  // }

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
            console.log("ok thing ", userEmailResponse.ok)
            console.log("user email res ", userEmailResponse)
            throw new Error("Failed to send user email");
          }
  
          console.log("User email sent successfully!", userEmailResponse.status, userEmailResponse.text);
  
          // Send the second email
          const ownerEmailResponse = await emailjs.sendForm(
            "service_jlh8sf5",
            "template_h7xt0ln",
            e.target,
            "GMIcmFm0oikgPgsas"
          );
  
          if (ownerEmailResponse.status!==200) {
            console.log(ownerEmailResponse)
            throw new Error("Failed to send portfolio owner email");
          }
  
          console.log("Portfolio owner email sent successfully!", ownerEmailResponse.status, ownerEmailResponse.text);
  
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
