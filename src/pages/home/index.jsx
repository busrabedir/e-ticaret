import Category from "../../components/home/category";
import Products from "../../components/home/products";
import SliderComp from "../../components/home/slider-comp";
import Sorting from "../../components/home/sorting";

const Home = () => {
  return (
    <div>
      <SliderComp />
      <Sorting />
      <div className="flex">
        <Category />
        <Products />
      </div>
    </div>
  );
};

export default Home;
