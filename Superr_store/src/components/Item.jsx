import propTypes from "prop-types";
import { FaStar } from "react-icons/fa";
import { FiHeart, FiTrash } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Item = ({ src, desc, name, price }) => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/Cart");
  }
  return (
    <div>
      <div
        className="w-full md:max-w-xl max-w-sm lg:max-w-md min-h-full p-5 bg-app-bg rounded-2xl shadow-2xl m-auto hover:cursor-pointer"
        onClick={handleClick}
      >
        <div className="relative w-full h-48 bg-blue-50 rounded-2xl overflow-hidden flex justify-center items-center">
          <img src={src} alt="item_image" className="max-h-full" />
          <div className="absolute bg-app-bg border-2 rounded-2xl top-2 right-2 flex items-center justify-center text-sm px-[4px] py-[2px] gap-[2px]">
            <span>4.2</span>
            <span>
              <FaStar />
            </span>
            <span>(430)</span>
          </div>
        </div>
        <div className="min-h-full flex flex-col gap-2 mt-4 text-app-black-1">
          <div className="flex justify-between items-center">
            <p className="text-xl text-gray-500">{name}</p>
            <div className="flex space-x-2">
              <FiHeart style={{ width: "24px", height: "24px" }} />
              <FiTrash style={{ width: "24px", height: "24px" }} />
            </div>
          </div>
          <div className="text-lg lg:text-xl font-medium mt-2">
            <p className="text-app-black-1">{desc}</p>
          </div>
          <div className="uppercase text-gray-500 mt-2">
            <p>6 pieces left</p>
          </div>
          <div className="flex flex-wrap gap-2 items-center mt-2">
            <div className="bg-blue-100 rounded-2xl py-1 px-2">
              <p className="flex items-center whitespace-nowrap uppercase">
                onyx black
              </p>
            </div>
            <div>
              <p className="text-sm lg:text-base uppercase">
                Extra 20% off with coupon
              </p>
            </div>
          </div>
          <div className="text-app-orange font-semibold text-lg lg:text-xl mt-2">
            <p>{price}</p>
          </div>
          <div className="text-app-black-2 text-sm lg:text-base mt-2">
            <p>Free shipping</p>
          </div>
        </div>
      </div>
    </div>
  );
};

Item.propTypes = {
  src: propTypes.string,
  desc: propTypes.string,
  name: propTypes.string,
  price: propTypes.string,
};
export default Item;
