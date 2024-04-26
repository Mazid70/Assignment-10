import Banner from "./Banner";
import FeatureTours from "./FeatureTours";
import SelectOffer from "./SelectOffer";



const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <div className="bg-[#DBDDE1]">
          <FeatureTours></FeatureTours>
          </div>
          
          <SelectOffer></SelectOffer>
        </div>
    );
};

export default Home;