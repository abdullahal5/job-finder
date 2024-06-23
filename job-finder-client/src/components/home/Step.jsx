import { MdTipsAndUpdates } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { FaFileAlt } from "react-icons/fa";
import { MdWork } from "react-icons/md";

const Step = () => {
  return (
    <div className="lg:w-[1300px] md:w-[1100px] mx-auto">
      <h1 className="text-center gap-4 lg:text-5xl md:text-4xl text-3xl py-10">
        Follow These 4 Rules
        <span className="text-purple-800 "> For Getting A Job </span> Quickly
        <MdTipsAndUpdates className="text-purple-800 inline pl-1" />
      </h1>
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-5 md:gap-10 gap-5 items-center">
          <div className="border lg:w-80 md:w-80 w-full lg:h-56 md:h-auto h-auto rounded-xl p-5 hover:scale-105 duration-300 hover:border-purple-700 cursor-pointer bg-white">
            <div className="border inline-flex p-4 rounded-full bg-rose-100">
              <FaUser fontSize="1.5rem" className="text-rose-700" />
            </div>
            <h1 className="text-2xl font-medium py-3">Create a account</h1>
            <p className="text-gray-500 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              error perspiciatis molestiae corporis. Nihil repellendus sint eum
              error similique laborum.
            </p>
          </div>
          <div className="border lg:w-80 md:w-80 w-full lg:h-56 md:h-auto h-auto rounded-xl p-5 lg:mt-24 hover:scale-105 duration-300 hover:border-purple-700 cursor-pointer bg-white">
            <div className="border inline-flex p-4 rounded-full bg-purple-200">
              <IoSearchSharp fontSize="1.5rem" className="text-purple-800" />
            </div>
            <h1 className="text-2xl font-medium py-3">Search Job</h1>
            <p className="text-gray-500 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              error perspiciatis molestiae corporis. Nihil repellendus sint eum
              error similique laborum.
            </p>
          </div>
          <div className="border lg:w-80 md:w-80 w-full lg:h-56 md:h-auto h-auto rounded-xl p-5 hover:scale-105 duration-300 hover:border-purple-700 cursor-pointer bg-white">
            <div className="border inline-flex p-4 rounded-full bg-teal-100">
              <FaFileAlt fontSize="1.5rem" className="text-teal-800" />
            </div>
            <h1 className="text-2xl font-medium py-3">Upload Resume</h1>
            <p className="text-gray-500 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              error perspiciatis molestiae corporis. Nihil repellendus sint eum
              error similique laborum.
            </p>
          </div>
          <div className="border lg:w-80 md:w-80 w-full lg:h-56 md:h-auto h-auto rounded-xl p-5 lg:mt-24 hover:scale-105 duration-300 hover:border-purple-700 cursor-pointer bg-white">
            <div className="border inline-flex p-4 rounded-full bg-yellow-200">
              <MdWork fontSize="1.5rem" className="text-yellow-800" />
            </div>
            <h1 className="text-2xl font-medium py-3">Get Job</h1>
            <p className="text-gray-500 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              error perspiciatis molestiae corporis. Nihil repellendus sint eum
              error similique laborum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step;
