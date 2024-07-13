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
      <div className="w-full h-auto flex  shadow-2xl">
        <div className="w-full p-[10px]">
          <div
            className={`w-[24px] h-[24px] rounded-full border-2 ${
              isItemSelected && "bg-app-orange text-app-bg"
            } flex items-center justify-center`}
            onClick={handleSelect}
          >
            {isItemSelected && <FiCheck />}
          </div>
        </div>
        <div className=" w-full flex gap-[16px] p-[10px] flex-2">
          <div className="w-[132px] h-[132px] bg-gray-500 flex items-center justify-center rounded-xl">
            <img
              src={src}
              alt="product-image"
              className="object-cover w-[16rem] h-[8rem]"
            />
          </div>
          <div className="flex flex-col gap-[8px] p-0 flex-1">
            <p>Casio</p>

            <p className="text-2xl whitespace-nowrap sm:whitespace-normal w-[150px] sm:max-w-sm text-ellipsis overflow-hidden">
              Casio RX 24 featuring a durable stainless steel ...
            </p>

            <div>
              <p className="uppercase text-sm">onyx black</p>

              <p className="uppercase">Extra 20% off with coupon</p>
            </div>
            <div className="flex justify-between">
              <p>NGN 20,000</p>

              <FaMinus />

              <p className="text-xl text-app-black-1">1</p>

              <FaPlus />
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
