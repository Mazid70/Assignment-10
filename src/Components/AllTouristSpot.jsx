import { useLoaderData } from "react-router-dom";
import SpotCard from "./SpotCard";

const AllTouristSpot = () => {
  const userTouristSpot = useLoaderData();

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 h-[90vh] container mx-auto mt-20">
      
      <div className="h-[500px]">
      {userTouristSpot.map((spot) => (
        <SpotCard key={spot._id} spot={spot}></SpotCard>
      ))}
      </div>
    
    </div>
  );
};

export default AllTouristSpot;
