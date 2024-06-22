import React from 'react'
import Header from '../components/header/Header';
import NavBar from '../components/amazonPay/NavBar'
import SideBarNav from '../components/AmazonPayDashBoard/SideBarNav';
import PaymentHistory from '../components/AmazonPayDashBoard/PaymentHistory';
import FooterMiddle from '../components/footer/FooterMiddle';
import Expenditure from '../components/AmazonPayDashBoard/Expenditure';
import AmazonInvest from '../components/AmazonPayDashBoard/AmazonInvest';
const DashBoard = () => {
  return (
    <div className='w-full bg-gray-200'>
      <Header />
      <NavBar />
      <AmazonInvest />
      {/* <img src={banner} /> */}
      <div className='mt-10 flex gap-4 mb-10'>
        <SideBarNav />
        <PaymentHistory />
        <span className="w-1/3 h-60  mr-3 flex flex-col items-center gap-5 "><Expenditure /></span>
      </div>
      <FooterMiddle />
      
    </div>
  )
}
export default DashBoard