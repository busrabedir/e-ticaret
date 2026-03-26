import { AiOutlineHeart } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { SlBasket } from "react-icons/sl";
import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

const NavbarRight = () => {
  const navigate = useNavigate();
  const { cart } = useSelector((store) => store.cart);
  const totalQuantity = cart?.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="flex items-center gap-3 md:gap-8">
      <div className="flex items-center border border-gray-300 p-2 md:p-3 rounded-full bg-gray-200 shadow-sm">
        <input
          className="bg-gray-200 outline-none w-24 sm:w-36 md:w-48"
          type="text"
          placeholder="Arama..."
        />
        <BiSearch size={22} />
      </div>

      <AiOutlineHeart size={24} />

      <div className="relative">
        <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
          {totalQuantity}
        </span>

        <button onClick={() => navigate("/cart")} className="cursor-pointer">
          <SlBasket size={24} />
        </button>
      </div>
    </div>
  );
};

export default NavbarRight;
