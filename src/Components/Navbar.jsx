import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { Drawer, Sidebar, TextInput } from "flowbite-react";
import { HiLogin, HiPencil, HiSearch } from "react-icons/hi";
const Navbar = () => {
  const {user,logOut} = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);

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
      ) : <NavLink
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
    </NavLink>}
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
          <label className="swap swap-rotate">
  
  {/* this hidden checkbox controls the state */}
  <input onChange={handleToggle} type="checkbox" className="theme-controller" value="dark" />
  
  {/* sun icon */}
  <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
  
  {/* moon icon */}
  <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
  
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
