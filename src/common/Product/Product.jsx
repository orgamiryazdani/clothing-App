import { BsFillPlusCircleFill } from "react-icons/bs";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { GiConfirmed } from "react-icons/gi";
import { useSelector, useDispatch } from "react-redux";
import { checkInCart } from "../../utils/checkInCart";
import { addItemToCart } from "../../features/counter/CounterSlice";
import { toast } from "react-toastify";

const Product = () => {
  const { items } = useSelector((state) => state.products);
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const addItem = (product) => {
    dispatch(addItemToCart(product));
    toast.success(`${product.name} به سبد خرید اضافه شد`);
  };

  return (
    <main className="w-screen absolute  h-screen flex items-start justify-center">
      <div className="flex absolute max-w-[1440px] p-4 mt-5 md:mt-0 flex-wrap w-screen h-auto justify-around overflow-hidden">
        {items.map((product) => {
          return (
            <article
              key={product.id}
              className="flex flex-col rounded-xl overflow-hidden w-80 h-72 direction"
            >
              <div className="flex items-center justify-center rounded-xl overflow-hidden w-full h-4/6">
                <div className="absolute mr-60 text-2xl w-6 h-6 text-black rounded-full bg-white cursor-pointer mt-36">
                  {checkInCart(cart, product) ? <GiConfirmed className="bg-slate-200 rounded-full"/> : <BsFillPlusCircleFill onClick={() => addItem(product)} />}


                </div>
                <img
                  className="w-full h-auto min-h-full"
                  src={product.image}
                  alt=""
                />
              </div>
              <div className="flex justify-between p-4 h-14 items-center">

                <span className="font-bold flex items-center text-lg">
                  <RiMoneyDollarCircleFill className="mr-1" />
                  {product.price}
                </span>

                <div className="flex w-28 justify-between">
                  <img
                    className="w-6 h-6 cursor-pointer rounded-full"
                    src={product.img1}
                    alt=""
                  />
                  <div className="absolute ml-2 mt-2 bg-white w-2 h-2 rounded-full"></div>
                  <img
                    className="w-6 h-6 cursor-pointer rounded-full"
                    src={product.img2}
                    alt=""
                  />
                  <img
                    className="w-6 h-6 cursor-pointer rounded-full"
                    src={product.img3}
                    alt=""
                  />
                </div>
              </div>
              <div className="text-gray-400 px-4 font-medium text-md">
                <p>{product.name}</p>
              </div>
            </article>
          );
        })}
      </div>
    </main>
  );
};

export default Product;
