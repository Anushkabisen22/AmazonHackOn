import React from "react";
import { useNavigate } from 'react-router-dom';
import logo from "../../assets/assets/logo.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HeaderBottom from "./HeaderBottom";
const Header = () => {
  const navigate = useNavigate();
  function handleClick() {
    navigate('/signin');
  }
  function handleClick1() {
    navigate('/cart');
  }
  return (
    <div>
      <div className="w-full bg-amazon_blue text-white px-4 py-3 flex items-center gap-4">
        <div className="px-2 h-[80%] flex items-center border border-transparent hover:border-white cursor-pointer duration-100">
          <img className="w-24 mt-2" src={logo} alt="" />
        </div>
        <div className="px-2 h-[80%] flex items-center border border-transparent hover:border-white cursor-pointer duration-100">
          <LocationOnIcon />
          <p className="text-sm text-lightText font-light flex flex-col">
            Deliver to{" "}
            <span className="text-sm font-semibold -mt-1 text-whiteText">
              India
            </span>
          </p>
        </div>
        <div className="h-10 rounded-md flex flex-grow relative">
          <span className="w-14 h-full bg-gray-200 hover:bg-gray-300 border-2 cursor-pointer duration-300 text-sm text-amazon_blue font-titleFont flex items-center justify-center rounded-tl-md rounded-bl-md">
            All
            <span>
              <ArrowDropDownIcon />
            </span>
          </span>
          <input
            className="h-full text-base text-amazon_blue flex-grow outline-none  border-none px-2"
            type="text"
          />
          <span className="w-12 h-full flex items-center justify-center bg-amazon_yellow hover:bg-[#f3a847] duration-300 text-amazon_blue cursor-pointer rounded-tr-md rounded-br-md">
            <SearchIcon />
          </span>
        </div>
        <div onClick={handleClick} className="px-2 h-[80%] flex flex-col items-start justify-center border border-transparent hover:border-white cursor-pointer duration-100">
          <p className="text-xs text-lightText font-light">Hello, sign in</p>
          <p className="text-sm font-semibold -mt-1 text-whiteText">
            Account & List{""}{" "}
            <span>
              <ArrowDropDownIcon />
            </span>
          </p>
        </div>
        <div className="px-2 h-[80%] flex flex-col items-start justify-center border border-transparent hover:border-white cursor-pointer duration-100">
          <p className="text-xs text-lightText font-light">Returns</p>
          <p className="text-sm font-semibold -mt-1 text-whiteText">& Orders</p>
        </div>
        <div onClick={handleClick1} className="relative px-2 h-[80%] flex items-start justify-center border border-transparent hover:border-white cursor-pointer duration-100">
          <ShoppingCartIcon />
          <p className="text-xs font-semibold mt-3 text-whiteText">
            Cart
            <span className="absolute text-xs -top-1 left-6 font-semibold p-1 h-4 bg-[#f3a847] text-amazon_blue rounded-full flex justify-center items-center">
              1
            </span>
          </p>
        </div>
      </div>
      <HeaderBottom />
    </div>
  );
};

export default Header;
