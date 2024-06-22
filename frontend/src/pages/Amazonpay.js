import React from 'react'
import Header from "../components/header/Header";
import NavBar from "../components/amazonPay/NavBar";
import DashBoard from '../components/amazonPay/DashBoard';
import Footer from "../components/footer/Footer";
const Amazonpay = () => {
  return (
      <div>
          <Header />
          <NavBar />
          <DashBoard />
          <Footer />
       </div>
  )
}

export default Amazonpay