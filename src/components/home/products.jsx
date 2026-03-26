import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryProducts, getProducts } from "../../redux/actions";
import Loader from "../loader";
import Error from "../error";
import Product from "./product";
import ReactPaginate from "react-paginate";

const Products = () => {
  const dispatch = useDispatch();

  const { isLoading, error, products, sort } = useSelector(
    (store) => store.products,
  );

  const { selectedCategory } = useSelector((store) => store.categories);

  const [start, setStart] = useState(0);
  const limit = 8;
  const end = start + limit;

  // kategori değişince veri çek
  useEffect(() => {
    if (selectedCategory) {
      dispatch(getCategoryProducts(selectedCategory));
    } else {
      dispatch(getProducts());
    }
  }, [dispatch, selectedCategory]);

  // kategori değişince pagination sıfırlansın
  useEffect(() => {
    setStart(0);
  }, [selectedCategory, sort]);

  // Sıralama uygula
  const sortedProducts = useMemo(() => {
    return [...products].sort((a, b) => {
      if (sort === "inc") return a.price - b.price;
      if (sort === "dec") return b.price - a.price;
      return 0;
    });
  }, [products, sort]);

  // Pagination slice
  const currentProducts = sortedProducts.slice(start, end);

  // Sayfa değişimi
  const handleChange = (e) => {
    setStart(e.selected * limit);
  };

  if (isLoading) {
    return (
      <div className="flex-1 flex justify-center items-center h-100">
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex-1 flex justify-center">
        <Error />
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pl-5 max-md:p-0">
        {currentProducts?.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>

      <div className="flex justify-center my-4">
        <ReactPaginate
          breakLabel="..."
          nextLabel="›"
          previousLabel="‹"
          onPageChange={handleChange}
          pageRangeDisplayed={3}
          pageCount={Math.ceil(sortedProducts.length / limit)}
          renderOnZeroPageCount={null}
          className="pagination"
          pageClassName="page-item"
          previousClassName="page-item"
          nextClassName="page-item"
          pageLinkClassName="page-link"
          previousLinkClassName="page-link"
          nextLinkClassName="page-link"
          activeClassName="active"
          disabledClassName="disabled"
        />
      </div>
    </div>
  );
};

export default Products;
