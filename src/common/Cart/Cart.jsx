import { useSelector } from "react-redux";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { BiPlus } from "react-icons/bi";
import { BiMinus } from "react-icons/bi";
import { GrLinkNext } from "react-icons/gr";
import { FiChevronDown } from "react-icons/fi";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart } = useSelector((state) => state.cart);
  const { total } = useSelector((state) => state.cart);

  return (
    <div className="flex flex-col w-screen h-auto">
      <div className="flex flex-col cursor-pointer h-36 justify-end px-8">
        <Link to="/">
          <MdOutlineKeyboardBackspace className="mb-12 text-2xl" />
        </Link>
        <div className="flex items-center">
          <h1 className="font-bold text-2xl">My Cart</h1>
          <p className="text-gray-400 ml-1 text-lg">({total})</p>
        </div>
      </div>
      <div className="flex flex-wrap items-center md:items-start justify-center w-full h-4/6 p-4">
        {cart.map((product) => {
          return (
            <div className="flex flex-col m-2 md:m-1">
              <div className="absolute flex w-20 h-7 rounded-lg items-center justify-around bg-white mt-[70px] ml-3">
                <button>
                  <BiMinus />
                </button>
                <span>{product.quantity}</span>
                <button>
                  <BiPlus />
                </button>
              </div>
              <div className="flex items-center justify-center rounded-xl  w-80 h-28 overflow-hidden">
                <img
                  className="w-full h-auto min-h-full"
                  src={product.image}
                  alt=""
                />
              </div>
              <div className="flex justify-between items-center h-14  px-2">
                <p>{product.name}</p>
                <div className="flex items-center w-14 justify-between font-bold text-lg">
                  <RiMoneyDollarCircleFill />
                  <span>{product.price}</span>
                </div>
              </div>
            </div>
          );
        })}
        <div className="w-full mt-5 h-2/6">
          <div className="flex justify-between px-2">
            <p className="text-gray-400">Total Price ({total} items)</p>
            <span className="font-bold flex items-center text-lg">
              <RiMoneyDollarCircleFill className="mr-1" />
              0.092
            </span>
          </div>
          <div className="flex justify-between mt-8 px-3">
            <ul className="flex items-center justify-center w-2/6 rounded-xl bg-gray-300">
              <li className="flex"><RiMoneyDollarCircleFill /> <FiChevronDown/></li>
            </ul>
            <button className="w-4/6 flex items-center justify-center rounded-xl text-white h-14 fill-[#ffffff] bg-black ml-2">Checkout <GrLinkNext className="text-white fill-white"/></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
