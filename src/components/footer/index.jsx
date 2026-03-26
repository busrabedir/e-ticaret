const Footer = () => {
  return (
    <footer className="mt-10 mb-5">
      <div className="w-full mx-auto text-center border border-gray-200 bg-white/70 backdrop-blur-md rounded-2xl py-6 px-4 shadow-sm">
        <p className="text-sm sm:text-base text-gray-600">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-gray-800">ShopZone</span>. Tüm
          hakları saklıdır.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
