import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import FeatureTours from "./FeatureTours";
import SelectOffer from "./SelectOffer";
import SpotCard from "./SpotCard";
import Discount from "./Discount";
import { useState } from "react";
import LoadingSpinner from "./LoadingSpinner/LoadingSpinner";
const Home = () => {
  const [loading, setloading] = useState(false);
  setTimeout(() => {
    setloading(true);
  }, 1000);
  const touristSpots = useLoaderData();
  return (
    <>
      {loading ? (
        <div>
          <Banner></Banner>
          <div className="bg-[#DBDDE1]">
            <FeatureTours></FeatureTours>
          </div>
          <SelectOffer></SelectOffer>
          <div className="bg-[#DBDDE1]">
            <Discount></Discount>
          </div>

          <div className="pt-10">
            <h2 className="text-blue-900 text-center  font-bold text-xl mb-2">
              Popular Packages
            </h2>
            <h1 className="font-extrabold text-center text-4xl">
              Checkout Our Packages
            </h1>
            <div className="container mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-10 py-10">
              {touristSpots.map((spot) => (
                <SpotCard key={spot._id} spot={spot}></SpotCard>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <LoadingSpinner></LoadingSpinner>
      )}
    </>
  );
};

export default Home;
