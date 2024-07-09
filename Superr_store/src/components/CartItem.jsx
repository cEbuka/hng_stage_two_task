import React from "react";

import propTypes from "prop-types";

const CartItem = ({  src }) => {
  return (
    <React.Fragment>
      <div className="w-[743px] min-h-full p-[20px] bg-app-bg rounded-2xl shadow-2xl m-[20px] absolute top-25 right-10 flex gap-[16px] shadow-3xl">
        <div className="w-[188px] h-[188px] bg-blue-50 rounded-2xl overflow-clip">
          <img src={src} alt="item_image" className="m-auto" />
        </div>
        <div className="text-left flex flex-col gap-[16px]">
          <div className="">
            <p className="text-xl">Casio</p>
          </div>
          <div className="text-xl">
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
          <div>
            <p className="text-app-orange">NGN 20,000</p>
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
