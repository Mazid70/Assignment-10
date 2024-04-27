import "../App.css";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
const Footer = () => {
  return (
    <footer
      id="animation"
      className="md:flex-row md:flex-wrap flex-col lg:flex-row flex justify-evenly items-center  gap-10 lg:space-y-20"
    >
      <div className="lg:-mr-[300px] mt-20 ">
        <h1 className=" text-white font-bold lg:text-3xl text-xl ">
          Wander<span className="text-[#ffcc00]">Hub</span>
        </h1>
        <p className="mt-5 mb-3 w-1/2 ">
          Unlock endless possibilities with WanderHub. Explore, wander, and
          experience the world like never before
        </p>
        <h3 className="font-extrabold text-2xl mb-4">Follow Us on</h3>
        <div className="flex text-3xl  gap-5 items-center ">
          <FaFacebook />
          <FaTwitter />
          <FaInstagram />
          <FaLinkedin />
        </div>
      </div>
      <div>
        <h3 className="font-extrabold text-2xl mb-4">Tour Types </h3>
        <h6 className="font-semibold">Adventure Tours</h6>
        <h6 className="font-semibold">Group Tours</h6>
        <h6 className="font-semibold">Seasonal Tours</h6>
        <h6 className="font-semibold">Relaxation Tours</h6>
        <h6 className="font-semibold">Family Friendly Tours</h6>
      </div>
      <div>
        <h3 className="font-extrabold text-2xl mb-4">Contact Info </h3>
        <p className="flex items-center gap-3">
          <IoMdCall />
          +88 01533 333 333
        </p>
        <p className="flex items-center gap-3">
          <MdEmail />
          info@gmail.com
        </p>
        <p className="flex items-center gap-3">
          <FaLocationDot />
          72, Wall street, King Road, Dhaka
        </p>
      </div>

      <div>
        <h3 className="font-extrabold text-2xl mb-4">Gallery </h3>
        <div className="grid grid-cols-3 gap-2">
          <img
            className="h-16 w-20"
            src="https://mediaim.expedia.com/destination/1/44428a9fdd090b12172fd31353ee9a23.jpg"
            alt=""
          />
          <img
            className="h-16 w-20"
            src="https://assets3.thrillist.com/v1/image/3127246/828x610/flatten;crop;webp=auto;jpeg_quality=60.jpg"
            alt=""
          />
          <img
            className="h-16 w-20"
            src="https://www.nationsonline.org/gallery/Indonesia/Piaynemo-West-Papua.jpg"
            alt=""
          />
          <img
            className="h-16 w-20"
            src="https://pfecglobal.com.bd/wp-content/uploads/2022/08/pfec_global_visa_study_in_malaysia_about.jpg"
            alt=""
          />
          <img
            className="h-16 w-20"
            src="https://media.timeout.com/images/105241469/750/422/image.jpg"
            alt=""
          />
          <img
            className="h-16 w-20"
            src="https://cdn.britannica.com/24/77424-050-4FF80B58/Angkor-Wat-Cambodia.jpg"
            alt=""
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
