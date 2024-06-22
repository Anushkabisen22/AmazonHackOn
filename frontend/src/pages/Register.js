import React from 'react'
import darklogo from "../assets/assets/darklogo.png";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
const Register = () => {
  return (
      <div className='w-full'>
          <div className="w-full bg-gray-100 pb-10">
              <form className="w-[350px] mx-auto flex flex-col items-center">
                  <img src={darklogo} className="w-32" />
                  <div className="w-full border border-zinc-200 p-6">
            <h2 className="font-titleFont text-3xl font-medium mb-4 ">
              Create Account.
            </h2>
                      <div className="flex flex-col gap-3">
                          <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">
                  Your name
                </p>
                <input
                  type="text"
                  className="w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput"
                />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">
                  Email or mobile phone number
                </p>
                <input
                  type="email"
                  className="w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput"
                />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">Password</p>
                <input
                  type="password"
                  className="w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput"
                />
                          </div>
                          <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">Re-enter password</p>
                <input
                  type="password"
                  className="w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput"
                />
              </div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                }}
                className="w-full py-1.5 text-sm font-normal rounded-sm bg-gradient-to-t from-[#f7dfa5] to-[#f0c14b] hover:bg-gradient-to-b border border-zinc-400 active:border-yellow-800 active:shadow-amazonInput"
              >
                Continue
              </button>
            </div>
            <p className="text-xs text-black leading-4 mt-4">
              By Continuing, you agree to Amazon's{" "}
              <span className="text-blue-600">Conditions of Use("")</span>and{" "}
              <span className=" text-blue-600">Privace Notice.</span>
            </p>
            <p className="text-xs text-gray-600 mt-4 cursor-pointer group">
              <ArrowRightIcon />{" "}
              <span className="text-blue-600 group-hover:text-orange-700 group-hover:underline underline-offset-1">
                Need help?
              </span>
            </p>
          </div>
              </form>
          </div>
    </div>
  )
}

export default Register