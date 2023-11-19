"use client";
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { IconContext } from "react-icons/lib";
function Navbar() {
  const [toggle, setToggle] = useState(true);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className="fixed top-[5%]">
      <div className="flex justify-center items-center">
        <div className="bg-white relative h-[63px] w-[95vw]  rounded-[50px] xl:px-10 px-5 flex items-center text-black ">
          {toggle ? (
            
              <div
                className={`${
                  toggle ? "flex w-full justify-between items-center" : "hidden"
                }   bottom`}
              >
                <div className="silka uppercase">Logo</div>
                <nav>
                  <ul className="sm:flex hidden text-xs text-[#2F2F2F] silka gap-12  font-semibold">
                    <li>About</li>
                    <li>why polarium</li>
                    <li>Customer Segment</li>
                    <li>Solutions</li>
                    <li>Customer Stability</li>
                    <li>Investors Relations</li>
                  </ul>
                </nav>
                <div className="flex items-center gap-14">
                  <button className="sm:flex hidden text-xs py-3.5 px-10 silka font-medium text-white bg-[#000] rounded-[50px]">
                    Get a Quote
                  </button>
                  <IconContext.Provider value={{ size: "25px" }}>
                    <FiSearch onClick={handleToggle} />
                  </IconContext.Provider>
                </div>
              </div>
       
          ) : (
            <div
              className={`${
                toggle ? "hidden" : "flex w-full justify-between items-center"
              }  sidebar`}
            >
              <div className="flex sm:gap-12 gap-2 items-center w-full h-full ">
                <div className="w-[75vw]  border-[1px] border-[#F3F3F3] h-[45px] rounded-[50px] ">
                  <input
                    className="w-full h-full px-2 rounded-[50px]"
                    type="text"
                  />
                </div>
                <div className="flex items-center gap-3 sm:gap-14">
                  <button className="text-xs py-3.5 px-8 silka font-medium text-white bg-[#000] rounded-[50px]">
                    Search
                  </button>
                  <IconContext.Provider value={{ size: "25px" }}>
                    <AiOutlineClose onClick={handleToggle} />
                  </IconContext.Provider>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;

{
  /* <div className="flex justify-between items-center w-full h-full">
                <div className="silka uppercase">Logo</div>
                <nav>
                  <ul className="flex text-xs text-[#2F2F2F] silka gap-12 font-semibold">
                    <li>About</li>
                    <li>why polarium</li>
                    <li>Customer Segment</li>
                    <li>Solutions</li>
                    <li>Customer Stability</li>
                    <li>Investors Relations</li>
                  </ul>
                </nav>
                <div className="flex items-center gap-14">
                  <button className="text-xs py-3.5 px-10 silka font-medium text-white bg-[#000] rounded-[50px]">
                    Get a Quote
                  </button>
                  <IconContext.Provider value={{ size: "25px" }}>
                    <FiSearch onClick={handleToggle} />
                  </IconContext.Provider>
                </div>
              </div> */
}
