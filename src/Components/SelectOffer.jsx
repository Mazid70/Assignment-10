import { HiBuildingLibrary } from "react-icons/hi2";
import { BiBusSchool } from "react-icons/bi";
import { IoFastFoodOutline } from "react-icons/io5";
import { PiSunHorizon } from "react-icons/pi";
import { LuShip } from "react-icons/lu";
import { LiaMountainSolid } from "react-icons/lia";
const SelectOffer = () => {
  return (
    <section className="text-center">
      <h2 className="text-blue-900 mt-10 font-bold text-xl mb-2">Inventore veritatis</h2>
      <h1 className="font-extrabold text-4xl">
        Select Offer For Traveling
      </h1>
      <div className="relative text-center container mx-auto">
        <h1 className=" -mt-20 font-extrabold text-[250px] opacity-5">Travel</h1>
        <div className="absolute top-[40%] w-full flex justify-around">
          <div className="text-blue-700 flex flex-col items-center gap-2 ">
            <HiBuildingLibrary className="text-7xl" />
            <h1 className="text-black font-semibold text-sm ">
              Different coutries
            </h1>
          </div>
          <div className="text-blue-700 flex flex-col items-center gap-2 ">
            <BiBusSchool className="text-7xl" />
            <h1 className="text-black font-semibold text-sm ">
              Bus Tours
            </h1>
          </div>
          <div className="text-blue-700 flex flex-col items-center gap-2 ">
            <IoFastFoodOutline className="text-7xl" />
            <h1 className="text-black font-semibold text-sm ">
            Food Tours
            </h1>
          </div>
          <div className="text-blue-700 flex flex-col items-center gap-2 ">
            <PiSunHorizon className="text-7xl" />
            <h1 className="text-black font-semibold text-sm ">
             Summer Rest
            </h1>
          </div>
          <div className="text-blue-700 flex flex-col items-center gap-2 ">
            <LuShip className="text-7xl" />
            <h1 className="text-black font-semibold text-sm ">
              Ship Cruises
            </h1>
          </div>
          <div className="text-blue-700 flex flex-col items-center gap-2 ">
            <LiaMountainSolid  className="text-7xl" />
            <h1 className="text-black font-semibold text-sm ">
             Mountain Tours
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelectOffer;
