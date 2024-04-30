import { useLoaderData } from "react-router-dom";
import UserSpotCard from "./UserSpotCard";
const AllTouristSpot = () => {
const userTouristSpot = useLoaderData();
return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 mb-10 gap-10 container mx-auto mt-20">
      {userTouristSpot.map((spot) => (
        <UserSpotCard key={spot._id} spot={spot}></UserSpotCard>
      ))}
    </div>
  );
};
export default AllTouristSpot;
