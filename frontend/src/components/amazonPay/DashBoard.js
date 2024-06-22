import React from 'react'
import BalanceContainer from "./BalanceContainer";
import MenuContainer from "./MenuContainer";
import RechargesContainer from "./RechargesContainer";
import BillPaymentsContainer from "./BillPaymentsContainer";
import ImageContainer from "./ImageContainer";
import "./styles/Dashboard.css";
const DashBoard = () => {
  return (
      <div className="dashboard">
      <div className="row">
        <div className="col-md-3">
          <BalanceContainer />
        </div>
        <div className="col-md-9">
          <MenuContainer />
          <RechargesContainer />
          <BillPaymentsContainer />
          <ImageContainer/>
        </div>
      </div>
    </div>
  )
}

export default DashBoard