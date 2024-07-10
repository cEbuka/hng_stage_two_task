import React from "react";
import { FaBars, FaSearch } from "react-icons/fa";
import { FiChevronDown, FiUser, FiShoppingCart } from "react-icons/fi";
import { SlBell } from "react-icons/sl";
import appLogo from "../assets/shopping_bag.png";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
  const navigate = useNavigate()

  function handleClick(){
    navigate("/Cart")
  }
  return (
    <React.Fragment>
      <nav className="px-[20px] py-[10px] bg-app-nav-bg w-full h-32 sm:flex sm:px-[60px] sm-w-full sm:h-12 sm:gap-[43px] sm:items-center">
        <div className="flex justify-center items-center ">
          <div className="flex mr-auto justify-center items-center gap-2">
            <div className="w-[47px] h-[47px] bg-app-orange flex items-center justify-center rounded-xl">
              <img src={appLogo} />
            </div>
            <h1 className="text-app-orange text-2xl font-bold">Superr</h1>
          </div>

          <div className="sm:hidden">
            <FaBars style={{ color: "#fff", width: "24px", height: "24px" }} />
          </div>
        </div>
        <div className="flex mt-[16px] gap-[9px] sm:m-0 sm:w-full">
          <div className="h-[47px] py-[12px] px-[8px] flex mr-auto bg-app-bg rounded-xl w-full">
            <h2 className="border-r-2 pr-1">All</h2>
            <input type="text" name="text" placeholder="Search" />
          </div>
          <button
            type="button"
            className="w-[47px] h-[47px] bg-app-orange flex items-center justify-center rounded-xl"
          >
            <FaSearch
              style={{ color: "#fff", width: "24px", height: "24px" }}
            />
          </button>
        </div>
        <div className="hidden sm:flex gap-5 sm:w-full justify-end">
          <div className="flex items-center">
            <FiUser style={{ width: "47px", height: "47px" }} />
            <FiChevronDown
              style={{ color: "#000", width: "24px", height: "24px" }}
            />
          </div>

          <SlBell style={{ width: "47px", height: "47px" }} />
          <button onClick={handleClick}>
            <FiShoppingCart
              style={{ width: "47px", height: "47px" }}
              id="shop"
            />
          </button>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
