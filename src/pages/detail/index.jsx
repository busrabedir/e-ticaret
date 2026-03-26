import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetailProduct } from "../../redux/actions";
import Loader from "../../components/loader";
import Error from "../../components/error";
import { FaRegComment, FaRegStar } from "react-icons/fa";
import { addToCart } from "../../redux/slices/cartSlice";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { isLoading, error, productDetail } = useSelector(
    (store) => store.detail,
  );

  useEffect(() => {
    dispatch(getDetailProduct(id));
  }, [dispatch, id]);

  if (isLoading) return <Loader />;

  if (error) return <Error />;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="bg-gray-50 rounded-3xl p-6 flex justify-center">
          <img
            src={productDetail?.image}
            alt={productDetail?.title}
            className="w-72 h-72 object-contain transition hover:scale-105"
          />
        </div>

        <div className="flex flex-col gap-5">
          <span className="text-sm text-gray-500 uppercase tracking-wide">
            {productDetail?.category}
          </span>

          <h1 className="text-2xl md:text-4xl font-bold leading-tight">
            {productDetail?.title}
          </h1>

          <div className="flex items-center gap-5">
            <span className="flex items-center gap-2 text-yellow-500 font-medium">
              <FaRegStar />
              {productDetail?.rating?.rate}
            </span>

            <span className="flex items-center gap-2 text-gray-500 text-sm">
              <FaRegComment />
              {productDetail?.rating?.count} yorum
            </span>
          </div>

          <p className="text-gray-600 leading-relaxed">
            {productDetail?.description}
          </p>

          <div className="text-3xl font-bold ">{productDetail?.price} TL</div>

          <button
            onClick={() =>
              productDetail &&
              dispatch(
                addToCart({
                  id: productDetail.id,
                  title: productDetail.title,
                  price: productDetail.price,
                  image: productDetail.image,
                }),
              )
            }
            className="w-full md:w-fit bg-gray-900 text-white px-6 py-3 rounded-xl font-semibold transition hover:bg-gray-800 active:scale-95 cursor-pointer"
          >
            Sepete Ekle
          </button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
