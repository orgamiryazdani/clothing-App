import { BsFillPlusCircleFill } from "react-icons/bs";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import * as data from "../../data";
import { addItemToCart } from "../../features/counter/CounterSlice";

const Product = () => {
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  const dispatch = useDispatch();

  return (
    <main className="flex absolute p-4 mt-5 md:mt-0 flex-wrap w-screen h-auto justify-around overflow-hidden">
      {data.products.map((product) => {
        return (
          <article
            key={product.id}
            className="flex flex-col rounded-xl overflow-hidden w-80 h-72"
          >
            <div className="flex items-center justify-center rounded-xl overflow-hidden w-full h-4/6">
              <div className="absolute mr-60 text-2xl w-6 h-6 text-black rounded-full bg-white cursor-pointer mt-36">
                <BsFillPlusCircleFill
                  onClick={() => dispatch(addItemToCart( product ))}
                />
              </div>
              <img
                className="w-full h-auto min-h-full  "
                src={product.image}
                alt=""
              />
            </div>
            <div className="flex justify-between p-4 h-14 items-center">
              <span className="text-xl flex items-center w-16 justify-between font-bold">
                <RiMoneyDollarCircleFill />
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
    </main>
  );
};

export default Product;
