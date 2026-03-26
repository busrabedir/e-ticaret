const CardSummary = ({ cart }) => {
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <div className="bg-white rounded-2xl shadow-sm p-5 h-fit sticky top-20">
      <h2 className="text-xl font-semibold mb-4">Sipariş Detayları</h2>

      <div className="flex flex-col gap-3 text-sm">
        <p className="flex items-center justify-between text-sm">
          <span className="text-gray-600">Ürün adedi</span>
          <span className="text-lg font-bold">{totalQuantity}</span>
        </p>

        <p className="flex items-center justify-between text-sm">
          <span className="text-gray-600">Toplam Fiyat</span>
          <span className="text-lg font-bold">{totalPrice.toFixed(2)}₺</span>
        </p>
      </div>

      <button className="mt-5 w-full bg-red-500 text-white py-3 rounded-xl font-semibold hover:bg-red-600 transition">
        Siparişi Onayla
      </button>
    </div>
  );
};

export default CardSummary;
