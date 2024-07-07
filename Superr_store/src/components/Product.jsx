import React from "react";
import Item from "./Item";

const Product = () => {
  return (
    <div>
      <section className="mx-[20px] bg-blue-100 ">
        <div className="flex justify-center items-center gap-[24px] text-app-black-1 mb-[48px] pt-[48px]">
          <button className="focus:border-b-2 focus:border-app-orange">
            Best Seller
          </button>
          <button className="focus:border-b-2 focus:border-app-orange">
            Featured
          </button>
          <button className="focus:border-b-2 focus:border-app-orange">
            New Arrival
          </button>
        </div>
        <div className="px-[30px]">
          <Item />
        </div>
      </section>
    </div>
  );
};

export default Product;
