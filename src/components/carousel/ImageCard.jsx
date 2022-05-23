import React from "react";
import "./carousel.css";

export const ImageCard = ({ src, alt, classN }) => {
  return (
    <div className="container">
      <img className={classN} src={src} alt={alt} />
    </div>
  );
};

export default ImageCard;
