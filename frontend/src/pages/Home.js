import React from 'react'
import Header from '../components/header/Header';
import Banner from '../components/Home/Banner';
import Products from '../components/Home/Products';
import Footer from '../components/footer/Footer';
const Home = () => {
  return (
    <div className="font-bodyFont">
      <Header />
      <Banner />
      <div className="w-full -mt-28">
        <Products />
      </div>
      
      <Footer />
    </div>
  )
}

export default Home