import { useDispatch, useSelector } from "react-redux";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { BiPlus } from "react-icons/bi";
import { BiMinus } from "react-icons/bi";
import { GrLinkNext } from "react-icons/gr";
import { FiChevronDown } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import {
  addItemToCart,
  deleteItemInCart,
  removeItemInCart,
} from "../../features/counter/CounterSlice";
import { useState } from "react";
import Loading from "../../components/loading/Loading";
import { toast } from "react-toastify";

const Cart = () => {
  const { cart } = useSelector((state) => state.cart);
  const { total } = useSelector((state) => state.cart);
  const [dropDown, setDropDown] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  let interval;

  const PLaceOrder = (cart) => {
    dispatch(deleteItemInCart(cart));
    setLoading((prevState) => !prevState);

    interval = setInterval(() => {
      timeLoading();
    }, 2000);

  }

  const timeLoading = () => {
    setLoading(false);
    clearInterval(interval);
    toast.success('عملیات با موفقیت انجام شد');
  }

  return (
    <>
      {
        loading ?
          < Loading /> : ''
      }
      <div className="flex items-start justify-center">
        <div className="flex flex-col max-w-[1440px] h-auto">
          <div className="flex flex-col h-36 justify-evenly w-screen px-8">
            <div className="w-4 h-4">
              <Link to="/">
                <MdOutlineKeyboardBackspace className="mb-12 rotate-180 text-2xl" />
              </Link>
            </div>
            <div className="flex items-center">
              <h1 className="font-bold text-2xl">سبد خرید</h1>
              <p className="text-gray-400 mr-1 text-lg">({cart.length})</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center md:items-start justify-center w-full h-4/6 p-4">
            {cart.map((product) => {
              return (
                <div key={product.id} className="flex flex-col m-2 md:m-1 direction">
                  <div className="absolute flex w-20 h-7 rounded-lg items-center justify-around bg-white mt-[70px] ml-3">
                    <button>
                      {product.quantity === 1 ? <MdDelete onClick={() => dispatch(removeItemInCart(product))} /> : <BiMinus
                        onClick={() => dispatch(removeItemInCart(product))}
                      />}
                    </button>
                    <span>{product.quantity}</span>
                    <button>
                      <BiPlus onClick={() => dispatch(addItemToCart(product))} />
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
                    <div className="flex items-center w-20 justify-between font-bold text-lg">
                      <span className="font-bold flex items-center text-lg">
                        <RiMoneyDollarCircleFill className="mr-1" />
                        {product.price * product.quantity}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
            {
              cart.length > 0 ?
                <div className="w-full max-w-7xl mt-5 h-2/6">
                  <div className="flex justify-between px-4">
                    <p className="text-gray-400">تعداد محصولات ({cart.length} محصول)</p>
                    <span className="font-bold flex items-center text-lg">
                      {total}
                      <RiMoneyDollarCircleFill className="mr-1" />
                    </span>
                  </div>
                  <div className="flex justify-between mt-8 px-3">

                    <div className="w-2/6 h-auto relative">
                      <div onClick={() => setDropDown((prevState) => !prevState)} className="flex cursor-pointer h-14 flex-col items-center justify-center w-full rounded-xl bg-gray-300">
                        <div className="flex text-2xl">
                          <RiMoneyDollarCircleFill /> <FiChevronDown />
                        </div>
                      </div>

                      <div className="w-full min-w-[320px] max-w-[414px] absolute mt-4 min-h-0 h-auto flex items-center justify-end flex-col overflow-hidden rounded-xl bg-gray-300">
                        {cart.map((items) => {
                          return <div key={items.id} className={`w-full items-center duration-200 ease-in-out ${dropDown ? "h-10 border" : "h-0"} overflow-hidden flex justify-around`}>
                            <span>{items.name}</span>
                            <span>{items.quantity}</span>
                            <div className="flex items-center w-20 justify-between">
                              <span className="flex items-center text-lg">
                                {items.price * items.quantity}
                                <RiMoneyDollarCircleFill className="mr-1" />
                              </span>
                            </div>
                          </div>
                        })}

                        <div className={`flex w-full items-center duration-200 ease-in-out ${dropDown ? "h-10" : "h-0"} overflow-hidden justify-between px-10`}>
                          <p>قیمت کل</p>
                          <span className="font-bold flex items-center text-lg">
                            {total}
                            <RiMoneyDollarCircleFill className="mr-1" />
                          </span>
                        </div>
                        <div className={`bg-gray-400 cursor-pointer duration-200 ease-in-out ${dropDown ? "h-10" : "h-0"} overflow-hidden w-full flex items-center justify-center font-bold text-xl`}>چاپ رسید</div>
                      </div>
                    </div>
                    <button onClick={() => PLaceOrder(cart)} className="w-4/6 flex items-center justify-center rounded-xl text-white h-14 fill-[#ffffff] bg-black mr-2">
                    ثبت سفارش <GrLinkNext className="text-white fill-white" />
                    </button>
                  </div>
                </div>
                : <p>سبد خرید خالی است !</p>
            }
          </div>
        </div>
      </div>
    </>

  );
};

export default Cart;
