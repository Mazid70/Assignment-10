import { Link, useLocation, useNavigate } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaLock, FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const SignIn = () => {
  const{signIn,googleSingUp,facebookSingUp}=useContext(AuthContext)
  const [visible, setVisible] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const signInGoogle = () => {
    googleSingUp()
      .then(() => {
        setTimeout(() => {
          navigate(location?.state ? location.state : "/");
        }, 2000);
      })
      .catch(() => {});
  };
  const signInFacebook = () => {
    facebookSingUp()
      .then(() => {
        setTimeout(() => {
          navigate(location?.state ? location.state : "/");
        }, 2000);
      })
      .catch(() => {});
  };
  const passwordToggle = () => {
    setVisible(!visible);
  };
  const handleSignIn = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    signIn(email, password)
      .then(() => {
        setTimeout(() => {
          navigate(location?.state ? location.state : "/");
        }, 2000);
      })
      .catch(() => {});
  };

  return (
    <section className="-mt-16 flex items-center justify-center h-[100vh] bg-[url(https://wallpapercave.com/wp/wp9764008.jpg)] bg-no-repeat bg-cover">
      {/* <Helmet><title>Sign In</title></Helmet> */}
      <div className="backdrop-blur lg:backdrop-blur-xl w-[420px] px-[30px] py-[40px] shadow-xl border rounded-xl text-white ">
        <form onSubmit={handleSignIn} className="space-y-5">
          <h1 className="text-4xl font-bold text-center">Sign In</h1>
          <div className="flex items-center  border w-full h-12 rounded-full relative">
            <MdEmail className="absolute left-3" />
            <input
              className="w-full h-full bg-transparent rounded-full pl-10 placeholder:text-white "
              type="text"
              placeholder="Email"
              required
              name="email"
            />
          </div>
          <div className="flex items-center  border w-full h-12 rounded-full relative">
            <FaLock className="absolute left-3" />
            <input
              className="w-full h-full bg-transparent rounded-full pl-10 placeholder:text-white "
              type={visible ? "text" : "password"}
              placeholder="Password"
              required
              name="password"
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

          <div className="flex justify-between">
            {" "}
            <div>
              <input type="checkbox" required /> <span> Remember Me</span>{" "}
            </div>
            <span>
              <a href="#">Forget Password?</a>
            </span>
          </div>
          <div>
            <input
              className="w-full h-12 bg-white rounded-full text-[#6c6c6f] font-bold text-lg"
              type="submit"
              value="Sign In"
            />
          </div>
          <div className="flex items-center gap-2">
            {" "}
            <div className="h-[1px] bg-white w-full"></div>
            <p>Or</p>
            <div className="h-[1px] bg-white w-full"></div>
          </div>
        </form>
        <div
          onClick={signInGoogle}
          className=" mt-5 flex text-base font-bold items-center bg-white h-12 text-[#6c6c6f] rounded-full"
        >
          {" "}
          <FcGoogle className="text-2xl ml-6 mr-16" /> Sign in with Google{" "}
        </div>
        <div
          onClick={signInFacebook}
          className="mt-5 flex text-base font-bold items-center bg-white h-12 text-[#6c6c6f] rounded-full"
        >
          {" "}
          <FaFacebook className=" text-blue-600 text-2xl ml-6 mr-16" /> Sign in
          with Facebook{" "}
        </div>
        <h3 className="text-center mt-5">
          Do not have an account?{" "}
          <Link className="font-semibold" to="/signup">
            Register
          </Link>
        </h3>
      </div>
    </section>
  );
};

export default SignIn;
