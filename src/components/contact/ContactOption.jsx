import React from "react";

export const ContactOption = ({ icon, title, subTitle, link, linkTitle }) => {
  return (
    <article className="contact__option">
      {icon}
      <h4>{title}</h4>
      <h5>{subTitle}</h5>
      <a href={link} target="_blank" rel="noreferrer">
        {linkTitle}
      </a>
    </article>
  );
};

export default ContactOption;
