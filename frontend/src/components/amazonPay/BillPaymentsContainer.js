import React from "react";
import "./styles/Category.css";

const billItems = [
  { imgSrc: "/icons/elec.png", text: "Electricity" },
  { imgSrc: "/icons/postpaid.png", text: "Mobile Postpaid" },
  { imgSrc: "/icons/credit.png", text: "Credit Card Bill" },
  { imgSrc: "/icons/loan.png", text: "Loan Repayment" },
  { imgSrc: "/icons/gas.png", text: "Gas Cylinder" },
  { imgSrc: "/icons/insurance.png", text: "Insurance Premium" },
  { imgSrc: "/icons/piped.png", text: "Piped Gas" },
  { imgSrc: "/icons/water.png", text: "Water Bill" },
  { imgSrc: "/icons/landline.png", text: "Landline" },
  { imgSrc: "/icons/broadband.png", text: "Broadband" },
  { imgSrc: "/icons/municipal.png", text: "Municipal Tax" },
  { imgSrc: "/icons/subscription.png", text: "Subscriptions" },
  { imgSrc: "/icons/cable.png", text: "Cable TV" },
  { imgSrc: "/icons/edu.png", text: "Education Fees" },
];

const BillPaymentsContainer = () => {
  return (
    <div className="category-container">
      <h5 className="category-title">Bill Payments</h5>
      <div className="flex flex-wrap flex-start">
        {billItems.map((item, index) => (
          <div key={index} className="category-item">
            <img src={item.imgSrc} alt={item.text} className="category-icon" />
            <div className="category-text">{item.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BillPaymentsContainer;
