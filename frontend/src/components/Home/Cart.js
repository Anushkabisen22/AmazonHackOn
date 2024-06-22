import React from "react";
import Header from "../header/Header";
import FooterMiddle from "../footer/FooterMiddle";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
const Cart = () => {
    const navigate = useNavigate();
    const handleClick = async () => {
    const paymentData = {
      user_id: "666d62e5869f27d19158b3ec",
      amount: 5830,
      date: new Date().toISOString(),
      category: "Home Essentials",
      description: "TV"
    };

    try {
      const response = await axios.post('http://localhost:5000/api/payment/addPayment', paymentData);
        console.log('Payment added successfully:', response.data);
        navigate('/confirmOrder')
    } catch (error) {
      console.error('Error adding payment:', error);
    }
  };
  return (
    <div className="bg-gray-200 h-screen">
      <Header />
      <div className="flex justify-between mb-20">
        <div className="ml-7 mt-7 bg-white p-4 w-2/3">
          <h1 className="text-3xl font-titleFont font-medium mb-4">
            Shopping Cart
          </h1>
          <div className="p-4 bg-white">
            <div className="flex items-start">
              <img
                src="https://m.media-amazon.com/images/I/71S8iUPW9bL._AC_UL480_FMwebp_QL65_.jpg" // Dummy image URL
                alt="Product"
                className=" w-36 h-36 object-cover rounded"
              />
              <div className="ml-4 flex-1">
                <h2 className="text-lg font-bodyFont font-medium">
                  New Samsung Smart TV
                </h2>
                <p className="text-green-600">In stock</p>
                <p>Eligible for FREE Shipping</p>
                <div className="flex items-center mt-2">
                  <input type="checkbox" checked className="mr-2" />
                  <label>
                    This will be a gift{" "}
                    <a href="#" className="text-blue-500">
                      Learn more
                    </a>
                  </label>
                </div>
                <div className="flex items-center mt-2">
                  <label htmlFor="quantity" className="mr-2">
                    Qty:
                  </label>
                  <select
                    id="quantity"
                    name="quantity"
                    className="border rounded p-1"
                  >
                    <option value="1">1</option>
                    {/* Add more options as needed */}
                  </select>
                  <button className="ml-4 text-blue-500">Delete</button>
                  <button className="ml-4 text-blue-500">Save for later</button>
                  <button className="ml-4 text-blue-500">
                    See more like this
                  </button>
                  <button className="ml-4 text-blue-500">Share</button>
                </div>
              </div>
              <div className="ml-4">
                <p className="text-xl font-semibold">₹5830.00</p>
              </div>
            </div>
            <div className="border-t mt-4 pt-4 flex justify-between">
              <span className="font-semibold">Subtotal (1 item):</span>
              <span className="text-xl font-semibold">₹5830.00</span>
            </div>
          </div>
          {/* Intem List end  */}
        </div>
        {/* Billing Option  */}
        <div className=" bg-white mr-7 mt-7 p-4 w-1/4">
          <div className=" mt-4 flex items-center mb-2">
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-green-500 h-2.5 rounded-full"
                style={{ width: "23%" }}
              ></div>
            </div>
            <span className="ml-2 text-gray-700">₹5830.00</span>
          </div>
          <p className="text-sm text-gray-700 mb-2">
            Add items worth <span className="text-red-500">₹150.00</span> for{" "}
            <span className="text-blue-500">FREE Delivery</span>
          </p>
          <a href="#" className="text-blue-500 text-sm mb-4 block">
            View Products ›
          </a>
          <div className="border-t pt-4">
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold">Subtotal (1 item):</span>
              <span className="text-xl font-semibold">₹5830.00</span>
            </div>
            <div className="flex items-center mb-4">
              <input type="checkbox" className="mr-2" />
              <label className="text-sm text-gray-700">
                This order contains a gift
              </label>
            </div>
            <button onClick={handleClick} className="bg-yellow-500 text-white font-bold py-2 rounded-lg w-full">
              Proceed to Buy
            </button>
          </div>
        </div>
          </div>
          <FooterMiddle />
    </div>
  );
};
export default Cart;
