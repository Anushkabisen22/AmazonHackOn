import React from "react";
import "./styles/Category.css";

const menuItems = [
  {
    imgSrc: "/icons/transaction.png", text: "Your Transactions"},
  { imgSrc: "/icons/rewards.png", text: "Rewards" },
  { imgSrc: "/icons/donate.png", text: "Donate" },
  { imgSrc: "/icons/emi.png", text: "Check EMI options" },
  { imgSrc: "/icons/cards.png", text: "Your Saved Cards" },
  { imgSrc: "/icons/faq.png", text: "Help and FAQs" },
];

const MenuContainer = () => {
  return (
    <div className="category-container">
      <div className="flex flex-wrap ">
        {menuItems.map((item, index) => (
          <div key={index} className="category-item">
            <img src={item.imgSrc} alt={item.text} className="category-icon" />
            <div className="category-text">{item.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuContainer;
