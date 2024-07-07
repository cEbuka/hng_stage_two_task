import React from "react";
import { FaBars, FaSearch } from "react-icons/fa";
import appLogo from "../assets/shopping_bag.png";

const Navbar = () => {
  return (
    <React.Fragment>
      <nav className="px-[20px] py-[10px] bg-app-nav-bg w-full h-[130px] ">
        <div className="flex justify-center items-center">
          <div className="flex mr-auto justify-center items-center gap-2">
            <div className="w-[47px] h-[47px] bg-app-orange flex items-center justify-center rounded-xl">
              <img src={appLogo} />
            </div>
            <h1 className="text-app-orange">Superr</h1>
          </div>

          <div>
            <FaBars style={{ color: "#fff", width: "24px", height: "24px" }} />
          </div>
        </div>
        <div className="flex mt-[16px] gap-[9px]">
          <div className="w-4/5 py-[12px] px-[8px] flex items-center justify-center mr-auto bg-app-bg rounded-xl">
            <h2 className="w-[37px] bg-[#000] flex items-center jusc">All</h2>
            <input type="text" name="text" placeholder="Search"/>
          </div>
          <button type="button" className="w-[47px] h-[47px] bg-app-orange flex items-center justify-center rounded-xl" >
            <FaSearch style={{color: "#fff", width: "24px", height: "24px"}}/>
          </button>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
