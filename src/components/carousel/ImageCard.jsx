import React from "react";
import "./carousel.css";

export const ImageCard = ({ src, alt }) => {
  return (
    <div className="container">
      <img className="image_card" src={src} alt={alt} />
    </div>
  );
};

export default ImageCard;
