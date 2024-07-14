import React, { useState } from "react";

import propTypes from "prop-types";
import { FaMinus, FaPlus } from "react-icons/fa";
import { FiCheck } from "react-icons/fi";

const CartItem = ({ src }) => {
  const [isItemSelected, setIsItemSelected] = useState(false);
  function handleSelect() {
    setIsItemSelected((curr) => !curr);
  }
  return (
    <React.Fragment>
      <div className="w-full h-auto flex">
        <div className="p-[10px]">
          <div
            className={`w-[24px] h-[24px] rounded-full border-2 ${
              isItemSelected && "bg-app-orange text-app-bg"
            } flex items-center justify-center`}
            onClick={handleSelect}
          >
            {isItemSelected && <FiCheck />}
          </div>
        </div>
        <div className="w-[91%] flex gap-[16px] p-[10px] flex-2">
          <div className="w-[132px] h-[132px] bg-gray-500 flex items-center justify-center rounded-xl">
            <img
              src={src}
              alt="product-image"
              className="w-[132px h-[132px] object-cover"
            />
          </div>
          <div className="w-[50%]flex flex-col gap-[8px] flex-1">
            <p>Casio</p>

            <p className="text-2xl whitespace-nowrap sm:whitespace-normal w-[150px] sm:w-full text-ellipsis overflow-hidden">
              Casio RX 24 featuring a durable stainless steel ...
            </p>

            <div className="w-[95%] sm:w-[69%] flex flex-col gap-2 sm:flex-row sm:gap-4 sm:items-center">
              <p className="uppercase text-sm sm:text-xl bg-blue-50 flex-0">
                onyx black
              </p>

              <p className="uppercase">Extra 20% off with coupon</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm sm:text-xl text-app-orange">NGN 20,000</p>
              <span className="flex items-center text-sm sm:text-xl bg-blue-50 rounded-[8px] p-1 gap-1">
                <div className="bg-app-bg rounded-[8px] w-[24px] h-[24px] flex items-center justify-center">
                  <FaMinus style={{ width: "12px", height: "12px" }} />
                </div>

                <p className="text-xl text-app-black-1">1</p>
                <div className="bg-app-bg rounded-[8px] w-[24px] h-[24px] flex items-center justify-center">
                  <FaPlus style={{ width: "12px", height: "12px" }} />
                </div>
              </span>
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
