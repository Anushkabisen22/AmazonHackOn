import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
const HeaderBottom = () => {
    const navigate = useNavigate();
    function handleClick() {
        navigate('/amazonPay');
    }
  return (
      <div className='w-full px-4 h-[36px] bg-amazon_light text-white flex items-center'>
          <ul className='flex items-center gap-2 text-sm tracking-wide'>
              <li className="gp-1 px-2 h-[80%] flex items-center border border-transparent hover:border-white cursor-pointer duration-100">
                 <MenuIcon /> All
              </li>
              <li onClick={handleClick} className="px-2 h-[80%] flex items-center border border-transparent hover:border-white cursor-pointer duration-100">
                  Amazon Pay
              </li>
              <li className="px-2 h-[80%] flex items-center border border-transparent hover:border-white cursor-pointer duration-100">
                  Customer Service
              </li>
              <li className="px-2 h-[80%] flex items-center border border-transparent hover:border-white cursor-pointer duration-100">
                  Gift Card 
              </li>
              <li className="px-2 h-[80%] flex items-center border border-transparent hover:border-white cursor-pointer duration-100">
                  Buy Again 
              </li>
              <li className="px-2 h-[80%] flex items-center border border-transparent hover:border-white cursor-pointer duration-100">
                  Today's Deal
              </li>
              <li className="px-2 h-[80%] flex items-center border border-transparent hover:border-white cursor-pointer duration-100">
                  Sell
              </li>
              <li className="px-2 h-[80%] flex items-center border border-transparent hover:border-white cursor-pointer duration-100">
                  Gift Ideas
              </li>
              <li className="px-2 h-[80%] flex items-center border border-transparent hover:border-white cursor-pointer duration-100">
                  AmazonminiTv
              </li>
              <li className="px-2 h-[80%] flex items-center border border-transparent hover:border-white cursor-pointer duration-100">
                  Coupons
              </li>
          </ul>
    </div>
  )
}

export default HeaderBottom