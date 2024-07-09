import { FaPlus } from "react-icons/fa";

const Checkout = () => {
  return (
    <div>
      <div className="w-full flex flex-col gap-20 p-[30px]">
        <div className=" flex flex-col text-left">
          <h1 className="text-3xl font-bold text-left">Checkout</h1>
          <p className="text-xl">Select items you want to check out</p>
        </div>
        <div className="flex flex-col gap-[24px]">
          <div className="flex flex-col text-left gap-[12px]">
            <h1 className="text-2xl font-bold">Personal Information</h1>
            <div className="flex">
              <div className="text-xl text-gray-500">
                <p>Harvey Specter</p>
                <p>harveyspecter@gmail.com</p>
                <p>0701234567</p>
              </div>
              <h1 className="ml-auto self-end text-app-orange">Charge</h1>
            </div>
          </div>
          <div className="flex flex-col text-left gap-[12px]">
            <h1 className="text-2xl font-bold">Shipping Address</h1>
            <div className="flex">
              <div className="text-xl text-gray-500">
                <p>Lagos, Nigeria</p>
                <p>Banana Island, Lagos State</p>
                <p>Postal Code: 2345</p>
              </div>
              <h1 className="ml-auto self-end text-app-orange">Charge</h1>
            </div>
          </div>
          <div className="flex flex-col text-left gap-[12px]">
            <h1 className="text-2xl font-bold">Payment Options</h1>
            <div className="flex flex-col gap-[12px]">
              <div className="flex">
                <div className="flex gap-[12px]">
                  <img src="mastercard.png" />
                  <div>
                    <p className="text-xl font-bold text-gray-500">
                      Mastercard ending in 1234
                    </p>
                    <p>Expiry 06/2024</p>
                  </div>
                </div>
                <div className="w-[25px] h-[25px] rounded-full border-2 ml-auto"></div>
              </div>
              <div className="flex">
                <div className="flex gap-[12px]">
                  <img src="pay.png" />
                  <div>
                    <p className="text-xl font-bold text-gray-500">
                      Visa ending in 1234
                    </p>
                    <p>Expiry 06/2024</p>
                  </div>
                </div>
                <div className="w-[25px] h-[25px] rounded-full border-2 ml-auto"></div>
              </div>
              <div className="flex">
                <div className="flex gap-[12px]">
                  <img src="stripe.png" />
                  <div>
                    <p className="text-xl font-bold text-gray-500">
                      Stripe (Visa ending 1234)
                    </p>
                    <p>Expiry 06/2024</p>
                  </div>
                </div>
                <div className="w-[25px] h-[25px] rounded-full border-2 ml-auto"></div>
              </div>
              <div className="flex">
                <div className="flex gap-[12px]">
                  <img src="paypal.png" />
                  <div>
                    <p className="text-xl font-bold text-gray-500">
                      PayPal (Visa ending 1234)
                    </p>
                    <p>Expiry 06/2024</p>
                  </div>
                </div>
                <div className="w-[25px] h-[25px] rounded-full border-2 ml-auto"></div>
              </div>
              <div className="flex">
                <div className="flex items-center gap-[8px] text-xl text-app-orange ml-auto">
                  <p>Add</p>
                  <FaPlus />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-[12px] items-center">
          <div className="text-left w-full">
            <h1 className="text-xl font-bold mb-[12px]">Discount Code</h1>
            <input
              type="number"
              name="discount"
              className="w-full h-[42px] border-2 rounded-xl"
            />
          </div>

          <button className="w-1/5 flex items-center justify-center p-[10px] h-[42px] rounded-xl bg-gray-500 self-end">
            Apply
          </button>
        </div>
        <div className="flex flex-col gap-[8px] text-left text-xl">
          <div className="flex">
            <h1>Subtotal</h1>
            <h1 className="ml-auto"> 17000</h1>
          </div>
          <div className="flex">
            <h1>Discount</h1>
            <h1 className="ml-auto">0</h1>
          </div>
          <div className="flex">
            <h1>Coupon</h1>
            <h1 className="ml-auto">-2000</h1>
          </div>
          <div className="flex">
            <h1>Shipping Fee</h1>
            <h1 className="ml-auto">5000</h1>
          </div>
          <div className="flex py-[20px]">
            <h1>Total</h1>
            <h1 className="ml-auto">NGN20000</h1>
          </div>
        </div>
        <div className="flex justify-between text-xl font-bold">
          <button className="w-1/3 px-[14px] py-[21px] bg-orange-100 rounded-xl text-orange-900">
            Cancel
          </button>
          <button className="w-1/3 px-[14px] py-[21px] bg-app-orange rounded-xl text-app-bg">
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
