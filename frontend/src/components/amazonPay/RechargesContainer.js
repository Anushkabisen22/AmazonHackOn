import React from "react";
import "./styles/Category.css";

const rechargeItems = [
  { imgSrc: "/icons/recharge.png", text: "Mobile Recharge" },
  { imgSrc: "/icons/apple.png", text: "App Store Code" },
  { imgSrc: "/icons/dth.png", text: "DTH Recharge" },
  { imgSrc: "/icons/play.png", text: "Google Play Recharge" },
  { imgSrc: "/icons/subs.png", text: "Subscriptions" },
  { imgSrc: "/icons/fastag.png", text: "Buy FASTag" },
];

const RechargesContainer = () => {
  return (
    <div className="category-container">
      <h5 className="category-title">Recharges</h5>
      <div className="flex flex-wrap flex-start">
        {rechargeItems.map((item, index) => (
          <div key={index} className="category-item">
            <img src={item.imgSrc} alt={item.text} className="category-icon" />
            <div className="category-text">{item.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RechargesContainer;
