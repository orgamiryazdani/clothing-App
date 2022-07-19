import { MdClose } from "react-icons/md";
import { BiSearchAlt } from "react-icons/bi";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchItem } from "../../features/counter/SearchSlice";
import { useRef } from "react";

const Search = () => {

  const inputRef = useRef('')
  const [search, setSearch] = useState(false);
  const dispatch = useDispatch();

  const changeHandler = () => {
    dispatch(searchItem(inputRef.current.value));
  };

  const ShowSearch = () => {
    setSearch((search) => !search);
  };

  return (
    <div className="flex items-center cursor-pointer justify-center">
      <div
        className={`h-7 ${search ? "w-46 md:w-80" : "w-0"
          } flex ease-in-out duration-150 overflow-hidden`}
      >
        <input
          ref={inputRef}
          onChange={changeHandler}
          type="search"
          className="border rounded-md border-black outline-none mr-2 p-2 text-sm w-full"
        />
      </div>
      <div className="mr-6" onClick={() => ShowSearch()}>
        {search ? <MdClose /> : <BiSearchAlt />}
      </div>
    </div>
  );
};

export default Search;
