import React from 'react'
import Header from '../header/Header'
import NavBar from '../amazonPay/NavBar'
import FooterMiddle from '../footer/FooterMiddle'
import SideBarNav from './SideBarNav'
import Display from './Display'
import AmazonInvest from './AmazonInvest'
const Analysis = () => {
  return (
    <div className='w-full bg-gray-200'>
      <Header />
      <NavBar />
      <AmazonInvest />
      <div className='mt-10 flex gap-2 mb-10'>
        <SideBarNav />
        <Display />
      </div>
      <FooterMiddle />
    </div>
  )
}

export default Analysis