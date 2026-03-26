import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../../redux/slices/cartSlice";

const Card = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition duration-300 p-4 flex flex-col sm:flex-row gap-4">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-40 sm:w-28 sm:h-28 object-contain rounded-xl bg-gray-50 p-2"
      />

      <div className="flex flex-col justify-between w-full gap-3 min-w-0">
        <Link
          to={`/products/${product.id}`}
          className="text-base sm:text-lg font-semibold text-gray-800 hover:text-red-600 line-clamp-2"
        >
          {product.title}
        </Link>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-lg font-bold">{product.price}₺</p>

          <div className="flex items-center justify-between sm:justify-end gap-3">
            <div className="flex items-center gap-2 bg-gray-100 rounded-full px-2 py-1">
              <button
                onClick={() => dispatch(decrementQuantity({ id: product.id }))}
                disabled={product.quantity === 1}
                className="p-2 hover:bg-gray-200 rounded-full transition disabled:opacity-50"
              >
                <FaMinus className="size-3" />
              </button>

              <span className="text-sm font-semibold w-6 text-center">
                {product.quantity}
              </span>

              <button
                onClick={() => dispatch(incrementQuantity({ id: product.id }))}
                className="p-2 hover:bg-gray-200 rounded-full transition"
              >
                <FaPlus className="size-3" />
              </button>
            </div>

            <button
              onClick={() => dispatch(removeFromCart({ id: product.id }))}
              className="p-2 text-red-400 hover:bg-red-50 hover:text-red-600 rounded-full transition"
            >
              <FaTrash className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
