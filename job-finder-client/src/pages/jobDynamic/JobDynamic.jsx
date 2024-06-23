import { Link, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { FaCrown } from "react-icons/fa";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { ImSpinner9 } from "react-icons/im";
import { FaLocationDot } from "react-icons/fa6";
import { BiDollar } from "react-icons/bi";
import { format } from "date-fns";
import Countdown from "react-countdown";
import { FcGoogle } from "react-icons/fc";

const JobDynamic = () => {
  const { id } = useParams();
  const axiosPublic = useAxiosPublic();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  console.log(data)

  useEffect(() => {
    const fetchData = async () => {
      const response = await axiosPublic.get(`/job/get/${id}`);
      const getJobData = response.data.data;
      if (getJobData) {
        setLoading(false);
        setData(getJobData);
      }
    };
    fetchData();
  }, [axiosPublic, id]);

  const renderCountdown = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <p>Application closed!</p>;
    } else {
      return (
        <div className="pt-3">
          {days > 0 && (
            <span className="border border-purple-500 text-purple-500  mr-1 px-5 py-3 rounded-lg hover:bg-purple-500 duration-300 hover:text-white">{`${days}d`}</span>
          )}
          {hours > 0 && (
            <span className="border border-purple-500 mr-1 text-purple-500 px-5 py-3 rounded-lg hover:bg-purple-500 duration-300 hover:text-white">{`${hours}h`}</span>
          )}
          {minutes > 0 && (
            <span className="border border-purple-500 text-purple-500  mr-1 px-5 py-3 rounded-lg hover:bg-purple-500 duration-300 hover:text-white">{`${minutes}m`}</span>
          )}
          {seconds > 0 && (
            <span className="border border-purple-500 text-purple-500  px-5 py-3 rounded-lg hover:bg-purple-500 duration-300 hover:text-white">{`${seconds}s`}</span>
          )}
        </div>
      );
    }
  };

  return (
    <div>
      <Navbar />
      {loading ? (
        <div className="flex items-center justify-center h-[100vh]">
          <ImSpinner9 fontSize="2.5rem" className="animate-spin" />
        </div>
      ) : (
        <div className="lg:w-[1300px] md:w-[1100px] w-full mx-auto">
          <div className="pt-32 flex items-start gap-6">
            <div className="flex-1 space-y-3">
              <p className="text-xl opacity-60">25-06-2023</p>
              <h1 className="lg:text-5xl md:text-3xl text-2xl font-medium">
                {data?.jobPostName}
              </h1>
              <p className="text-xl opacity-60">
                Develop and maintain software applications and systems for
                Apple’s products and services. Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Aliquid temporibus animi alias.
              </p>
              <div className="flex items-center gap-7 pt-5">
                <p className="flex items-center gap-1">
                  <FaLocationDot fontSize={"1.3rem"} /> {data?.location}
                </p>
                <p className="flex items-center gap-1">
                  <BiDollar fontSize={"1.3rem"} /> {data?.stipend}
                </p>
              </div>
              <hr />
              <div className="pt-3 flex items-center gap-3">
                <p className="text-lg">
                  Sector:{" "}
                  <span className="bg-gray-200 px-2 py-1 rounded-lg opacity-80">
                    {data?.jobSector}
                  </span>
                </p>
                <p className="text-lg">
                  Type:{" "}
                  <span className="bg-gray-200 px-2 py-1 rounded-lg opacity-80">
                    {data?.jobType}
                  </span>
                </p>
                <p className="text-lg">
                  Deadline:{" "}
                  <span className="bg-gray-200 px-2 py-1 rounded-lg opacity-80">
                    {data?.deadline
                      ? format(new Date(data.deadline), "dd-MM-yyyy")
                      : "No deadline"}
                  </span>
                </p>
              </div>
              <div className="pt-6">
                <div>
                  <h1 className="text-3xl">Position Overview</h1>
                  <p className="pt-2 opacity-80 text-lg">
                    As a Software Engineer, you will be responsible for
                    developing and maintaining software applications and systems
                    for Apple’s products and services. You will work with
                    various teams and stakeholders to understand their needs and
                    deliver high-quality software solutions. You will also
                    participate in code reviews, testing, debugging, and
                    documentation.
                  </p>
                </div>
                <div className="pt-7">
                  <h1 className="text-3xl pb-3">Skills</h1>
                  <div className="flex items-center gap-3">
                    <span className="opacity-80 bg-gray-200 px-3 py-1 rounded-xl hover:text-purple-700 duration-300 cursor-pointer">
                      Java
                    </span>
                    <span className="opacity-80 bg-gray-200 px-3 py-1 rounded-xl hover:text-purple-700 duration-300 cursor-pointer">
                      C
                    </span>
                    <span className="opacity-80 bg-gray-200 px-3 py-1 rounded-xl hover:text-purple-700 duration-300 cursor-pointer">
                      C++
                    </span>
                    <span className="opacity-80 bg-gray-200 px-3 py-1 rounded-xl hover:text-purple-700 duration-300 cursor-pointer">
                      C++
                    </span>
                    <span className="opacity-80 bg-gray-200 px-3 py-1 rounded-xl hover:text-purple-700 duration-300 cursor-pointer">
                      Python
                    </span>
                    <span className="opacity-80 bg-gray-200 px-3 py-1 rounded-xl hover:text-purple-700 duration-300 cursor-pointer">
                      Javascript
                    </span>
                    <span className="opacity-80 bg-gray-200 px-3 py-1 rounded-xl hover:text-purple-700 duration-300 cursor-pointer">
                      Typescript
                    </span>
                    <span className="opacity-80 bg-gray-200 px-3 py-1 rounded-xl hover:text-purple-700 duration-300 cursor-pointer">
                      MySQL
                    </span>
                    <span className="opacity-80 bg-gray-200 px-3 py-1 rounded-xl hover:text-purple-700 duration-300 cursor-pointer">
                      MongoDB
                    </span>
                  </div>
                </div>
                <div className="pt-7">
                  <h1 className="text-3xl">Number of openings</h1>
                  <p className="pt-2 opacity-80 text-lg">10</p>
                </div>
                <div className="pt-7">
                  <h1 className="text-3xl">Responsibilities</h1>
                  <div className="pt-2 opacity-80 text-lg">
                    <ol className="pl-12 space-y-2">
                      <li className="list-disc">
                        Design, develop, and maintain software applications and
                        systems for Apple’s products and services, such as
                        iPhone, iPad, Mac, Apple Watch, Apple TV, AirPods, Apple
                        Music, iCloud, etc.
                      </li>
                      <li className="list-disc">
                        Collaborate with other engineers, product managers,
                        designers, and testers to deliver user-centric and
                        scalable software solutions.
                      </li>
                      <li className="list-disc">
                        Write clean, efficient, and well-tested code using best
                        practices and standards.
                      </li>
                      <li className="list-disc">
                        Troubleshoot and debug software issues and provide
                        technical support as needed
                      </li>
                      <li className="list-disc">
                        Stay updated on the latest technologies and trends in
                        the software industry and apply them to improve Apple’s
                        products and services.
                      </li>
                    </ol>
                  </div>
                </div>
                <div className="pt-7">
                  <h1 className="text-3xl">Experience</h1>
                  <p className="pt-2 opacity-80 text-lg">
                    3+ years of professional experience in software engineering
                    or related field.
                  </p>
                </div>
                <p className="py-3 opacity-80 text-lg text-center">
                  If you feel interested in this job opportunity you are invited
                  to apply
                </p>
              </div>
            </div>
            <div className="w-80">
              <button className="w-full bg-purple-400 text-white py-3 px-4 rounded hover:bg-blue-400 mb-7 duration-300 flex items-center justify-center gap-2">
                <FaCrown fontSize="1.3rem" className="text-yellow-400" />
                Easy Apply
              </button>
              <button className="w-full bg-purple-600 text-white py-3 px-4 rounded hover:bg-purple-700 mb-7 duration-300">
                Apply
              </button>
              <div className="bg-[#F2F5FE] h-auto w-full rounded-2xl p-2">
                <Link to="/company/id">
                  <div className="mb-2">
                    <h1 className="text-lg text-center">Company Details</h1>
                    <div className="flex items-start gap-2 border rounded-md cursor-pointer p-2 border-purple-500">
                      <div className="border inline-flex p-1 rounded-lg bg-gray-100">
                        <FcGoogle fontSize="2.5rem" />
                      </div>
                      <div>
                        <p className="text-lg text-purple-500">
                          {data?.companyName} <br />
                        </p>
                        <p className="text-sm opacity-70">
                          Click for company details
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="pb-4">
                  <h1 className="text-lg text-center">Application closed in</h1>
                  {data?.deadline && (
                    <div>
                      <div className="pt-1 text-center">
                        <Countdown
                          date={Date.parse(data.deadline)}
                          renderer={renderCountdown}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <p className="w-full border text-center border-purple-600 py-3 px-4 rounded text-purple-700 mt-7 duration-300">
                Total Applied 3
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobDynamic;
