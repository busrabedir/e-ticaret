import { useDispatch } from "react-redux";
import { setSort } from "../../redux/slices/productSlice";

const Sorting = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-end my-5 px-4 md:px-0">
      <select
        defaultValue=""
        onChange={(e) => dispatch(setSort(e.target.value))}
        className="bg-white border border-gray-300 rounded-lg py-2 px-4 text-gray-700 font-medium shadow-sm focus:outline-none focus:ring-2 transition"
      >
        <option disabled value="">
          Sırala
        </option>
        <option value="inc">Fiyat Artan</option>
        <option value="dec">Fiyat Azalan</option>
      </select>
    </div>
  );
};

export default Sorting;
