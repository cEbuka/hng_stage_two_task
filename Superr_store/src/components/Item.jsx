import propTypes from "prop-types";
import { FiHeart, FiTrash } from "react-icons/fi";

const Item = ({ src }) => {
  return (
    <div>
      <div className="w-full min-h-full p-[20px] bg-app-bg rounded-2xl shadow-2xl m-auto">
        <div className="w-full h-[188px] bg-blue-50 rounded-2xl overflow-clip">
          {" "}
          <img src={src} alt="item_image" className="m-auto" />
        </div>
        <div className="min-h-full flex gap-[8px] flex-col ">
          <div className="flex justify-center items-center">
            <p className="text-xl">Casio</p>
            <div className="flex ml-auto">
              <FiHeart />
              <FiTrash />
            </div>
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
          <div>
            <p className="text-app-orange">NGN 20,000</p>
          </div>
          <div className="text-app-black-2">
            <p>Free shipping</p>
          </div>
        </div>
      </div>
    </div>
  );
};

Item.propTypes = {
  src: propTypes.string,
};
export default Item;
