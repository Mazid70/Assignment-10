import { Link, useLoaderData } from "react-router-dom";
import { FaPen, FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
const MyTouristSpot = () => {
  const myTouristSpot = useLoaderData();
  const [myspot, setMySpot] = useState(myTouristSpot);
  const { user } = useContext(AuthContext);
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/userspot/user/${user.email}/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success",
              });
              const remaining = myspot.filter((cof) => cof._id != _id);
              setMySpot(remaining);
            }
          });
      }
    });
  };
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
          {myspot.map((spot) => (
            <tr key={spot._id}>
              <td className="border-2 p-5 text-center">
                {spot.tourists_spot_name}
              </td>
              <td className="border-2 lg:p-5 text-center">
                {spot.country_name}
              </td>
              <td className="border-2 lg:p-5 text-center">
                {spot.seasonality}
              </td>
              <td className="border-2 lg:p-5 text-center">
                {spot.average_cost}
              </td>
              <td className="border-2 lg:p-5 text-center py-16  flex justify-between items-center text-2xl">
                <Link to={user ? `/spot/${user.email}/${spot._id}` : ""}>
                  {" "}
                  <FaEye />
                </Link>{" "}
                <FaPen />{" "}
                <MdDelete
                  onClick={() => {
                    handleDelete(spot._id);
                  }}
                />{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyTouristSpot;
