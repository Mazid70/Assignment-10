import { useLoaderData } from "react-router-dom";
import { FaPen, FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const MyTouristSpot = () => {
  const myTouristSpot = useLoaderData();
 

  return (
    <div className="h-[100vh] mt-20 container mx-auto">
      <table className="w-full">
        <thead>
          <tr>
            <th className=" border-2 lg:p-5 ">Tourist Spot Name</th>
            <th className=" border-2 lg:p-5 ">Country</th>
            <th className=" border-2 lg:p-5 ">Seasionality</th>
            <th className=" border-2 lg:p-5 ">Cost</th>
            <th className=" border-2 lg:p-5 ">Action</th>
          </tr>
        </thead>
        <tbody>
          {myTouristSpot.map((spot) => (
            <tr key={spot._id}>
              <td className="border-2 p-5 text-center">
                {spot.tourists_spot_name}
              </td>
              <td className="border-2 lg:p-5 text-center">{spot.country_name}</td>
              <td className="border-2 lg:p-5 text-center">{spot.seasonality}</td>
              <td className="border-2 lg:p-5 text-center">{spot.average_cost}</td>
              <td className="border-2 lg:p-5 text-center py-16  flex justify-between items-center text-2xl">
                <FaEye /> <FaPen /> <MdDelete />{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyTouristSpot;
