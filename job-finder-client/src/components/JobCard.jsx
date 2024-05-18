import { FcGoogle } from "react-icons/fc";
import { IoBookmarkOutline } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";

const JobCard = () => {
  return (
    <div className="">
      <div className="border lg:w-96 md:w-80 w-80 rounded-lg px-3 py-3 hover:border-purple-700 duration-300 bg-gradient-to-tl to-purple-50 from-rose-50">
        <div className="flex items-center justify-between ">
          <div className="flex items-start gap-3">
            <div className="border inline-flex p-1 rounded-lg bg-gray-100">
              <FcGoogle fontSize="2.5rem" />
            </div>
            <div>
              <h1>Google</h1>
              <p className="text-gray-500 text-sm">2 hrs ago</p>
            </div>
          </div>
          <div>
            <button className="border rounded-full w-10 h-10 flex items-center justify-center duration-300 hover:bg-gray-100">
              <IoBookmarkOutline fontSize="1.5rem" />
            </button>
          </div>
        </div>
        <div className="py-5">
          <h1 className="pl-1 text-xl font-medium">Expert Software Engineer</h1>
          <p className="text-sm text-gray-500 flex items-center justify-start gap-1 pt-1">
            <IoLocationSharp /> San Franscisco
          </p>
          <div className="py-4">
            <span className="text-purple-800 bg-purple-300 px-5 py-2 rounded-lg">
              Full Time
            </span>
            <span className="text-purple-800 bg-purple-300 px-5 py-2 rounded-lg ml-3">
              On-Site
            </span>
          </div>
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-medium">$2k - 3k/month</h1>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 focus:bg-purple-600 active:bg-purple-800">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
