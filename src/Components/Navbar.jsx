import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { Drawer, Sidebar, TextInput } from "flowbite-react";
import { HiLogin, HiPencil, HiSearch } from "react-icons/hi";
const Navbar = () => {
  const {user,logOut} = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);
  console.log(user)
  const [theme, setTheme] = useState("light");
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  const handleSignOut=()=>{
    logOut()
    .then()
    .catch()
  }
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
      <li>
        <NavLink
          to={user?`spot/${user.email}`:''}
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
        ""
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
          <div onClick={() => setIsOpen(true)} className="tooltip tooltip-left mr-6" data-tip={user?user.displayName:"user"}>
            <img
              className="h-14 w-14 rounded-full bg-white"
              src={user?user.photoURL:'https://atg-prod-scalar.s3.amazonaws.com/studentpower/media/user%20avatar.png'}
              alt="user"
            />
          </div>

          <label className="flex cursor-pointer  text-white gap-2">
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
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <input
              onChange={handleToggle}
              type="checkbox"
              value="synthwave"
              className="toggle theme-controller"
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
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>
        </div>
      </div>
       {/* drawer  */}
       <Drawer open={isOpen} onClose={handleClose} position="right">
        <Drawer.Header title="User Profile" titleIcon={() => <></>} />
        <Drawer.Items>
          <Sidebar
            aria-label="Sidebar with multi-level dropdown example"
            className="[&>div]:bg-transparent [&>div]:p-0"
          >
            <div className="flex h-full flex-col justify-between py-2">
              <div>
                <form className="pb-3 md:hidden">
                  <TextInput
                    icon={HiSearch}
                    type="search"
                    placeholder="Search"
                    required
                    size={32}
                  />
                </form>
                <Sidebar.Items>
                  <Sidebar.ItemGroup className="flex flex-col items-center">
                    <div
                      className="h-14 w-14 cursor-pointer "
                      onClick={() => setIsOpen(true)}
                    >
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
                    <h1 className="font-semibold">
                      {user ? user.displayName : ""}
                    </h1>
                    <h1 className="font-medium">
                      {user ? user.email : ""}
                    </h1>
                    <h1 className="font-semibold">
                      {user ? user.phoneNumber : ""}
                    </h1>
                    
                    <div className="self-start">
                      {user?<Sidebar.Item
                        icon={HiLogin}
                        onClick={handleSignOut}
                      >
                        Sign Out
                      </Sidebar.Item>:<NavLink to='/signin'><Sidebar.Item
                        icon={HiLogin}
                        
                      >
                        Sign In
                      </Sidebar.Item></NavLink>}
                      {user?<NavLink to="/update">
                      <Sidebar.Item
                        icon={HiPencil}
                      >
                        Update Profile
                      </Sidebar.Item>
                      </NavLink>
                      :""}
                      
                    </div>
                  </Sidebar.ItemGroup>
                </Sidebar.Items>
              </div>
            </div>
          </Sidebar>
        </Drawer.Items>
      </Drawer>
    </nav>
  );
};

export default Navbar;
