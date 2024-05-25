import { Link, useLocation } from "react-router-dom";
import { MdLogin } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import { FaCrown, FaRegUser } from "react-icons/fa";
import { TfiLayoutGrid2 } from "react-icons/tfi";
import { IoSearch } from "react-icons/io5";
import { RiCustomerService2Fill } from "react-icons/ri";

const Navbar = () => {
  const location = useLocation();
  const navs = [
    { id: 0, name: "Home", path: "" },
    { id: 1, name: "Jobs", path: "jobs" },
    { id: 2, name: "Company", path: "company" },
    { id: 3, name: "Contact", path: "contact" },
    {
      id: 4,
      name: (
        <>
          <div className="flex items-center gap-1 bg-purple-600 rounded-full px-3 py-[7px] text-white text-sm">
            <FaCrown fontSize="1.3rem" className="text-yellow-400 mr-1" />
            Upgrade
          </div>
        </>
      ),
      path: "pro",
    },
  ];

  return (
    <>
      <div className="fixed z-50 backdrop-blur-md backdrop:filter bg-zinc-50 dark:bg-neutral-900 dark:bg-transparent dark:bg-opacity-80 bg-opacity-60 border-2 bg-transparent py-5 border-gray-200 mx-auto w-full lg:block md:block hidden">
        <div className="flex items-center justify-between lg:w-[1300px] md:w-[1100px] px-5 mx-auto">
          <Link to="/">
            <div className="flex items-center gap-2">
              <img
                className="w-10"
                src="https://i.ibb.co/PzM4Gjs/search.png"
                alt=""
              />
              <h1 className="text-2xl">
                Job<span className="text-purple-800">Finder</span>
              </h1>
            </div>
          </Link>
          <div className="flex items-center gap-5">
            {navs.map((item) => (
              <div key={item.id}>
                <Link
                  to={`/${item.path}`}
                  className={`text-lg font-medium cursor-pointer hover:text-purple-800 duration-300 ${
                    location.pathname === `/${item.path}`
                      ? "text-purple-800"
                      : ""
                  }`}
                >
                  {item.name}
                </Link>
              </div>
            ))}
          </div>
          <div>
            <Link to="/authentication">
              <button className="bg-purple-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 focus:bg-purple-700 active:bg-purple-800">
                Login <MdLogin />
              </button>
            </Link>
          </div>
        </div>
      </div>
      <nav className="fixed z-50 top-2 right-2 left-2 w-auto backdrop-blur-md backdrop:filter bg-zinc-50 bg-opacity-60 border-2 bg-transparent py-2 dark:bg-neutral-900 dark:bg-transparent dark:bg-opacity-80 dark:border-t-violet-500/10 dark:border-b-0 dark:border-l-0 dark:border-r-0 border-gray-200 lg:hidden md:hidden block h-14 rounded-2xl">
        <div className="items-center flex justify-center gap-10 text center mx-auto relative dark:text-zinc-300 px-10">
          <Link
            to="/"
            className={`${
              location.pathname === "/"
                ? "text-violet-500 flex flex-col justify-center items-center"
                : ""
            }`}
          >
            <IoHomeOutline className="hover:text-violet-500 h-[20px] w-[20px]" />
            {location.pathname === "/" ? (
              <p className="text-sm uppercase">Home</p>
            ) : (
              ""
            )}
          </Link>
          <Link
            to="/jobs"
            className={`${
              location.pathname === "/jobs"
                ? "text-violet-500 flex flex-col justify-center items-center"
                : ""
            }`}
          >
            <IoSearch className="hover:text-violet-500 h-[20px] w-[20px] " />
            {location.pathname === "/jobs" ? (
              <p className="text-sm uppercase">Jobs</p>
            ) : (
              ""
            )}
          </Link>
          <Link
            to="/company"
            className={`${
              location.pathname === "/company"
                ? "text-violet-500 flex flex-col justify-center items-center"
                : ""
            }`}
          >
            <TfiLayoutGrid2 className="hover:text-violet-500 h-[20px] w-[20px]" />
            {location.pathname === "/company" ? (
              <p className="text-sm uppercase">Company</p>
            ) : (
              ""
            )}
          </Link>
          <Link
            to="/contact"
            className={`${
              location.pathname === "/contact"
                ? "text-violet-500 flex flex-col justify-center items-center"
                : ""
            }`}
          >
            <RiCustomerService2Fill className="hover:text-violet-500 h-[20px] w-[20px]" />
            {location.pathname === "/contact" ? (
              <p className="text-sm uppercase">Contact</p>
            ) : (
              ""
            )}
          </Link>
          <Link
            to="/authentication"
            className={`${
              location.pathname === "/authentication"
                ? "text-violet-500 flex flex-col justify-center items-center"
                : ""
            }`}
          >
            <FaRegUser className="hover:text-violet-500 h-[20px] w-[20px]" />
            {location.pathname === "/authentication" ? (
              <p className="text-sm uppercase">Auth</p>
            ) : (
              ""
            )}
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

// lg:w-[1300px] md:w-[1100px]
