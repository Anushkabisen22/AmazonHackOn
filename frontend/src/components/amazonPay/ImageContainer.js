import React from "react";
import "./styles/ImageContainer.css";

const ImageContainer = () => {
  return (
    <div className="image-container">
      <div className="image-item">
        <img src="/icons/banner1.jpg" alt="Pay bills or recharge" />
      </div>
      <div className="image-item">
        <img src="/icons/banner2.jpg" alt="Order food, medicines & more" />
      </div>
    </div>
  );
};

export default ImageContainer;
