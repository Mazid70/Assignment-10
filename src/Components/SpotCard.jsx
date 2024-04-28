import { Link } from "react-router-dom";

const SpotCard = ({ spot }) => {
  const {
    _id,
    image,
    tourist_spot_name,
    average_cost,
    travel_time,
    seasonality,
    country_name,
  } = spot;
  return (
    <div className="bg-white  border rounded-xl overflow-hidden">
      <img
        src={image}
        className="h-[260px] w-full rounded-t-xl z-0 transition-all duration-300 hover:scale-110"
      />

      <div className="p-10 w-[95%] space-y-3">
        <h1 className="font-bold text-2xl">{tourist_spot_name}</h1>
        <h1 className="font-bold text-2xl text-red-400">
          ${average_cost}{" "}
          <span className="text-gray-500 font-normal text-xl">/Per Person</span>
        </h1>
        <div className="bg-[#FAF5EE] flex px-5 py-3 rounded-xl justify-between w-full mx-auto">
          <h1 className="text-gray-500 font-normal text-xl">{travel_time}</h1>
          <h1 className="text-gray-500 font-normal text-xl">{seasonality}</h1>
          <h1 className="text-gray-500 font-normal text-xl">{country_name}</h1>
        </div>

      <Link to={`/details/${_id}`} ><button className="  text-xl  hover:text-blue-600 hover:underline hover:font-bold">
          View details
        </button></Link> 
      </div>
    </div>
  );
};

export default SpotCard;
