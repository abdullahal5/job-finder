import { Link, useLocation } from "react-router-dom";
import { MdLogin } from "react-icons/md";

const Navbar = () => {
  const location = useLocation();
  const navs = [
    { id: 0, name: "Home", path: "" },
    { id: 1, name: "Jobs", path: "jobs" },
    { id: 2, name: "Company", path: "company" },
  ];

  return (
    <div className="fixed z-50 backdrop-blur-md backdrop:filter bg-zinc-50 dark:bg-neutral-900 dark:bg-transparent dark:bg-opacity-80 bg-opacity-60 border-2 bg-transparent py-5 border-gray-200 mx-auto w-full lg:block md:block hidden">
      <div className="flex items-center justify-between lg:w-[1300px] md:w-[1100px] px-5 mx-auto">
        <Link>
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
                  location.pathname === `/${item.path}` ? "text-purple-800" : ""
                }`}
              >
                {item.name}
              </Link>
            </div>
          ))}
        </div>
        <div>
          <Link to="/login">
            <button className="bg-purple-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 focus:bg-purple-700 active:bg-purple-800">
              Login <MdLogin />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

// lg:w-[1300px] md:w-[1100px]
