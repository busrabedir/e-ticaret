import { useSelector } from "react-redux";
import BasketEmpty from "./basket-empty";
import Card from "./card";
import CardSummary from "./card-summary";

const Cart = () => {
  const { cart } = useSelector((store) => store.cart);

  if (!cart || cart.length === 0) {
    return <BasketEmpty />;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <div className="grid lg:grid-cols-[1fr_320px] gap-6">
        <div className="flex flex-col gap-4">
          {cart.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
        <CardSummary cart={cart} />
      </div>
    </div>
  );
};

export default Cart;
