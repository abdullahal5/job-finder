import { IoLocationSharp } from "react-icons/io5";

const CompanyCard = () => {
  return (
    <div className="lg:w-96 md:w-96 h-auto border rounded-xl px-2 py-4 group hover:bg-purple-700 duration-300 cursor-pointer border-purple-800">
      <div className="flex items-center justify-between">
        <div className="flex items-start gap-3">
          <div className="p-2 border rounded-full inline-block bg-white">
            <img
              src="https://i.ibb.co/XsqkSSH/download-removebg-preview.png"
              className="w-10"
              alt=""
            />
          </div>
          <div>
            <h1 className="text-xl font-medium group-hover:text-white duration-300">
              Figma
            </h1>
            <p className="text-sm text-gray-600 group-hover:text-white duration-300">
              Design Tool
            </p>
          </div>
        </div>
        <span className="group-hover:text-white duration-300 border px-2 py-1 rounded-lg border-purple-700">
          6 post
        </span>
      </div>
      <p className="text-lg pl-2 flex items-center justify-start gap-1 pt-1 group-hover:text-white duration-300  ">
        <IoLocationSharp /> New York
      </p>
      <div className="pt-2 flex items-center gap-3">
        <span className="px-4 py-1 text-[16px] rounded-xl bg-purple-200 text-purple-800 text-sm">
          Hiring
        </span>
        <span className="px-4 py-1 text-[16px] rounded-xl bg-rose-100 text-rose-800 text-sm">
          Remote
        </span>
        <span className="px-4 py-1 text-[16px] rounded-xl bg-teal-100 text-teal-800 lg:text- text-sm">
          Easy Apply
        </span>
      </div>
    </div>
  );
};

export default CompanyCard;
