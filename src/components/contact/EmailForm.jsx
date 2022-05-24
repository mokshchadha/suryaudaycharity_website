import React, { useRef } from "react";
import emailjs from "emailjs-com";

/*
My Default Template
Template ID:
*/

const TEMPLATE_ID = "template_lnbrefj";
const SERVICE_ID = "service_vwhf1mf";
const PUBLIC_KEY = "pIhJc_4D902OTMjzn";

export const EmailForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );

    e.target.reset();
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <input
        type="text"
        name="name"
        placeholder="Your Full Name"
        required
      ></input>
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        required
      ></input>
      <textarea
        name="message"
        rows="7"
        placeholder="Your Message"
        required
      ></textarea>
      <button type="submit" className="btn btn-primary">
        Send Message
      </button>
    </form>
  );
};

export default EmailForm;
