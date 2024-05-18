import { FcGoogle } from "react-icons/fc";
import { IoBookmarkOutline, IoLocationSharp } from "react-icons/io5";
import { MdWork } from "react-icons/md";
import { BsCash } from "react-icons/bs";
import { RxLapTimer } from "react-icons/rx";

const JobDetailsCard = () => {
  return (
    <div className="h-auto bg-white border rounded-xl px-5 py-4 shadow-md hover:border-purple-700 duration-300">
      <div className="flex items-center justify-between">
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
      <div>
        <h1 className="pl-1 text-xl font-medium pt-3">
          Expert Software Engineer
        </h1>
        <p className="text-sm text-gray-500 flex items-center justify-start gap-1 pt-1">
          <IoLocationSharp /> San Franscisco
        </p>
        <div className="flex items-center lg:justify-start md:justify-start justify-center gap-5 py-3 text-sm text-gray-700">
          <div>
            <p>
              <MdWork className="inline" /> Experience
            </p>
            <p className="pl-1">Fresher</p>
          </div>
          <div>
            <p>
              <RxLapTimer className="inline" /> Deadline
            </p>
            <p className="pl-1">19-01-2024</p>
          </div>
          <div>
            <p>
              <BsCash className="inline" /> Job Type
            </p>
            <p className="pl-1">Internship</p>
          </div>
        </div>
        <hr className="mx-10 my-2" />
        <div className="flex items-center justify-between pt-2">
          <p className="text-3xl">$12,999/mo</p>
          <div>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 focus:bg-purple-600 active:bg-purple-800">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetailsCard;
