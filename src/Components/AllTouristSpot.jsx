import { useLoaderData } from "react-router-dom";
import SpotCard from "./SpotCard";


const AllTouristSpot = () => {
    const userTouristSpot=useLoaderData()
    console.log(userTouristSpot)
    return (
        <div>
            {
userTouristSpot.map(spot=><SpotCard key={spot._id} spot={spot}></SpotCard>)
            }
        </div>
    );
};

export default AllTouristSpot;