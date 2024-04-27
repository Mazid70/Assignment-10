import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./BannerStyle.css";

// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

const Banner = () => {
  return (
    <section>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative text-center h-full w-full hello bg-[url(https://images.squarespace-cdn.com/content/v1/6250a8d257a6e83aaad50c8e/8c8c0aa7-5f3e-49ed-b98b-d73f4c50525b/Worlds-Most-Crystal-Clear-Blue-Water-Beaches-9)] bg-cover bg-no-repeat flex flex-col justify-center items-center text-white">
            <div className="absolute inset-0 bg-black bg-opacity-50 "></div>
            <h1 className="font-extrabold text-5xl relative z-10 my-4">
              Escape to Paradise: Your Dream <br /> Beach Vacation Awaits!
            </h1>
            <p className="md:w-4/5  lg:w-[35%] relative z-10 mb-4">
              Indulge in sun, sand, and relaxation on the shores of our pristine
              beach destinations. Let the sound of the waves soothe your soul
              and create unforgettable memories with loved ones
            </p>
            <button className="bg-green-400 px-8 py-4 rounded-xl relative z-10">
              Explore{" "}
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative text-center h-full w-full hello bg-[url(https://storage.googleapis.com/pai-images/88ab825f57484d7ab1a5a038b96133b2.jpeg)] bg-cover bg-no-repeat flex flex-col justify-center items-center text-white">
            <div className="absolute inset-0 bg-black bg-opacity-50 "></div>
            <h1 className="font-extrabold text-5xl relative z-10 my-4">
              Unleash Your Adventurous Spirit: <br />
              Explore the Mountains!
            </h1>
            <p className="md:w-4/5 lg:w-[35%] relative z-10 mb-4">
              Embark on a journey of discovery amidst breathtaking mountain
              landscapes. Whether you seek thrilling hikes, serene nature walks,
              or adrenaline-pumping adventures, our mountain destinations offer
              something for every explorer.
            </p>
            <button className="bg-green-400 px-8 py-4 rounded-xl relative z-10">
              Explore{" "}
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative text-center h-full w-full hello bg-[url(https://images.squarespace-cdn.com/content/v1/64029dd1934e23132f21c5a1/1681758605870-766L0KZVW21ZPVZBR8LY/unsplash-image-V4cHacmEnW8.jpg)] bg-cover bg-no-repeat flex flex-col justify-center items-center text-white">
            <div className="absolute inset-0 bg-black bg-opacity-50 "></div>
            <h1 className="font-extrabold text-5xl relative z-10 my-4">
              Embrace Urban Excitement: Experience <br /> City Life Like Never
              Before!
            </h1>
            <p className="md:w-4/5 lg:w-[35%] relative z-10 mb-4">
              Immerse yourself in the vibrant energy of bustling cities filled
              with culture, history, and endless possibilities. From iconic
              landmarks to hidden gems, our urban destinations promise an
              unforgettable journey through the heart of civilization.
            </p>
            <button className="bg-green-400 px-8 py-4 rounded-xl relative z-10">
              Explore{" "}
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Banner;
