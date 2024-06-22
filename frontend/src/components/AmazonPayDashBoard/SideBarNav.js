import React from 'react'
import "../amazonPay/styles/BalanceContainer.css";
import dash from "../../assets/assets/dashboard.png";
import HomeIcon from '@mui/icons-material/Home';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import { useNavigate } from 'react-router-dom';
const SideBarNav = () => {
  const navigate = useNavigate();
  function handleClick1(){
    navigate('/analysis');
  }
  function handleClick2() {
    navigate('/help');
  }
  function handleClick3() {
    navigate('/dashboard');
  }
  return (
    <span className="balance-container cursor-pointer w-1/5 h-48">
      <div onClick={handleClick3} className="balance-header mt-2">
        <span className="balance-title">Home</span>
        <HomeIcon />
      </div>
      <hr />
      <div onClick={handleClick1} className="balance-header mt-2">
        <span className="balance-title">Analysis</span>
        <ShowChartIcon />
      </div>
      <hr />
      <div onClick={handleClick2} className="balance-header mt-2">
        <span className="balance-title">Help</span>
        <HelpCenterIcon />
      </div>
      <hr />
    </span>
  )
}

export default SideBarNav;