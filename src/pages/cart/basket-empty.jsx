import { SlBasket } from "react-icons/sl";
import { Link } from "react-router-dom";

const BasketEmpty = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="flex flex-col items-center text-center max-w-md w-full">
        <div className="bg-red-50 p-5 sm:p-6 rounded-full shadow-sm">
          <SlBasket className="size-8 sm:size-10 text-red-500" />
        </div>

        <h1 className="mt-5 text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">
          Sepetiniz Boş
        </h1>

        <p className="mt-2 text-sm sm:text-base text-gray-500">
          Henüz sepete bir ürün eklemediniz. Ürünlere göz atarak alışverişe
          başlayabilirsiniz.
        </p>

        <Link
          to="/"
          className="mt-6 w-full sm:w-auto text-center rounded-full bg-red-500 px-6 py-3 text-white font-medium shadow-md transition hover:bg-red-600 hover:scale-105"
        >
          Ürünlere Gözat
        </Link>
      </div>
    </div>
  );
};

export default BasketEmpty;
