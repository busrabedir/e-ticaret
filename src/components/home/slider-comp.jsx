import Slider from "react-slick";

const SliderComp = () => {
  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider {...settings}>
        <div>
          <div className="relative bg-[#F2F2F2] overflow-hidden flex justify-end rounded-xl">
            <div className="absolute top-1/3 -translate-y-1/2 left-3 md:left-10 max-w-[75%] sm:max-w-[60%] lg:max-w-[40%] flex flex-col gap-3 md:gap-4">
              <h1 className="font-bold text-2xl md:text-4xl lg:text-5xl">
                Nike Air Force
              </h1>

              <p className="text-sm md:text-lg text-gray-600 leading-relaxed">
                Hız kazandıran orijinal basketbol ayakkabısıyla kolayca harekete
                geçebilirsin. Sevdiğin her özelliği ve fazlasını sunuyoruz.
              </p>

              <button className="border border-gray-300 rounded-full text-sm md:text-lg w-32 md:w-40 h-10 md:h-12 flex items-center justify-center bg-gray-200 hover:bg-black hover:text-white transition shadow-sm">
                İncele
              </button>
            </div>

            <img
              className="ml-auto h-87.5 md:h-112.5 lg:h-130 object-contain"
              src="https://9b6e8d-barcin.akinoncloudcdn.com/products/2025/04/25/2289402/9a038fe6-3b61-470a-990d-7947bfea54de_size3840x3840_cropCenter.jpg"
              alt="Nike Air Force"
            />
          </div>
        </div>
        <div className="relative bg-[#F2F2F2] overflow-hidden flex justify-end rounded-xl">
          <div className="absolute top-1/3 -translate-y-1/2 left-3 md:left-10 max-w-[75%] sm:max-w-[60%] lg:max-w-[40%] flex flex-col gap-3 md:gap-4">
            <h1 className="font-bold text-2xl md:text-4xl lg:text-5xl">
              Nike Air Jordan
            </h1>

            <p className="text-sm md:text-lg text-gray-600 leading-relaxed">
              Hem modern hem de geçmişin izlerini taşıyan tasarım. Her adımda
              konfor, dayanıklılık ve stil sunan yaşam tarzı aracı olarak öne
              çıkar.
            </p>

            <button className="border border-gray-300 rounded-full text-sm md:text-lg w-32 md:w-40 h-10 md:h-12 flex items-center justify-center bg-gray-200 hover:bg-black hover:text-white transition shadow-sm">
              İncele
            </button>
          </div>

          <img
            className="ml-auto h-87.5 md:h-112.5 lg:h-130 object-contain"
            src="https://9b6e8d-barcin.akinoncloudcdn.com/products/2023/08/09/1150289/848d55e1-fcb7-4c64-889e-e2a6abda496e_size1920_cropCenter.jpg"
            alt="Nike Air Force"
          />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComp;
