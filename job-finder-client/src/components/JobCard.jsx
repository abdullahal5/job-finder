import { FcGoogle } from "react-icons/fc";
import { IoBookmarkOutline } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const JobCard = ({ item }) => {
  return (
    <div>
      <div className="border lg:w-96 md:w-80 rounded-lg px-3 py-3 hover:border-purple-700 duration-300 bg-gradient-to-tl to-purple-50 from-rose-50">
        <div className="flex items-center justify-between ">
          <div className="flex items-start gap-3">
            <div className="border inline-flex p-1 rounded-lg bg-gray-100">
              <FcGoogle fontSize="2.5rem" />
            </div>
            <div>
              <h1>{item?.companyName}</h1>
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
          <h1 className="pl-1 text-xl font-medium">{item.jobPostName}</h1>
          <p className="text-sm text-gray-500 flex items-center justify-start gap-1 pt-1">
            <IoLocationSharp /> {item.location} {item.area}
          </p>
          <div className="py-4">
            <span className="text-purple-800 bg-purple-300 px-5 py-2 rounded-lg">
              {item.jobType}
            </span>
            <span className="text-purple-800 bg-purple-300 px-5 py-2 rounded-lg ml-3">
              {item.experienceLevel}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-medium">${item.stipend}/month</h1>
            <Link to={`/jobs/${item._id}`}>
              <button className="bg-purple-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 focus:bg-purple-600 active:bg-purple-800">
                Apply Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

JobCard.propTypes = {
  item: PropTypes.object,
};

export default JobCard;
