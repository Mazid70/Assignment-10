import { FaLink } from "react-icons/fa6";
import { Link } from "react-router-dom";
const FeatureTours = () => {
  return (
    <section className="container mx-auto text-center py-10 pb-20 ">
      <h2 className="text-blue-900  font-bold text-xl mb-2">Featured Tours</h2>
      <h1 className="font-extrabold text-4xl">
        Beautiful Places Around Southeast Asia
      </h1>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 mt-8 ">
        <div className=" relative  ">
          <img
            className="h-full w-full  "
            src="https://mediaim.expedia.com/destination/1/44428a9fdd090b12172fd31353ee9a23.jpg"
            alt=""
          />
          <button className="absolute text-blue-900 font-bold text-lg bg-white px-7 py-2 top-1 right-1">
            {" "}
            5 Packages
          </button>
          <div className=" absolute bottom-1 text-white left-2 text-center ">
            <h1 className="text-3xl font-extrabold animate__animated animate__backInUp">
              Bangladesh
            </h1>
            <p>Starting from 1200$</p>
          </div>
          <div className="h-full flex items-center justify-center  w-full absolute  top-0  bg-black opacity-0 transition duration-300 ease-in-out hover:opacity-70">
            <Link to="/allspot/Bangladesh">
              <FaLink className="text-blue-700 text-4xl" />
            </Link>
          </div>
        </div>
        <div className=" relative ">
          <img
            className="h-full w-full"
            src="https://assets3.thrillist.com/v1/image/3127246/828x610/flatten;crop;webp=auto;jpeg_quality=60.jpg"
            alt=""
          />
          <button className="absolute text-blue-900 font-bold text-lg bg-white px-7 py-2 top-1 right-1">
            {" "}
            5 Packages
          </button>
          <div className=" absolute bottom-1 text-white left-2 text-center">
            <h1 className="text-3xl font-extrabold">Thailand</h1>
            <p>Starting from 1200$</p>
          </div>
          <div className="h-full flex items-center justify-center  w-full absolute  top-0  bg-black opacity-0 transition duration-300 ease-in-out hover:opacity-70">
            <Link to="/allspot/Thailand">
              <FaLink className="text-blue-700 text-4xl" />
            </Link>
          </div>
        </div>
        <div className=" relative">
          <img
            className="h-full w-full"
            src="https://www.nationsonline.org/gallery/Indonesia/Piaynemo-West-Papua.jpg"
            alt=""
          />
          <button className="absolute text-blue-900 font-bold text-lg bg-white px-7 py-2 top-1 right-1">
            {" "}
            5 Packages
          </button>
          <div className=" absolute bottom-1 text-white left-2 text-center">
            <h1 className="text-3xl font-extrabold">Indonesia</h1>
            <p>Starting from 1200$</p>
          </div>
          <div className="h-full flex items-center justify-center  w-full absolute  top-0  bg-black opacity-0 transition duration-300 ease-in-out hover:opacity-70">
            <Link to="/allspot/Indonesia">
              <FaLink className="text-blue-700 text-4xl" />
            </Link>
          </div>
        </div>
        <div className=" relative">
          <img
            className="h-full w-full"
            src="https://pfecglobal.com.bd/wp-content/uploads/2022/08/pfec_global_visa_study_in_malaysia_about.jpg"
            alt=""
          />
          <button className="absolute text-blue-900 font-bold text-lg bg-white px-7 py-2 top-1 right-1">
            {" "}
            5 Packages
          </button>
          <div className=" absolute bottom-1 text-white left-2 text-center">
            <h1 className="text-3xl font-extrabold">Malaysia</h1>
            <p>Starting from 1200$</p>
          </div>
          <div className="h-full flex items-center justify-center  w-full absolute  top-0  bg-black opacity-0 transition duration-300 ease-in-out hover:opacity-70">
            <Link to="/allspot/Malaysia">
              <FaLink className="text-blue-700 text-4xl" />
            </Link>
          </div>
        </div>
        <div className=" relative ">
          <img
            className="h-full w-full"
            src="https://media.timeout.com/images/105241469/750/422/image.jpg"
            alt=""
          />
          <button className="absolute text-blue-900 font-bold text-lg bg-white px-7 py-2 top-1 right-1">
            {" "}
            5 Packages
          </button>
          <div className=" absolute bottom-1 text-white left-2 text-center">
            <h1 className="text-3xl font-extrabold">Vietnam</h1>
            <p>Starting from 1200$</p>
          </div>
          <div className="h-full flex items-center justify-center  w-full absolute  top-0  bg-black opacity-0 transition duration-300 ease-in-out hover:opacity-70">
            <Link to="/allspot/Vietnam">
              <FaLink className="text-blue-700 text-4xl" />
            </Link>
          </div>
        </div>
        <div className=" relative ">
          <img
            className="h-full w-full"
            src="https://cdn.britannica.com/24/77424-050-4FF80B58/Angkor-Wat-Cambodia.jpg"
            alt=""
          />
          <button className="absolute text-blue-900 font-bold text-lg bg-white px-7 py-2 top-1 right-1">
            {" "}
            5 Packages
          </button>
          <div className=" absolute bottom-1 text-white left-2 text-center">
            <h1 className="text-3xl font-extrabold">Cambodia</h1>
            <p>Starting from 1200$</p>
          </div>
          <div className="h-full flex items-center justify-center  w-full absolute  top-0  bg-black opacity-0 transition duration-300 ease-in-out hover:opacity-70">
            <Link to="/allspot/Cambodia">
              <FaLink className="text-blue-700 text-4xl" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureTours;
