import React from "react";

import propTypes from "prop-types";
import { FaMinus, FaPlus } from "react-icons/fa";

const CartItem = ({ src }) => {
  return (
    <React.Fragment>
      <div className="w-full h-auto p-[20px]  bg-app-bg rounded-2xl shadow-2xl m-[20px] flex gap-[16px] shadow-3xl font-bold">
        <div className="w-[40px] h-[40px] rounded-full border-2"></div>
        <div className="w-1/4 h-auto bg-blue-50 rounded-2xl flex items-center">
          <img src={src} alt="item_image" className="m-auto" />
        </div>
        <div className="h-auto text-left flex flex-col gap-[16px]">
          <div className="">
            <p className="text-xl font-semibold">Casio</p>
          </div>
          <div className="text-2xl">
            <p>Casio RX 24 featuring a durable stainless steel ...</p>
          </div>
          <div className="uppercase">
            <p>6 pieces left</p>
          </div>
          <div className="flex uppercase gap-[8px] items-center">
            <div className="">
              <p className="flex items-center bg-blue-100 rounded-2xl whitespace-nowrap py-1 px-2">
                onyx black
              </p>
            </div>
            <div>
              <p className="">Extra 20% off with coupon</p>
            </div>
          </div>
          <div className="flex items-center">
            <p className="text-app-orange">NGN 20,000</p>
            <div className="flex gap-[11px] ml-auto bg-slate-300 rounded-md p-1">
              <div className="w-[25px] h-[25px] bg-app-bg rounded-md flex items-center justify-center">
                <FaMinus/>
              </div>
              <div className="w-[25px] h-[25px] bg-app-bg rounded-md flex items-center justify-center">
                <FaPlus/>
              </div>
            </div>
          </div>
          <div className="text-app-black-2">
            <p>Free shipping</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
CartItem.propTypes = {
  src: propTypes.string,
  onClose: propTypes.bool,
};

export default CartItem;
