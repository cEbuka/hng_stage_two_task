import { FiArrowLeft, FiTrash } from "react-icons/fi";
import CartItem from "../components/CartItem";
import { useNavigate } from "react-router-dom";
import { productsData } from "../components/productsData";

const Cart = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/Checkout");
  }

  function handleArrowClick() {
    navigate("/Home");
  }

  return (
    <div>
      <div
        className="hidden sm:block absolute top-2 left-2"
        onClick={handleArrowClick}
      >
        <FiArrowLeft style={{ width: "32px", height: "32px" }} />
      </div>
      <div className="w-full sm:w-1/2 m-auto px-[30px]">
        <div className="flex items-end px-[30px] h-[132px] shadow-b-2xl">
          <div className="text-bottom">
            <h1 className="text-3xl font-bold text-left">Cart</h1>
            <p className="text-xl">Select items you want to check out</p>
          </div>
          <div className="pb-1 ml-auto">
            <FiTrash
              style={{
                width: "32px",
                height: "32px",
                color: "orangered",
              }}
            />
          </div>
        </div>
        <div className="">
          {productsData.map((product, index) => (
            <CartItem key={index} src={product.src} />
          ))}
        </div>

        <div className="w-full flex px-[30px] py-[10px] items-center ">
          <div className="flex flex-col gap-[4px] text-left">
            <h1 className="text-xl sm:text-2xl font-semibold">Total</h1>
            <h1 className=" font-semibold">NGN 20,000</h1>
            <h1></h1>
            <h1 className="uppercase">Before tax</h1>
          </div>

          <button
            onClick={handleClick}
            className="flex items-center justify-center w-1/7 h-1/3 bg-app-orange ml-auto px-[21px] py-[14px] rounded-xl text-app-bg font-bold text-md"
          >
            Check out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
