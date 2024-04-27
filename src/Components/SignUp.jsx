import { Link, useNavigate } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaLock, FaUser, FaPhoneAlt } from "react-icons/fa";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

// import { Helmet } from "react-helmet";
const SignUp = () => {
  const [visible, setVisible] = useState(false);
  const passwordToggle = () => {
    setVisible(!visible);
  };
  const navigate = useNavigate();
  const onform = "/";
  const { createUser, setUpdateProfile } = useContext(AuthContext);
  const handleSignUp = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const phone = form.get("phone");
    const image = form.get("image");
    const password = form.get("password");

    createUser(email, password)
      .then((result) => {
        setUpdateProfile(name, image, phone);
        console.log(result.user);

        if (result.user) {
          
          setTimeout(() => {
            navigate(onform);
          }, 2000);
        }
      })
      .catch(() => {
      
      });
  };
  return (
    <section className=" -mb-10 flex items-center justify-center h-[100vh] bg-[url(https://wallpapercave.com/wp/wp9764008.jpg)] bg-no-repeat bg-cover">
   
      {/* <Helmet><title>Sign up</title></Helmet> */}
      <div className="backdrop-blur lg:backdrop-blur-xl w-[420px] px-[30px] py-[40px] shadow-xl border rounded-xl text-white ">
        <form onSubmit={handleSignUp} className="space-y-5">
          <h1 className="text-4xl font-bold text-center">Sign Up</h1>
          <div className="flex items-center  border w-full h-12 rounded-full relative">
            <FaUser className="absolute left-3" />
            <input
              className="w-full h-full bg-transparent rounded-full pl-10 placeholder:text-white "
              type="text"
              placeholder="Enter your Name"
              name="name"
              required
            />
          </div>
          <div className="flex items-center  border w-full h-12 rounded-full relative">
            <MdEmail className="absolute left-3" />
            <input
              className="w-full h-full bg-transparent rounded-full pl-10 placeholder:text-white "
              type="email"
              placeholder="Enter your Email"
              name="email"
              required
            />
          </div>
          <div className="flex items-center  border w-full h-12 rounded-full relative">
            <MdEmail className="absolute left-3" />
            <input
              className="w-full h-full bg-transparent rounded-full pl-10 placeholder:text-white "
              type="link"
              placeholder="Enter your Image URL"
              name="image"
              required
            />
          </div>
          <div className="flex items-center  border w-full h-12 rounded-full relative">
            <FaPhoneAlt className="absolute left-3" />
            <input
              className="w-full h-full bg-transparent rounded-full pl-10 placeholder:text-white "
              type="number"
              placeholder="Enter your Phone"
              name="phone"
              required
            />
          </div>
          <div className="flex items-center  border w-full h-12 rounded-full relative">
            <FaLock className="absolute left-3" />
            <input
              className="w-full h-full bg-transparent rounded-full pl-10 placeholder:text-white "
              type={visible ? "text" : "password"}
              placeholder="Create a Password"
              name="password"
              required
              pattern="(?=.*\d)(?=.*[!@#$%^&*])(?=.*[A-Z])[\w!@#$%^&*]+"
              title="Password must contain at least one uppercase letter, one number, and one special character"
            />
            {visible ? (
              <BsFillEyeFill
                className="text-xl absolute right-3"
                onClick={passwordToggle}
              ></BsFillEyeFill>
            ) : (
              <BsFillEyeSlashFill
                className="text-xl absolute right-3"
                onClick={passwordToggle}
              ></BsFillEyeSlashFill>
            )}
          </div>

          <div>
            <input
              className="w-full h-12 bg-white rounded-full text-[#6c6c6f] font-bold text-lg"
              type="submit"
              value="Sign Up"
            />
          </div>
        </form>

        <h3 className="mt-5 text-center">
          Already have an account?{" "}
          <Link className="font-semibold" to="/signin">
            Sign In
          </Link>
        </h3>
      </div>
    </section>
  );
};

export default SignUp;
