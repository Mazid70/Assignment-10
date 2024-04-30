import img from "../assets/discount.png";
import { BiPhoneCall } from "react-icons/bi";
const Discount = () => {
  return (
    <section className="container mx-auto flex flex-col lg:flex-row  items-center">
      <div className="relative flex-1">
        <img src={img} alt="" />
        <div className="absolute  bottom-10 flex items-center gap-3 px-10 py-5 rounded-lg bg-white shadow-xl">
          <div className="text-3xl text-red-500">
            <BiPhoneCall />
          </div>
          <div>
            <p className="text-sm">BOOK TOUR NOW</p>
            <h1 className="font-semibold text-lg">+88 01533 333 333</h1>
          </div>
        </div>
        <div className="absolute top-[20%] right-0 lg:right-32">
          <h1 className="font-extrabold text-5xl font-serif text-red-500">
            30%
          </h1>
          <h1 className="font-extrabold text-5xl">Discount</h1>
        </div>
      </div>
      <div className="flex-1 space-y-5 p-5">
        <h1 className="font-extrabold text-5xl mb-8">
          Plan Your Trip with <br />
          WanderHub
        </h1>
        <p className="w-4/5 mb-8">
          There are many variations of passages of available but the majority
          have suffered alteration in some form, by injected hum randomised
          words which don not look even slightly.
        </p>
        <h1 className="font-bold text-lg">
          <span className="text-xl text-white px-1 rounded-full bg-red-500 mr-5 ">
            &#x2714;
          </span>
          Invest in your simply neighborhood
        </h1>
        <h1 className="font-bold text-lg">
          <span className="text-xl text-white px-1 rounded-full bg-red-500 mr-5 ">
            &#x2714;
          </span>
          Support people in free text extreme need
        </h1>
        <h1 className="font-bold text-lg ">
          <span className="text-xl text-white px-1 rounded-full bg-red-500 mr-5 ">
            &#x2714;
          </span>
          Largest global industrial business community
        </h1>
        <button className="btn bg-red-500  text-white">BOOK WITH US NOW</button>
      </div>
    </section>
  );
};

export default Discount;
