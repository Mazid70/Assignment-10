import { useLoaderData } from "react-router-dom";
import CountryCard from "./CountryCard";
const Country = () => {
  const countryTouristSpot = useLoaderData();
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 mb-10 gap-10 container mx-auto mt-20">
      {countryTouristSpot.map((spot) => (
        <CountryCard key={spot._id} spot={spot}></CountryCard>
      ))}
    </div>
  );
};

export default Country;
