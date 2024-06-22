import React from "react";
import "./styles/BalanceContainer.css";
import dash from "../../assets/assets/dashboard.png";
import { useNavigate } from "react-router-dom";
const BalanceContainer = () => {
  const navigate = useNavigate();
  function handleClick() {
    navigate('/dashboard');
  }
  return (
    <div className="balance-container cursor-pointer">
      <div className="balance-header">
        <span className="balance-title">Amazon Pay Balance</span>
        <span className="balance-amount">₹312.00</span>
      </div>
      <hr />
      <div onClick={handleClick} className="balance-item">
        <img
          src={dash}
          alt="Add Money"
          className="balance-icon"
        />
        <span className="balance-text">Profile</span>
      </div>
      <div className="balance-item">
        <img
          src="/icons/addmoney.png"
          alt="Add Money"
          className="balance-icon"
        />
        <span className="balance-text">Add Money</span>
      </div>
      <div className="balance-item">
        <img
          src="/icons/giftcard.png"
          alt="Add Gift Card"
          className="balance-icon"
        />
        <span className="balance-text">Add Gift Card</span>
      </div>
      <div className="balance-item">
        <img
          src="/icons/setting.png"
          alt="Account Settings"
          className="balance-icon"
        />
        <span className="balance-text">Account Settings</span>
      </div>
    </div>
  );
};

export default BalanceContainer;
