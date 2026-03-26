import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/products/${product.id}`)}
      className="group w-full bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition duration-300 cursor-pointer overflow-hidden"
    >
      <div className="bg-gray-50 p-5 flex justify-center">
        <img
          className="w-40 h-40 object-contain transition duration-300 group-hover:scale-105"
          src={product?.image}
          alt={product?.title}
        />
      </div>

      <div className="p-4 flex flex-col gap-3">
        <h1 className="text-sm sm:text-base font-semibold text-gray-800 line-clamp-2">
          {product?.title}
        </h1>

        <div className="text-lg font-bold">
          {product?.price} <span className="text-sm font-medium">TL</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
