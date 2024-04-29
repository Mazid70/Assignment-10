import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const MySpotEdit = () => {
    const{user}=useContext(AuthContext)
    return (
        <div className="  text-white  bg-no-repeat bg-cover bg-[url(https://wallpapercave.com/wp/wp9764008.jpg)]  min-h-screen flex justify-center items-center">
      <div className="border backdrop-blur-xl  w-full sm:w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 p-6  rounded-lg shadow-xl">
        <h2 className="text-3xl text-center mb-6 font-bold ">
          Add Tourists Spot
        </h2>
        <form onSubmit={handleUpdateTouristSpot} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 ">Image URL:</label>
              <input
                type="text"
                name="image"
                placeholder="Enter image URL"
                className=" bg-ta w-full px-4 py-2 border border-white placeholder:text-white bg-transparent rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block mb-1 ">Tourists Spot Name:</label>
              <input
                type="text"
                name="tourists_spot_name"
                placeholder="Enter tourists spot name"
                className="w-full px-4 py-2 border border-white placeholder:text-white bg-transparent rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block mb-1 ">Country Name:</label>
              <input
                type="text"
                name="country_name"
                placeholder="Enter country name"
                className="w-full px-4 py-2 border border-white placeholder:text-white bg-transparent rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block mb-1 ">Location:</label>
              <input
                type="text"
                name="location"
                placeholder="Enter location"
                className="w-full px-4 py-2 border border-white placeholder:text-white bg-transparent rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="col-span-2">
              <label className="block mb-1 ">Short Description:</label>
              <textarea
                name="short_description"
                placeholder="Enter short description"
                className="w-full px-4 py-2 border border-white placeholder:text-white bg-transparent rounded-lg focus:outline-none focus:border-blue-500"
                required
              ></textarea>
            </div>
            <div>
              <label className="block mb-1 ">Average Cost:</label>
              <input
                type="number"
                name="average_cost"
                placeholder="Enter average cost"
                className="w-full px-4 py-2 border border-white placeholder:text-white bg-transparent rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block mb-1 ">Seasonality:</label>
              <input
                type="text"
                name="seasonality"
                placeholder="Enter seasonality"
                className="w-full px-4 py-2 border border-white placeholder:text-white bg-transparent rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block mb-1 ">Travel Time:</label>
              <input
                type="text"
                name="travel_time"
                placeholder="Enter travel time"
                className="w-full px-4 py-2 border border-white placeholder:text-white bg-transparent rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block mb-1 ">Total Visitors Per Year:</label>
              <input
                type="number"
                name="total_visitors_per_year"
                placeholder="Enter total visitors per year"
                className="w-full px-4 py-2 border border-white placeholder:text-white bg-transparent rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block mb-1 ">User Email:</label>
              <input
                type="email"
                name="user_email"
                placeholder="Enter user email"
                className="w-full px-4 py-2 border border-white placeholder:text-white bg-transparent rounded-lg focus:outline-none focus:border-blue-500"
                value={user ? user.email : ""}
                disabled
              />
            </div>
            <div>
              <label className="block mb-1 ">User Name:</label>
              <input
                type="text"
                name="user_name"
                placeholder="Enter user name"
                className="w-full px-4 py-2 border border-white placeholder:text-white bg-transparent rounded-lg focus:outline-none focus:border-blue-500"
                value={user ? user.displayName : ""}
                disabled
              />
            </div>
          </div>
          <div>
            <button
              type="Update"
              className="w-full bg-yellow-400 text-white py-3 rounded-lg "
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
    );
};

export default MySpotEdit;