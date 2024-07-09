import React, { useState } from "react";
import { FaBars, FaSearch } from "react-icons/fa";
import { FiChevronDown, FiUser, FiShoppingCart } from "react-icons/fi";
import { SlBell } from "react-icons/sl";
import appLogo from "../assets/shopping_bag.png";
import CartItem from "./CartItem";
import { productsData } from "./productsData";
import { FiTrash } from "react-icons/fi";

const Navbar = () => {
  const [isCartItemVisible, setCartItemVisible] = useState(false);

  function handleClick() {
    setCartItemVisible((current) => !current);
  }

  return (
    <React.Fragment>
      <nav className=" relative px-[20px] py-[10px] bg-app-nav-bg w-full h-32 sm:flex sm:px-[60px] sm-w-full sm-h-12 sm:gap-[43px] sm:items-center">
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
            {isCartItemVisible && (
              <div className={`${isCartItemVisible ? 'right-0': '-right-full'} w-1/2 h-screen absolute top-25 right-10 bg-app-bg shadow-2xl rounded-3xl overflow-hidden px-[30px] transform -translate-y-25 transition-all duration-500`}>
                <div className="flex items-end px-[30px] h-[132px] shadow-b-2xl">
                  <div className="text-bottom">
                    <h1 className="text-3xl font-bold text-left">Cart</h1>
                    <p className="text-xl">
                      Select items you want to check out
                    </p>
                  </div>
                  <div className="pb-1 ml-auto">
                    <FiTrash
                      style={{
                        width: "32px",
                        height: "32px",
                        color: "orangered",
                      }}
                    />
                  </div>
                </div>
                <div>
                  {productsData.map((product, index) => (
                    <CartItem key={index} src={product.src} />
                  ))}
                </div>

                <div className="w-full h-1/6 flex px-[30px] py-[10px] shadow-2xl bg-app-bg absolute bottom-0 left-0 right-0 items-center ">
                  <div className="flex flex-col gap-[4px] text-left">
                    <h1 className="text-2xl font-bold">Total</h1>
                    <h1 className="font-bold">NGN 20,000</h1>
                    <h1></h1>
                    <h1 className="uppercase">Before tax</h1>
                  </div>

                  <button className="flex items-center justify-center w-1/7 h-1/3 bg-app-orange ml-auto px-[21px] py-[14px] rounded-xl text-app-bg font-bold text-md">
                    Check out
                  </button>
                </div>
              </div>
            )}
          </button>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
