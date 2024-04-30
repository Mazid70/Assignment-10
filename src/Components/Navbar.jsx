import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { HiLogin } from "react-icons/hi";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [theme, setTheme] = useState("light");
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  const handleSignOut = () => {
    logOut().then().catch();
  };
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);
  const Link = (
    <>
      <li>
        <NavLink
          to="/"
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "bold",
              color: isActive ? "#ffcc00" : "#fff",
              background: isActive ? "transparent" : "",
              border: isActive ? "1px solid #ffcc00" : "",
            };
          }}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/all"
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "bold",
              color: isActive ? "#ffcc00" : "#fff",
              background: isActive ? "transparent" : "",
              border: isActive ? "1px solid #ffcc00" : "",
            };
          }}
        >
          All Tourists Spot
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/add"
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "bold",
              color: isActive ? "#ffcc00" : "#fff",
              background: isActive ? "transparent" : "",
              border: isActive ? "1px solid #ffcc00" : "",
            };
          }}
        >
          Add Tourists Spot
        </NavLink>
      </li>

      {!user ? (
        <li>
          <NavLink
            to="/signin"
            style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : "bold",
                color: isActive ? "#ffcc00" : "#fff",
                background: isActive ? "transparent" : "",
                border: isActive ? "1px solid #ffcc00" : "",
              };
            }}
          >
            Sign In
          </NavLink>
        </li>
      ) : (
        <li>
          {" "}
          <NavLink
            to={`spot/${user.email}`}
            style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : "bold",
                color: isActive ? "#ffcc00" : "#fff",
                background: isActive ? "transparent" : "",
                border: isActive ? "1px solid #ffcc00" : "",
              };
            }}
          >
            My List
          </NavLink>
        </li>
      )}
    </>
  );
  return (
    <nav className="bg-[#080a3c] shadow-2xl fixed w-full top-0 z-50">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-blue-900 rounded-box w-52"
            >
              {Link}
            </ul>
          </div>
          <a className=" text-white font-bold lg:text-3xl text-xl">
            Wander<span className="text-[#ffcc00]">Hub</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{Link}</ul>
        </div>
        <div className="navbar-end">
          <div className=" drawer-end">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label htmlFor="my-drawer-4" className="drawer-button ">
                <div
                  className="tooltip tooltip-left mr-6"
                  data-tip={user ? user.displayName : "user"}
                >
                  <img
                    className="h-14 w-14 rounded-full bg-white"
                    src={
                      user
                        ? user.photoURL
                        : "https://atg-prod-scalar.s3.amazonaws.com/studentpower/media/user%20avatar.png"
                    }
                    alt="user"
                  />
                </div>
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer-4"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className=" p-4 w-80 flex  flex-col items-center min-h-full bg-base-200 text-base-content ">
                {/* Sidebar content here */}
                <div className="h-14 w-14 cursor-pointer ">
                  <img
                    className="h-full w-full rounded-full border-2 border-black"
                    src={
                      user
                        ? user.photoURL
                        : "https://static.vecteezy.com/system/resources/previews/019/879/198/non_2x/user-icon-on-transparent-background-free-png.png"
                    }
                    alt=""
                  />
                </div>
                <li>
                  {" "}
                  <h1 className="font-semibold">
                    {user ? user.displayName : ""}
                  </h1>
                </li>
                <li>
                  <h1 className="font-semibold">
                    {user ? user.email : "null"}
                  </h1>
                </li>
                <li>
                  <h1 className="font-semibold">
                    {user ? user.phoneNumber : " Null"}
                  </h1>
                </li>
                <div className="self-start mt-3">
                  {user ? (
                    <div
                      onClick={handleSignOut}
                      className="flex items-center gap-2 font-lg cursor-pointer"
                    >
                      <HiLogin /> Sign Out
                    </div>
                  ) : (
                    <NavLink to="/signin">
                      ?
                      <div className="flex items-center gap-2 font-lg cursor-pointer">
                        <HiLogin /> Sign In
                      </div>{" "}
                    </NavLink>
                  )}
                </div>
              </ul>
            </div>
          </div>
          <label className="flex cursor-pointer gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <input
              onChange={handleToggle}
              type="checkbox"
              value="dark"
              className="toggle theme-controller "
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
