import {FiTrash} from "react-icons/fi"
import CartItem from "./CartItem"

const Cart = () => {
  return (
    <div>
        <div className="">
            <div className="h-[132px] px-[30px] flex items-center">
                <div className="">
                    <h1>Cart</h1>
                    <p>Select items you want to check out</p>
                </div>
                <div className="ml-auto">
                    <FiTrash/>
                </div>
            </div>
            <div>
                <CartItem src="watch_1.png"/>
            </div>
        </div>
    </div>
  )
}

export default Cart