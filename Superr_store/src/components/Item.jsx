import itemImage from "../assets/jayanth-muppaneni-9D0Tzqq7J2k-unsplash-removebg-preview 1.png";
import { FiHeart, FiTrash } from "react-icons/fi";

const Item = () => {
  return (
    <div>
      <div className="p-[20px] bg-app-bg rounded-2xl">
        <div className="bg-blue-50 rounded-2xl">
          <img src={itemImage} alt="item_image" />
        </div>
        <div className="w-full flex gap-[8px] flex-col">
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
          <div className="flex uppercase">
            <p className="w-full bg-blue-100 rounded-2xl px-[12px] py-[4px]">
              onyx black
            </p>
            <p className="w-full">Extra 20% off with coupon</p>
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

export default Item;
