import { useLoaderData } from "react-router-dom";

const Details = () => {
  const spot = useLoaderData();
  console.log(spot);
  const {
    image,
    tourist_spot_name,
    country_name,
    location,
    short_description,
    average_cost,
    seasonality,
    travel_time,
    total_visitors_per_year,
  } = spot;
  return (
    <div className="h-[100vh] flex justify-center items-center">
      <div className="flex flex-col lg:flex-row border shadow-xl container lg:gap-20 ">
        <div className="flex-1 ">
          <img src={image} alt="" className="h-full"/>
        </div>
        <div className="flex-1 space-y-5 mb-10 lg:ml-0 ml-10">
          <h1 className="text-4xl font-bold my-10">{tourist_spot_name}</h1>
          <h1 className="font-bold text-xl ">Country: {country_name}</h1>
          <hr />
          <h1 className="font-bold text-xl ">Location: {location}</h1>
          <hr />
          <h1 className="text-base text-[#131313B3] w-1/2">
            {" "}
            <span className="font-bold  text-black">Description : </span>
            {short_description}
          </h1>
          <hr />
          <div className="flex gap-5 lg:gap-16">
            <div className="space-y-4">
              <h1 className=" text-base font-normal text-[#131313B3]">
                Avarage Cost:
              </h1>
              <h1 className=" text-base font-normal text-[#131313B3]">
                Best Time to Visit:
              </h1>
              <h1 className=" text-base font-normal text-[#131313B3]">
                Travel Time:
              </h1>
              <h1 className=" text-base font-normal text-[#131313B3]">
                Total Visitors:
              </h1>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-black">${average_cost} </h4>
              <h4 className="font-bold text-black">{seasonality} </h4>
              <h4 className="font-bold text-black">{travel_time} </h4>
              <h4 className="font-bold text-black">
                {total_visitors_per_year}/Year{" "}
              </h4>
            </div>
          </div>{" "}
         
          <button className="btn btn-accent text-white">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default Details;
