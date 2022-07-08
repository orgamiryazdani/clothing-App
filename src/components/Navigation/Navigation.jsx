import { CgShoppingBag } from "react-icons/cg";
import { Link } from "react-router-dom";
import Search from "../../common/Search/Search";

const Navigation = () => {
  return (
    <header className="flex md:flex-row w-screen h-auto justify-between">
      <div className="flex md:w-1/4 w-2/4 text-2xl font-extrabold h-52 md:h-16 justify-end md:justify-between items-center">
        <div className="flex md:flex-row w-full  flex-col justify-end md:justify-start md:items-center items-start md:w-full h-full">
          <p className="md:ml-8 ml-6">New</p>
          <p className="text-gray-400 ml-6 md:ml-2">Arrivals</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row-reverse md:justify-start w-3/4 items-end md:items-center h-52 md:h-16 justify-between text-2xl">
        <div className="flex w-2/4 md:w-1/4 h-24 md:h-full items-center justify-evenly">
          <Link to="/cart">
            <div className="mr-4">
              <CgShoppingBag />
            </div>
          </Link>
          <img
            className="w-8 h-8 rounded-full"
            src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80"
            alt=""
          />
        </div>
        <Search />
      </div>
    </header>
  );
};

export default Navigation;
