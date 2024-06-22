import React from 'react'
import Header from '../header/Header'
import FooterMiddle from '../footer/FooterMiddle'

const ConfirmOrder = () => {
  return (
      <div className='bg-gray-200'>
          <Header />
          <div className="max-w-xl mb-10 mt-6 mx-auto bg-white p-4 border rounded-lg shadow-lg">
      <div className="bg-yellow-500 p-4 rounded-t-lg">
        <h1 className="text-3xl font-bold text-white">amazon</h1>
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">Order Confirmation</h2>
        <p className="text-lg mb-4">Hello Joey,</p>
        <p className="mb-4">Thank you for shopping with us. We'll send a confirmation when your item ships.</p>
        <p className="font-bold mb-4">Order #000-000000000-000000000</p>
        <button className="bg-yellow-500 text-white py-2 px-4 rounded mb-4">Manage Order</button>
        <div className="border-t border-b py-4 mb-4">
          {/* <div className="flex justify-between items-center mb-4">
            <div>
              <p className="font-semibold">Product 1</p>
              <p className="text-sm text-blue-500">Review Item</p>
            </div>
            <div>
              <p className="text-blue-500">Prime</p>
              <p>Arriving July 7</p>
            </div>
            <div>
              <p className="font-semibold">$00.00</p>
            </div>
          </div> */}
          <div className="flex justify-between items-center">
            <div>
              <p className="font-semibold">Product 1</p>
              <p className="text-sm text-blue-500">Review Item</p>
            </div>
            <div>
              <p>Arriving July 10</p>
            </div>
            <div>
              <p className="font-semibold">&#8377;5830</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between mb-2">
          <p>Shipping</p>
          <p>&#8377;00.00</p>
        </div>
        <div className="flex justify-between mb-2">
          <p>Tax</p>
          <p>&#8377;00.00</p>
        </div>
        <div className="flex justify-between font-bold">
          <p>Total</p>
          <p>&#8377;5830.00</p>
        </div>
      </div>
          </div>
          <FooterMiddle />
    </div>
  )
}

export default ConfirmOrder