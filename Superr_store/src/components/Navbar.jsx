import React, { useState } from "react";
import { FaBars, FaSearch } from "react-icons/fa";
import { FiChevronDown, FiUser, FiShoppingCart } from "react-icons/fi";
import { SlBell } from "react-icons/sl";
import appLogo from "../assets/shopping_bag.png";
import CartItem from "./CartItem";
import { productsData } from "./productsData";

const Navbar = () => {
  const [isCartItemVisible, setCartItemVisible] = useState(false);

  function handleClick() {
    setCartItemVisible(current => (!current));
  }

  function handleCloseCartItem() {
    setCartItemVisible(current => (!current));
  }

  return (
    <React.Fragment>
      <nav className="px-[20px] py-[10px] bg-app-nav-bg w-full h-32 md:flex md:px-[60px] md-w-full md-h-12 md:gap-[43px] md:items-center">
        <div className="flex justify-center items-center ">
          <div className="flex mr-auto justify-center items-center gap-2">
            <div className="w-[47px] h-[47px] bg-app-orange flex items-center justify-center rounded-xl">
              <img src={appLogo} />
            </div>
            <h1 className="text-app-orange text-2xl font-bold">Superr</h1>
          </div>

          <div className="md:hidden">
            <FaBars style={{ color: "#fff", width: "24px", height: "24px" }} />
          </div>
        </div>
        <div className="flex mt-[16px] gap-[9px] md:m-0 md:w-full">
          <div className="h-[47px] py-[12px] px-[8px] flex mr-auto bg-app-bg rounded-xl w-full">
            <h2 className="border-r-4">All</h2>
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
        <div className="hidden md:flex gap-5 w-full justify-end">
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
            {isCartItemVisible && productsData.map((product, index) => (<CartItem key={index} src={product.src}/>))}
          </button>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
