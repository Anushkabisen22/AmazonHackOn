import React from 'react'
import Header from '../../header/Header'
import NavBar from '../../amazonPay/NavBar'
import FooterMiddle from '../../footer/FooterMiddle'
import SideBarNav from '../SideBarNav'
import HelpFooter from './HelpFooter'
import Content from './Content'
const Help = () => {
  return (
    <div className='w-full bg-gray-200'>
      <Header />
      <NavBar />
    
      <div className='mt-10 flex gap-4 mb-10'>
        <SideBarNav />
        <Content />
          </div>
      <HelpFooter />
      <FooterMiddle />
      
    </div>
  )
}

export default Help