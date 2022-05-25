import React from "react";
import "./contact.css";

import ContactOption from "./ContactOption";
import EmailForm from "./EmailForm";

import { MdOutlineEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";

export const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2 id="joinus">Contact Us | Join Us</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <ContactOption
            icon={<MdOutlineEmail className="contact__option-icon" />}
            title={"Email"}
            subTitle={"suryauday21@gmail.com"}
            link={"mailto:suryauday21@gmail.com"}
            linkTitle={"Send an email"}
          />
          <ContactOption
            icon={<FaFacebookF className="contact__option-icon" />}
            title={"Facebook"}
            subTitle={"@SuryaUdayCT"}
            link={"https://www.facebook.com/SuryaUdayCT/"}
            linkTitle={"Connect on Facebook"}
          />
          {/* <ContactOption
            icon={<FaWhatsapp className="contact__option-icon" />}
            title={"Whatsapp"}
            subTitle={""}
            link={"https://api.whatsapp.com/send/?phone=9816708195"}
            linkTitle={"Send a message"}
          /> */}
        </div>
        <EmailForm />
      </div>
    </section>
  );
};

export default Contact;
