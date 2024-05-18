import { FaHandshakeSimple } from "react-icons/fa6";
import CompanyCard from "../CompanyCard";

const Company = () => {
  return (
    <div className="lg:w-[1300px] md:w-[1100px] mx-auto">
      <h1 className="text-center gap-4 lg:text-5xl md:text-4xl text-3xl py-10 ">
        Meet With Our
        <span className="text-purple-800 "> Companies </span>
        <FaHandshakeSimple className="text-purple-800 inline pl-1" />
      </h1>
      <div className="flex items-center justify-center mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-2">
          <CompanyCard />
          <CompanyCard />
          <CompanyCard />
          <CompanyCard />
          <CompanyCard />
          <CompanyCard />
        </div>
      </div>
    </div>
  );
};

export default Company;
