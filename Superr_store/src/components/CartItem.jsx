import React from "react";

import propTypes from "prop-types";
import { FaMinus, FaPlus } from "react-icons/fa";

const CartItem = ({ src }) => {
  return (
    <React.Fragment>
      <div className="w-full h-auto flex  shadow-2xl">
        <div className="p-[10px]">
          <div className="w-[24px] h-[24px] rounded-full border-2"></div>
        </div>
        <div className=" w-full flex gap-[16px] p-[10px] flex-2">
          <div className="w-[132px] h-[132px] bg-gray-500 flex items-center justify-center rounded-xl">
            <img src={src} alt="product-image" className="object-cover w-[16rem] h-[8rem]" />
          </div>
          <div className="flex flex-col gap-[8px] p-0 flex-1">
            <div className="text-2xl">
              <p>Casio</p>
            </div>
            <span>
              <p className="text-2xl whitespace-nowrap sm:whitespace-normal w-[150px] sm:max-w-sm text-ellipsis overflow-hidden">Casio RX 24 featuring a durable stainless steel ...</p>
            </span>
            <div>
              <div>
                <p className="uppercase text-sm">onyx black</p>
              </div>
              <div>
                <p className="uppercase">Extra 20% off with coupon</p>
              </div>
            </div>
            <div className="flex justify-between">
              <div>
                <p>NGN 20,000</p>
              </div>
              <div className="flex gap-[11px] ml-auto bg-slate-300 rounded-md p-1">
                <div className="w-[25px] h-[25px] bg-app-bg rounded-md flex items-center justify-center">
                  <FaMinus />
                </div>
                <div><p className="text-xl text-app-black-1">1</p></div>
                <div className="w-[25px] h-[25px] bg-app-bg rounded-md flex items-center justify-center">
                  <FaPlus />
                </div>
              </div>
            </div>
            <div className="text-app-black-2">
              <p>Free shipping</p>
            </div>
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
