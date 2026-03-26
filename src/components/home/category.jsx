import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/actions";
import { setCategory } from "../../redux/slices/categorySlice";

const Category = () => {
  const dispatch = useDispatch();
  const { categories, selectedCategory } = useSelector(
    (store) => store.categories,
  );

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <div className="hidden md:block w-1/4 lg:w-1/6">
      <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-4">
        <h2 className="text-lg font-semibold mb-4 text-gray-800">
          Kategoriler
        </h2>

        <div className="flex flex-col gap-2">
          {categories?.map((cat) => (
            <button
              key={cat}
              onClick={() => dispatch(setCategory(cat))}
              className={`text-left px-3 py-2 rounded-lg text-md font-medium transition
                ${
                  selectedCategory === cat
                    ? "bg-gray-600 text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
