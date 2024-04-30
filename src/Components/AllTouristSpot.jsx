import { useLoaderData } from "react-router-dom";
import UserSpotCard from "./UserSpotCard";
import { useEffect, useState } from "react";
const AllTouristSpot = () => {
  const userTouristSpot = useLoaderData();
  const [data, setData] = useState([...userTouristSpot]);
  const [sortBy, setSortBy] = useState();
  const handleSortChange = (e) => {
    setSortBy(e);
  };

  useEffect(() => {
    let sorted;
    if (sortBy === "average_cost") {
      sorted = [...userTouristSpot].sort(
        (a, b) => parseInt(a.average_cost) - parseInt(b.average_cost)
      );
      console.log(sorted);
      setData(sorted);
    }
  }, [userTouristSpot, sortBy]);

  return (
    <div className="pt-10">
      <div className="flex justify-center ">
        <details className="dropdown">
          <summary className="m-1 btn bg-[#080a3c] text-lg text-yellow-400">
            Sort By
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] text-lg text-yellow-400 bg-[#080a3c] rounded-box w-52">
            <li
              className="cursor-pointer"
              onClick={() => handleSortChange("average_cost")}
            >
              Avarage Cost
            </li>
          </ul>
        </details>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 mb-10 gap-10 container mx-auto mt-5">
        {data.map((spot) => (
          <UserSpotCard key={spot._id} spot={spot}></UserSpotCard>
        ))}
      </div>
    </div>
  );
};

export default AllTouristSpot;
